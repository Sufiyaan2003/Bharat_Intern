const editor = document.getElementById('editor');
const imageInput = document.getElementById('imageInput');
const saveButton = document.getElementById('save');
const fs = require('fs');

imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const imageUrl = event.target.result;
            const image = `<img src="${imageUrl}" alt="Uploaded Image">`;
            insertHtmlAtCursor(image);
        };
        reader.readAsDataURL(file);
    }
});

function insertHtmlAtCursor(html) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const fragment = range.createContextualFragment(html);
    range.insertNode(fragment);
}
app.post('/save', (req, res) => {
    const content = req.body.content;
    fs.writeFileSync('./data/content.txt', content);
    res.send('Content saved successfully.');
});
saveButton.addEventListener('click', () => {
    const content = editor.innerHTML;
    // Send the content to the backend for saving (explained in the backend section).
});

