const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    let feedbackData = req.body;
    let query = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged") VALUES ($1, $2, $3, $4, $5);';
    pool.query(query, [feedbackData.feeling, feedbackData.understanding, feedbackData.support, feedbackData.comments, false]).then((result) => {
        res.sendStatus(200);
    }).catch(error => {
        res.sendStatus(500);
        console.log('Error', error);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});