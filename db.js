const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/ArticlesDB'; //название базы
const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true                  //стандартные опции
};

mongoose.connect(url, option);
const db = mongoose.connection;

db.on('error', (err) => {                    //ошибка базы данных
    console.log('DB err:', err);
});

db.once('open', () => {                     //соединение с базой данных
    console.log('Connected to DB');
});

db.once('close', () => {                    //соединение закрыто
    console.log('Close connection to DB');
});

