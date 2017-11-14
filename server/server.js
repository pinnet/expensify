const express = require('express');
const path = require('path');
const app = express();
const pubPath = path.join(__dirname,'..','public'); 
const PORT = 3000;
app.use(express.static(pubPath));

app.get('*',(req,res) => {
   res.sendFile(path.join(pubPath,'index.html'));
});

app.listen(PORT,() => {
    console.log(`Server Started on ${PORT}`);
})