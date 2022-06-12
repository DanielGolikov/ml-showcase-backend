import express from 'express'

const app = express();

app.use('/api', express.static('models'))

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + port);
});