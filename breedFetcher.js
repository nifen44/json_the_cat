const request = require('request');

const searchCat = (name) =>{
    request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (error, response, body) =>{
        // console.log('statusCode: ', response && response.statusCode);
        if(error){
            console.log(error);
        }else{
            const data = JSON.parse(body);
            console.log(data.length !== 0 && data[0].description);
        }       
})
}


const args = process.argv;
console.log(searchCat(args.slice(2)));