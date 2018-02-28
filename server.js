const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://codeblackwell.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'hvcc.portal',
    issuer: 'https://codeblackwell.auth0.com/',
    algorithms: ['RS256']
});


app.get('/data', (req, res) => {
    const information = { testerKey: 'Properties'};
    res.json(information);
});

app.get('/authorized', authCheck, (req, res) => {
    res.send('secured resource');
});


app.listen(3000);
console.log("Listening on port 3000");