const app = require('express')();

const PORT = 3000;

console.log('Node env: ', process.env.NODE_ENV);

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV])


app.get('/movies', function(req, res) {
  knex
    .select('*')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});