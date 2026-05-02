# KannadaDotCom MongoDB Schema

Collection: users

Fields:

- name (String)
- email (String)
- password (String)

Collection: posts

Fields:

- id (String)

- business
  - en (String)
  - kn (String)

- location
  - en (String)
  - kn (String)

- content
  - en (String)
  - kn (String)

- tags (Array)
  - en (String)
  - kn (String)

- likes (Number)
- comments (Number)
- saves (Number)

- image (String)
- createdAt (Number)

Collection: comments

Fields:

- postId (String)
- userId (String)
- comment (String)
- createdAt (Number)

Collection: likes

Fields:

- postId (String)
- userId (String)
- createdAt (Number)

Collection: saves

Fields:

- postId (String)
- userId (String)
- createdAt (Number)

Collection: otp_verification

Fields:

- phone (String)
- otp (String)
- createdAt (Number)
