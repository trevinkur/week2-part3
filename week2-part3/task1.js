
const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

function validasiHari(hari) {
    const namaHari = ["minggu","senin", "selasa", "rabu", "kamis","jumat","sabtu"]
    if(!namaHari.includes(hari.toLowerCase())) {
       console.log(new Error("tolong masukan nama hari"))
    } else {
    cekHariKerja(hari)
        .then(response => console.log(`Hari ${response} adalah hari kerja`))
        .catch(response => console.log(response))
    }
}

// cekHariKerja("selesai")
//     .then(response => console.log(response))
//     .catch(response => console.log(response))
// //  .then(response => console.log())

validasiHari("selasa")

async function hariKerja(hari) {
    try {
        validasi(hari)
        const cek = await cekHariKerja(hari)
        console.log(`Hari ${cek} adalah hari kerja`)
    } catch(err) {
        console.log(err)
    }
}

function validasi(hari) {
    const namaHari = ["minggu","senin", "selasa", "rabu", "kamis","jumat","sabtu"]
        if(!namaHari.includes(hari.toLowerCase())) {
            throw new Error("tolong masukan nama hari")
        }
}

// hariKerja("selesai")