fetch('http://my-burger-api.herokuapp.com/burgers/28')
    .then(response => response.json())
    .then(data => console.log(data))


const data= {
name:'Mushroom'
}

fetch('http://my-burger-api.herokuapp.com/burgers/27', {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => console.log(data))




const datas= {
    restaurant:'Restaurant',
    food: ['beef','pig','cheese']
    }

fetch('http://my-burger-api.herokuapp.com/burgers/24', {
method: 'PUT',
headers: {
    'Content-Type': 'application/json'
    },
    body:JSON.stringify(datas)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))



fetch('http://my-burger-api.herokuapp.com/burgers/22', {
            method:'DELETE'
   })
    .then(response => response.json())
    .then(data => console.log(data))


//async-await


const print = async () => 'I have been printed' //keyword async makes return a Promise instead of value
print().then(response => console.log(response))

async function getData(){
    const response = await fetch('https://restcountries.com/v3.1/all') //return Promise)
    const data = await response.json() // async function-> return a Promise, therefor await again
    console.log(data)
}
getData()