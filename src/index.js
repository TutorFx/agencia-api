const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require('./controllers/auth')(app);
require('./controllers/blog')(app);
require('./controllers/docs')(app);
require('./controllers/project')(app);
require('./controllers/user')(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server is running at port " + PORT);
});