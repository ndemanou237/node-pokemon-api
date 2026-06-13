console.log("hello, node !")

const express = require('express')
let pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

app.get('/', (req,res) => res.send('hello again, express  !'))
app.get('/api/pokemons/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
        // res.send(`vous avez démandé le pokemon ${pokemon.name}`)
        res.json(pokemon)

    })

app.get('/api/pokemons/', (req,res) => {
    
    res.send(`il y a ${pokemons.length} pokémons dans le pokédex pour le moment`)
})    

app.listen(port, () => console.log(`notre application node est démarrée sur : http://localhost:${port}`))