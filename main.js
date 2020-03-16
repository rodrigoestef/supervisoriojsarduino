const express = require('express')
const SerialPort = require('serialport')

const port = new SerialPort('COM3',{baudRate:3600});

const api = new express();
const server = require('http').createServer(api)
const io = require('socket.io')(server)

port.on('data', function (data) {
    console.log('Data:', data.toString('utf8'))
})
api.use(express.static(require('path').join(__dirname,'/front/build')))
api.set('views',require('path').join(__dirname,'views'))
api.engine('html',require('ejs').renderFile)

var light = 0

io.on('change',socket=>{
    light = light == 0 ? 1 : 0
})

io.on('connection',socket =>{
    socket.emit('state',light)
    console.log(socket.id)

    socket.on('change',()=>{
        console.log('1')
        
        light = light == 0 ? 1 : 0
        socket.emit('state',light)
        port.write('1')
        socket.broadcast.emit('state',light)
    })

})



// api.get('/api',async (req,res)=>{  
      
//     port.write('1')
//     res.send('mudou')
    
// })


api.use('/',async (req,res)=>{
    res.render('index.html')
})


server.listen(3000)