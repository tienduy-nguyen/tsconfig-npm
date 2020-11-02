const axios = require('axios');
axios
  .get('https://geek-jokes.sameerkumar.website/api?format=json')
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
