

function getPerson() {
    return fetch("https://jsonplaceholder.typicode.com/users")
     .then( response => {
         if(!response.ok) {
             throw new Error(response.statusText)
         } 
            return response.json() 
        }).then(response => {
            return response.map(e => {
                return e.name
            })
        })
}

async function tampilNama() {
    try {
        const person = await getPerson(); 
        console.log(person)
    } catch(err) {
        console.log(err)
    }
}

tampilNama()