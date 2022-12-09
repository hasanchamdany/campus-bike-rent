<h1 align="center">
  BiSA - Campus Bike Rent
</h1>

<p align="center">Tugas Pengembangan Aplikasi Web</p><br>
<p align="center">BiSA merupakan web app sebagai platform peminjaman sepeda UGM secara praktis dengan fitur- fitur yang memudahkan pengguna. BiSA memungkinkan penggunanya untuk bisa meminjam sepeda dengan lebih mudah, cepat, dan efisien.</p><br>


## 🖌️ Presentation Assets 
### Backend :
[PPT-backend](https://www.canva.com/design/DAFNzGW_Ies/VAiDC0x36AfbPneCubN9gQ/view?utm_content=DAFNzGW_Ies&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
### Frontend :
[PPT-frontend](https://www.canva.com/design/DAFSHcR5N8s/hdjSd_qLRkWLqRMc6kpfMQ/view?utm_content=DAFSHcR5N8s&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu)

## 🌐 Deployment 
Link: [https://bisa-frontend.vercel.app/](https://bisa-frontend.vercel.app/)
<br><br> Note: Page dashboard hanya bisa diakses dengan akun admin (ada di ppt & email)
<br><br> Deployment back-end: [https://bisa-backend.vercel.app](https://bisa-backend.vercel.app)


## ⚡ How to Run ?
### Run Backend
Command untuk run dev script yang didefinisikan di package. json file dalam project.
#### If you using npm:
```
npm install
npm run dev
```
#### if you using yarn:
```
yarn install
yarn dev
```
### Run frontend
Command untuk run React project :
#### if you using npm:
```
npm install
npm start
```
#### if you using yarn:
```
yarn install
yarn dev
```

## 📁 Foler Structure
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

