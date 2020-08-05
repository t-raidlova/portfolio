require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendGrid/mail');
const PORT = process.env.PORT || 5000;

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, PATCH, DELETE'
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

// app.get('/api', (req, res, next) => {
// 	res.send(`API works`);
// });

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
