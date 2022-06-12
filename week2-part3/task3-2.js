const getData = (name) => new Promise((resolve,reject) => {
    setTimeout(() => {
        const data = [
            {name: "Alexandra", score: 80  },
            {name: "Alison", score: 75  },
            {name: "Amanda", score: 90  },
            {name: "Angela", score: 65  },
            {name: "Bella", score: 78  },
            {name: "Carol", score: 50  }
        ]
    
        let score = data.find((item) => {
            return item.name.toLowerCase() === name.toLowerCase()
        })
        if(score) {
            resolve(score)
        } else (
            reject(new Error("nama tidak ada"))
        )
    },4000)
    
})

async function tampilData(nameIn) {
    try {
        if(typeof nameIn !== "string" || nameIn === "") {
            throw new Error("tolong masukan nama anda")
        }
        const data = await getData(nameIn);
        const {name, score} = data;
        console.log(`${name} anda mendapakan grade ${grade(score)}`)
    } catch(err) {
        console.log(err)
    }
}

function grade(nilai) {
    if(nilai <= 100 && nilai >= 90 ) {
        return "A"
    } else if(nilai <= 89 && nilai >= 70) {
        return "B"
    } else if(nilai <= 79 && nilai >= 70) {
        return "C"
    } else if(nilai <= 69 && nilai >= 50) {
        return "D"
    } else {
        return "E"        
    }
}

tampilData("Alison")


