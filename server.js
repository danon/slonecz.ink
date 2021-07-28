const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const keys = {
  stripePublishableKey: 'pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7',
  stripeSecretKey: 'sk_test_2DqyjEwaU0Nq0PpEMVQ3qSAw00zgrbnfPk'
};
const stripe = require('stripe')(keys.stripeSecretKey);

const dev = process.env.NODE_ENV !== 'production';

const app = next({dir: '.', dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/images', express.static(path.join(__dirname, 'images'), {
    maxAge: dev ? '0' : '365d'
  }));

  server.use(bodyParser.json());

  server.get('*', (req, res) => handle(req, res));

  server.post('/api/stripe/checkout', async (req, res) => {
    await stripe.charges.create({
      amount: req.body.amount,
      currency: 'PLN',
      description: 'slonecz.ink - Pelagia Kozielska',
      source: req.body.token.id
    });
    res.send({});
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Read on http://localhost:${PORT}`);
  });
});
