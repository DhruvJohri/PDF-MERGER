# PDF Merger 

A simple web application that allows users to upload and merge multiple PDF files into a single document. Built using **JavaScript, Node.js, Express.js, multer, pdf-merger-js.

---

## 🚀 Features
- Upload multiple **PDF files** and merge them into one.
- Uses **Express.js** to handle backend operations.
- Implements **multer** for file uploads.
- Utilizes **pdf-merger-js** to merge PDFs.
- **Bootstrap 4** ensures a clean and responsive UI.
- Automatically deletes temporary files after merging to optimize storage.

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, Bootstrap 4, JavaScript
- **Backend:** Node.js, Express.js
- **File Handling:** Multer (for uploads)
- **PDF Processing:** pdf-merger-js

---

## 📌 Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/DhruvJohri/PDF-MERGER.git
   cd PDF-MERGER
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Run the Server**
   ```sh
   node index.js
   ```
   Or use **nodemon** for automatic reloads:
   ```sh
   nodemon index.js
   ```

4. **Open in Browser**
   Go to `http://localhost:3000`

---

## 📂 Project Structure
```
PDF-MERGER/
│── public/        # Static files (CSS, JS, Images)
│── uploads/       # Temporary storage for uploaded PDFs
│── views/         # HTML Templates
│── index.js       # Main server file
│── package.json   # Dependencies & scripts
│── .gitignore     # Ignoring unnecessary files
```

---

## ⚠️ Security Considerations
- Restrict uploads to **only PDF files**.
- Set a **file size limit** to prevent server overload.
- Store files **temporarily** and delete them after merging.

---

## 🚀 Deployment
### Host on Render (Recommended for Node.js)
1. Push your project to GitHub.
2. Sign up at [Render](https://render.com/).
3. Create a **new web service** and connect your GitHub repo.
4. Set the **start command**:
   ```sh
   node index.js
   ```
5. Deploy & get your live URL!

Alternatively, you can deploy using **Railway, Vercel, or Heroku**.

---

## 🛠️ Future Enhancements
✅ Drag & Drop file upload support  
✅ Progress bar while merging  
✅ Allow users to reorder PDFs before merging  
✅ Cloud storage integration (AWS S3, Firebase)  

---

## 📝 Author
- **Dhruv Johri**
- GitHub: [DhruvJohri](https://github.com/DhruvJohri)

---

## 🎯 Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## 📜 License
This project is open-source and available under the **MIT License**.

