const fs = require("fs");
const readline = require("readline");
const { json } = require("stream/consumers");

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

rl.question("Masukan nama : ", (nama) => {
    rl.question("Masukan class: ", (classIn) => {
        const character = {
            id: 0,
            name: nama,
            class: classIn,
            hp: Math.floor(Math.random() * 500 + 100),
            atk: Math.floor(Math.random() * 50 + 20),
            ability: "Deal 120% damage",
            img: `img/${nama}.png`
        }

        const file = fs.readFileSync("character.json", "utf-8");
        const characters = JSON.parse(file);
        character.id += characters.length + 1;
        characters.push(character);

        fs.writeFileSync("character.json", JSON.stringify(characters))
        console.log("terima kasih data telah dimasukan")
        rl.close()
    })
})