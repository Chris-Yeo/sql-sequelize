const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/connection')
const app = express()

const userRouter = require('./routes/user')
const movieRouter = require('./routes/movies')
const historyRouter = require('./routes/history_watch')
const subscriptionsRouter = require('./routes/subscriptions')

const User = require('./models/User')
const Movies = require('./models/Movies')
const History = require('./models/History_Watch')
const Subscriptions = require('./models/Subscriptions')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// sequelize up connection
db
.authenticate()
.then(()=> {
    console.log('Database Sequelize connected')
})
.then(()=> {
    User.sync().then(()=> console.log('User Table created'))
    Movies.sync().then(()=> console.log('Movies Table created'))
    History.sync().then(()=> console.log('History Table created'))
    Subscriptions.sync().then(()=> console.log('History Table created'))
})
.catch(err => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/', userRouter)
app.use('/', movieRouter)
app.use('/', historyRouter)
app.use('/', subscriptionsRouter)



app.listen(4000, ()=> {
    console.log('Server is running')
})