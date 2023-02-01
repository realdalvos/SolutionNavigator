fetch(http://my-burger-api.herokuapp.com/burgers/28)
    .then(response => response.json())
    .then(data => console.log(data))


const data= {
name:'Mushroom'}
}

fetch('http://my-burger-api.herokuapp.com/burgers/28', {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
    }
    body:JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => console.log(data))




const datas= {
    restaurant:'Restaurant',
    food: ['beef','pig','cheese']
    }

fetch('http://my-burger-api.herokuapp.com/burgers/28', {
method: 'PUT',
headers: {
    'Content-Type': 'application/json'
    }
    body:JSON.stringify(datas)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))



fetch('http://my-burger-api.herokuapp.com/burgers/28', {
            method:'DELETE'
   })
    .then(response => response.json())
    .then(data => console.log(data))



