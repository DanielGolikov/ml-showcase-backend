import express from 'express'
import cors from 'cors';


const app = express();
app.use(cors())
app.use('/api', express.static('models'))

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + port);
});
