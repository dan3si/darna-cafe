const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./mailer')
const PORT = process.env.PORT || 80

const app = express()

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', express.static(`${__dirname}/frontend`))

app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create-order', bodyParser.text(), ({ body }, res) => {
    const flavor = JSON.parse(body).flavor
    const comment = JSON.parse(body).comment
    mailer.sendOrder(flavor, comment)
    res.send('succesfull')
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))