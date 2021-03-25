sha1 = require('js-sha1');
const app = require('express')();
var cors = require('cors');
// const axios = require('axios');
const request = require('request');

app.use(cors())

// app.post('/pwn/:pass', (req, res) => {
//     res.send(checkPwn(`https://api.pwnedpasswords.com/range/${sha1(req.params.pass).slice(0, 5)}`))
// })


app.post('/pwn/:pass', (req, res) => {
    //let pwd = req.params.pass
    let result = 0;
    request(`https://api.pwnedpasswords.com/range/${sha1(req.params.pass).slice(0, 5)}`, (error, response, body) => {
        if(error) {
            console.error('error:', error)
        }
        console.log('statusCode:', response && response.statusCode);
        // console.log('body:', body);
        let arrBody = body.split(/\r?\n/);
         for(item in arrBody) {
             if(sha1(req.params.pass).slice(5, 40).toUpperCase() ==arrBody[item].slice(0, 35)) {result = (arrBody[item].split(":")[1])}
            // console.log(arrBody[item].slice(0,35)) 
        } 
        console.log(`Original: ${sha1(req.params.pass)}`);
        console.log(`PWN-Count: ${result}`);
        console.log('----')
        // console.log(sha1(req.params.pass).slice(5, 40))
        // console.log(arrBody[330].slice(0, 35))
        // console.log(arrBody)
        // res.send(body);
        res.send(result.toString())
    });
    


})


function checkPwn(url) {
    request(url, (error, response, body) => {
        console.error('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        return body;
    });
    // axios.get('https://api.pwnedpasswords.com/range', {
    //     params: {hash: sha1(req.params.pass).slice(0, 5)}
    // })
    // .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });  

    
    // fetch(`https://api.pwnedpasswords.com/range/${sha1(req.params.pass).slice(0, 5)}`, {method: 'POST'}).then(response => {
    //     return response.text();
    // })
    // .then(responseData => {
    //     console.log(responseData);
    // })
}

app.listen(3000, console.log('listening on 3000'))