const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;
const whitelist = ['http://localhost:3005'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

routerApi(app);

app.listen(port, () => {

});
