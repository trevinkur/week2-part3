const getMonth = (callback) => {
    setTimeout(()=>{
        let error = false
        let month = ['January', 'Febuary', 'March', 'April', 'May', 'Juni', 'July', 
        'August', 'September', 'October', 'November', 'Desember'];
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found'),[])
        }
    }, 4000)
}

function showMonth(err,month) {
    if(err == undefined) {
        month.map( (e) => {
            console.log(e) 
        })
    } else {
        console.log(err)
    }
}
    
getMonth(showMonth)


