import express from 'express';
import cors from 'cors';
var app = express();
// MIDDLEWARES
app.use(cors({
    origin: ['http://localhost:3000'],
}));
// API ROUTES
app.get('/', function (req, res) {
    res.send('hello world');
});
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () { return console.log("Server running at port " + PORT); });
