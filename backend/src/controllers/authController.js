import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

export const signup = async (req, res) => {
	const { name, email, mobile, password } = req.body;

	try {
		if (!mobile || !/^[0-9]{10}$/.test(mobile)) {
			return res.status(400).json({ message: "Valid mobile required" });
		}

		const userExists = await User.findOne({ mobile });
		if (userExists) {
			return res.status(400).json({ message: "User already exists for this mobile" });
		}

		if (email) {
			const emailExists = await User.findOne({ email });
			if (emailExists) {
				return res.status(400).json({ message: "Email already exists" });
			}
		}

		if (!password) {
			return res.status(400).json({ message: "Password required" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		await User.create({
			name: name || `User ${mobile.slice(-4)}`,
			email,
			mobile,
			password: hashedPassword,
		});

		return res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

export const login = async (req, res) => {
	const { identifier, password } = req.body;

	try {
		if (!identifier) {
			return res.status(400).json({ message: "Email or mobile required" });
		}

		const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
		const query = isEmail ? { email: identifier } : { mobile: identifier };
		const user = await User.findOne(query);

		if (!user || !(await bcrypt.compare(password, user.password))) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		const token = generateToken(user._id);

		return res.json({
			token,
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
				mobile: user.mobile,
			},
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

export const preSignup = async (req, res) => {
	const { mobile } = req.body;

	try {
		if (!mobile || !/^[0-9]{10}$/.test(mobile)) {
			return res.status(400).json({ message: "Valid mobile required" });
		}

		const user = await User.findOne({ mobile });
		if (user) {
			return res.status(400).json({ message: "Mobile already registered" });
		}

		return res.json({ message: "Mobile available" });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

export const resetPassword = async (req, res) => {
	const { mobile, password } = req.body;

	try {
		if (!mobile || !/^[0-9]{10}$/.test(mobile)) {
			return res.status(400).json({ message: "Valid mobile required" });
		}

		if (!password) {
			return res.status(400).json({ message: "Password required" });
		}

		const user = await User.findOne({ mobile });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		user.password = await bcrypt.hash(password, 10);
		await user.save();

		return res.json({ message: "Password updated successfully" });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};
