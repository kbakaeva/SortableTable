const express = require('express')
const logisticRouter = require('./routes/logistic.routes')
const PORT = process.env.PORT || 8081

const app = express()
app.use(express.json())
app.use('/table', logisticRouter)

const cors = require('cors');

app.use(cors());


app.listen(PORT, () => console.log(`server started on post ${PORT}`))