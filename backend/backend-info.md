# KannadaDotCom — Backend

REST API for the KannadaDotCom platform — a community app for the Kannada-speaking business network. Built with Node.js, Express 5, and MongoDB.

## Stack

Node.js · Express 5 · MongoDB (Mongoose) · JWT · bcryptjs

## Getting Started

**Prerequisites:** Node.js v18+, a MongoDB instance (local or Atlas)

```bash
npm install
```

Create a `.env` file in the `backend/` root. All variables are required except `PORT`:

```env
MONGO_URI=mongodb_uri  # or your Atlas connection string
JWT_SECRET=your_secret_here                         # use a long, random string in production
PORT=4000                                           # optional, defaults to 4000
```

Start the server:

```bash
npm run dev    # development — auto-restarts on changes via nodemon
npm start      # production
```

Once running, hit `GET /` to confirm the server is up.

## API

All routes are prefixed with `/api`. Protected routes require `Authorization: Bearer <token>`.

### Auth — `/api/auth`

| Method | Endpoint             | Auth | Description                                       |
|--------|----------------------|------|---------------------------------------------------|
| `POST` | `/pre-signup`        | —    | Check if a mobile number is available             |
| `POST` | `/signup`            | —    | Register a new user                               |
| `POST` | `/login`             | —    | Login, returns JWT + user object                  |
| `POST` | `/reset-password`    | —    | Reset password by mobile (OTP handled on frontend)|
| `POST` | `/update-profession` | 🔒   | Update the authenticated user's profession        |

**Signup body:** `mobile` (required), `password` (required), `name`, `email` (optional)

**Login body:** `identifier` (mobile or email) + `password`. Returns:
```json
{ "token": "...", "user": { "id", "name", "email", "mobile", "profession" } }
```

**Valid professions:** `Business Owner`, `Aspiring Entrepreneur`, `Content Creator`, `Service Provider`, `Freelancer`, `Digital Marketer`, `Student / Learner`, `Job Seeker`, `Investor`, `Guest`

### Posts — `/api`

| Method | Endpoint | Auth | Description      |
|--------|----------|------|------------------|
| `GET`  | `/posts` | —    | Fetch all posts  |

Posts are bilingual — `business`, `location`, `content`, and `tags` each contain `en` and `kn` fields.

## Models

**User** — `name`, `email` (optional, sparse unique), `mobile` (required, unique), `password` (bcrypt), `profession` (enum, defaults to `"Guest"`)

**Post** — `business`, `location`, `content`, `tags` (all bilingual), `likes`, `comments`, `saves`, `image`, `createdAt`

## Notes

- Passwords are hashed with bcryptjs (cost factor 10)
- JWTs expire after 24 hours
- The `email` index is sparse to allow multiple mobile-only users — `db.js` auto-migrates legacy indexes on startup
