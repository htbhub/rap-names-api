const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'	
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthPlace': 'unknown'
    }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

//name is the key in the object
app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }

})
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}, betta go catch it!`)
})