const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs');
const app = express();
// 
app.use(express.static(path.join(__dirname, 'build')));

app.get('/merchandise/nft/token', async function (req, res) {
  const { id } = req.query
  if (!id) {
    return res.send('error');
  }
  const selectFile = await new Promise((resolve) => {
    fs.readdir(path.join(__dirname, 'build', '/static/media'), (err, files) => {
      files.forEach(file => {
        const fileArr = file.split('.')
        if (Number(id) === Number(fileArr[0])) {
          resolve(file)
        }
      });
    });
  })

  res.sendFile(path.join(__dirname, 'build', `/static/media/${selectFile}`));
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000);
