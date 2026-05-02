# KannadaDotCom Database Relationships

Users Collection

A user can create posts.

users -> posts
userId → owner of the post

Posts Collection

Each post belongs to one user.

posts.userId → users.\_id

Comments Collection

Users can comment on posts.

comments.userId → users.\_id
comments.postId → posts.\_id

Likes Collection

Users can like posts.

likes.userId → users.\_id
likes.postId → posts.\_id

Saves Collection

Users can save posts.

saves.userId → users.\_id
saves.postId → posts.\_id

OTP Verification Collection

Used during login verification.

otp_verification.phone → users.phone
