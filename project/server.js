const express = require('express');
const fs = require('fs');
const app = express();



app.use('/', express.static('public'));





const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('связь установлена');
});