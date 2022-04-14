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

app.listen(3001, () => {
    console.log("Server is running at port 3001");
});