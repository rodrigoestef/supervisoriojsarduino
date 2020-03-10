const express = require('express')
const SerialPort = require('serialport')


const port = new SerialPort('COM3',{baudRate:3600});

port.on('data', function (data) {
    console.log('Data:', data.toString('utf8'))
  })

const api = new express();

const server = require('http').createServer(api)

api.use(express.static(require('path').join(__dirname,'/front/build')))
api.set('views',require('path').join(__dirname,'views'))
api.engine('html',require('ejs').renderFile)



api.get('/api',async (req,res)=>{  
      
    port.write('1')
    res.send('mudou')
})


api.use('/',async (req,res)=>{
    res.render('index.html')
})


server.listen(3000)