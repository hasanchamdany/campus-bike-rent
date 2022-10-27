<h1 align="center">
  Campus Bike Rent
</h1>

<p align="center">Tugas Pengembangan Aplikasi Web</p><br>

# Package included:
- install npm
```
npm install
```
- install express
```
npm install express
```
- add express
```
npm add express
```
- install nodemon
```
npm add nodemon
```
- install mongosh
```
npm add mongosh
```
- install mongoose
```
npm add mongoose
```
- install dotenv
```
npm add dotenv
```
- install JWT
```
npm add jsonwebtoken
```
- install bcryptjs
```
npm add bcryptjs
```
- install cookie-parser
```
npm add cookie-parser
```
- install config
```
npm add config
```
# Foler Structure
```
📦api
 ┣ 📂config
 ┃ ┗ 📜default.json
 ┣ 📂src
 ┃ ┣ 📂controller
 ┃ ┃ ┣ 📜adminController.js
 ┃ ┃ ┣ 📜authController.js
 ┃ ┃ ┣ 📜bikeController.js
 ┃ ┃ ┣ 📜bookingController.js
 ┃ ┃ ┗ 📜memberController.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜Admin.js
 ┃ ┃ ┣ 📜Bike.js
 ┃ ┃ ┣ 📜Booking.js
 ┃ ┃ ┗ 📜Member.js
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜admins.js
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┣ 📜bikes.js
 ┃ ┃ ┣ 📜bookings.js
 ┃ ┃ ┗ 📜members.js
 ┃ ┗ 📂utils
 ┃ ┃ ┣ 📜error.js
 ┃ ┃ ┗ 📜verifyToken.js
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┗ 📜package.json

📦client
 ┣ 📂public
 ┃ ┣ 📂images
 ┃ ┣ 📜index.html
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜rent.js
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜App.test.js
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.js
 ┃ ┣ 📜logo.svg
 ┃ ┣ 📜reportWebVitals.js
 ┃ ┗ 📜setupTests.js
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
 ```

## 🗒️ Contribution Guide

### Branch Name

```
<type>/<short_description>

# contoh
feature/get-all-books
```

`<type>` :

- `feature`: saya menambahkan fitur baru
- `fix`: saya memperbaiki fitur

[Learn More](https://nvie.com/posts/a-successful-git-branching-model/)

### Commit Message (Git Conventional Commits)

```
<type>(scope): <short_summary>

# contoh
feat(books): get all books service
fix(books): missing variable
```

[Learn More](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)


# Run
Command untuk run dev script yang didefinisikan di package. json file dalam project.
```
npm run dev
```
