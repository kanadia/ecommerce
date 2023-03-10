import express from 'express';
import path from 'path';
import hbs from 'hbs';

const PORT = 3000;
const app = express();
const templatePath = path.join(__dirname, '../templates');

app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', template);

app.get('/', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`);
});
