const fs = require('fs');
const request = require('request')
request('https://nodejs.org/docs/latest/api/cluster.json', (err, response, body) => {
    fs.writeFileSync("./cluster.json", body);
});
