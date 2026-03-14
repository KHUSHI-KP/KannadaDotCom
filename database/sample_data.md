# Sample Data for KannadaDotCom

## Login Details (Dummy Data)

Phone Number: 7894561234
Password: Demo@12\*

Signup OTP: 123456

## Users Collection

{
name: "Demo User",
email: "demo@gmail.com",
password: "Demo@12\*"
}

## Posts Collection

{
id: "post001",

business: {
en: "Coffee Shop",
kn: "ಕಾಫಿ ಅಂಗಡಿ"
},

location: {
en: "Bangalore",
kn: "ಬೆಂಗಳೂರು"
},

content: {
en: "Best filter coffee in the city",
kn: "ನಗರದ ಅತ್ಯುತ್ತಮ ಫಿಲ್ಟರ್ ಕಾಫಿ"
},

tags: [
{ en: "coffee", kn: "ಕಾಫಿ" },
{ en: "cafe", kn: "ಕಾಫೆ" }
],

likes: 5,
comments: 2,
saves: 1,

image: "coffee.jpg",
createdAt: 1710412800
}

## Comments Collection

{
postId: "post001",
userId: "user001",
comment: "Nice place!",
createdAt: 1710412800
}

## Likes Collection

{
postId: "post001",
userId: "user001",
createdAt: 1710412800
}

## Saves Collection

{
postId: "post001",
userId: "user001",
createdAt: 1710412800
}

## OTP Verification Collection

{
phone: "7894561234",
otp: "123456",
createdAt: 1710412800
}
