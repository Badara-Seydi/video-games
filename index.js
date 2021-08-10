require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.static('public'));

// //on met en place le système de session après l'installation du package express-session
// const session = require('express-session');
// app.use(session(
// 	{
// 		secret: process.env.SESSION_SECRET,
// 		resave: true,
// 		saveUninitialized: true
// 	}
// ));

// //middleware maison pour initialiser la collection de jeux
// app.use((request, response, next) => {
// 	if (!request.session.games) {
// 		request.session.games = []
// 	}

// 	next();
// });
app.set ('view engine' , 'ejs');
app.set('views','./views');
app.use(express.urlencoded({ extended: true }));
const router = require('./app/router/router');
app.use(router);

const PORT = process.env.PORT || 3500;

app.listen(PORT, _ => {console.log(`LISTENING ON http://localhost:${PORT}`)});

