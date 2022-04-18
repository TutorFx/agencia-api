const mongoose = require('mongoose');

const  mongoAtlasUri =
"mongodb+srv://tutorfx:bsb15155@turbo.ezvl9.mongodb.net/Turbo?retryWrites=true&w=majority";
// Conecta no MongoDB
mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true } /* "mongodb://localhost:27017/User" */);
mongoose.Promise = global.Promise;

module.exports = mongoose;