
const express = require('express');
const app = express();

app.use(require('./middleware/headers'));

app.use('/api', require('./controllers/yelp_controller'));

app.listen(3000, () => console.log('server app listening on 3000'));