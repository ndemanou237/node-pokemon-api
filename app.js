console.log("hello, node !")

const express = require('express')
const morgan = require('morgan')
const { success } = require('./helper')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000


app.use(morgan('dev'))

app.get('/', (req,res) => res.send('hello again, express  !'))
app.get('/favicon.ico', (req,res) => res.sendStatus(204))

app.get('/api/pokemons/', (req,res) => {
    
    const message = "la liste des pokémons a bien été récupérée."
    res.json(success(message,pokemons))
})  

app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
        // res.send(`vous avez démandé le pokemon ${pokemon.name}`)
        const message = "un pokémon à bien été trouvé"
        res.json(success(message,pokemon))

    })

  

app.listen(port, () => console.log(`notre application node est démarrée sur : http://localhost:${port}`))