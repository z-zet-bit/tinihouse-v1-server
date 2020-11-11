import express from 'express'
import bodyParser from 'body-parser'
import { listings, Listing } from './listings'

const app = express()
const port = 9000

app.use(bodyParser.json())

app.get('/', (_req, res) => res.send('<h1>tinyhouse-v1-server</h1>'))

app.get('/listings', (_req, res) => res.send(listings) )

app.post('/delete-listing', (req, res) => {
    const id: string = req.body.id
    for (let i = 0; i < listings.length; i++) {
        if (listings[i].id === id) {
            return res.send(listings.splice(i, 1))
        }
    }
    return res.send('faile to delete listing')
})


app.listen(port)
console.log(`[app]: http://localhost:${port}`)


