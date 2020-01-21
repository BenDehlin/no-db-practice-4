const express = require('express')
const app = express()
const cors = require('cors')
const port = 3333

app.use(cors())
app.use(express.json())

const peopleCtrl = require('./controllers/peopleController')
const peopleUrl = '/api/people'

//ENDPOINTS
app.get(peopleUrl, peopleCtrl.getPeople)
app.post(peopleUrl, peopleCtrl.postPeople)
app.put(`${peopleUrl}/:id`, peopleCtrl.putPeople)
app.delete(`${peopleUrl}/:id`, peopleCtrl.deletePeople)



app.listen(port, ()=> console.log(`Listening on port ${port}`))