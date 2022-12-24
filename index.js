const express=new require('express');

app=express()

const port=80;

app.get("/",(request,response)=>{
    response.send(`
    <h1 style="text-align:center">Aarakshan-Ticket Booking Portal 🚀🚀🚀⚡⚡⚡</h1>
    <h3 style="text-align:center">Further Updaes is Coming Soon.......</h3>
    `)
})

app.listen(port,"127.0.0.1",()=>{
    console.log("Server is started at http://127.0.0.1:"+port);
})