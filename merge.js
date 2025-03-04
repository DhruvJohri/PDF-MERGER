const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function mergePdfs(p1, p2) {
    try {
        // Load PDFs
        const pdf1Bytes = fs.readFileSync(p1);
        const pdf2Bytes = fs.readFileSync(p2);
        
        const pdf1 = await PDFDocument.load(pdf1Bytes);
        const pdf2 = await PDFDocument.load(pdf2Bytes);
        
        // Create new PDF
        const mergedPdf = await PDFDocument.create();
        
        // Copy pages
        const copiedPages1 = await mergedPdf.copyPages(pdf1, pdf1.getPageIndices());
        copiedPages1.forEach(page => mergedPdf.addPage(page));

        const copiedPages2 = await mergedPdf.copyPages(pdf2, pdf2.getPageIndices());
        copiedPages2.forEach(page => mergedPdf.addPage(page));

        // Ensure "public/" folder exists
        const publicDir = path.join(__dirname, 'public');
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir);
        }

        // Save merged PDF
        let d = new Date().getTime();
        const outputPath = path.join(publicDir, `${d}.pdf`);
        fs.writeFileSync(outputPath, await mergedPdf.save());

        return d;
    } catch (error) {
        console.error("Error merging PDFs:", error);
        throw error; // Throw error so server logs it
    }
}

module.exports = { mergePdfs };
