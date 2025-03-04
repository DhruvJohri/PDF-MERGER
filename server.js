const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');
const { mergePdfs } = require('./merge');

const upload = multer({ dest: 'uploads/' });



app.use('/static', express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));  // This will serve CSS from root




// ✅ Set EJS as View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

const port = 3000;

// ✅ Serve Welcome Page First
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/welcome.html"));
});

// ✅ Serve Index Page
app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

// ✅ Handle File Upload and Merge PDFs
app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    console.log(req.files);
    let d = await mergePdfs(
        path.join(__dirname, req.files[0].path),
        path.join(__dirname, req.files[1].path)
    );
    
    // ✅ Render success.ejs and Pass File Name
    res.render('success', { fileName: `${d}.pdf` });
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
