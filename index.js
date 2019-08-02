const express = require('express')
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}
app.use(express.static(__dirname + '/boxes/dist/boxes'));


app.get('*', (req, res) => res.sendFile(__dirname + '/boxes/dist/index.html') );

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
