import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend fonctionnel !');
});

app.get('/categories', (req, res) => {
  res.send('Backend fonctionnel Categories trouvés!');
});

app.get('/modeles', (req, res) => {
  res.send('Backend fonctionnel : Modeles trouvé !');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});