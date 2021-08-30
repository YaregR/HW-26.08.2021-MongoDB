require('./db');
const ArticleModel = require('./models/article');

const run = async () => {
    // const article = new ArticleModel;
    // article.title = 'Талибан';
    // article.author = 'wiki';
    // article.text = 'Слово «талибан» в переводе с пушту означает «ученики», множественное число от слова «талиб».';
    
    // const doc = await article.save();
    // console.log(doc._id);

    const docs = await ArticleModel.find({ 'title': 'Вакцинация' }).updateOne( { text: 'Аллах Акбар!' });
    
    console.log(docs);

    // ArticleModel.updateOne({ title: 'Талибан' }, { title: 'Движение Талибан' }, () => {     
    // });
};

run();
