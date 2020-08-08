require('dotenv').config();
const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendGrid/mail');
const PORT = process.env.PORT || 5000;

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const app = express();

app.use(sslRedirect());
app.use(express.static(path.join(__dirname, './portfolio/build')));

app.use(bodyParser.json());
app.use(cors());
app.use((res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'https://sendgrid.api-docs.io'); // Change later to only allow our server
	res.setHeader('Access-Control-Allow-Methods', 'POST');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, './portfolio/build', 'index.html'));
});

app.post('/v3/mail/send', (req, res) => {
	console.log(req.body);

	sendGrid.setApiKey(SENDGRID_API_KEY);

	const msg = {
		to: 'tereza.raidlova@gmail.com',
		from: req.body.email,
		subject: 'Website Contact',
		text: req.body.message,
	};

	sendGrid
		.send(msg)
		.then(() => {
			res.status(200).json({
				success: true,
			});
		})
		.catch((err) => {
			console.log('error: ', err);
			res.status(401).json({
				success: false,
			});
		});
});

app.listen(PORT);
