var sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(sslRedirect());
app.use(express.static(path.join(__dirname, './portfolio/build')));

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, './portfolio/build', 'index.html'));
});

app.listen(PORT);
