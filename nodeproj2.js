const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
//console.log(req.url,req.method,req.headers);
if(req.url==='/'){
    const filedata=fs.readFileSync('message.txt')
    const filedata1=filedata.toString();
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write(`<body><form action="/message" method="POST"><li style="list-style: none;">${filedata1}</li><input type="text" name="message"><button type="submit">Send</button></form></body>`)
    res.write('</html>')
    return res.end();
}
if(req.url==='/message'&& req.method==='POST'){
    const body=[];
    req.on('data',(chunk)=>{
     console.log(chunk)
body.push(chunk);
    });
   return req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();
        const message=parsedBody.split('=')[1]
      
        fs.writeFile('message.txt',message,err=>{
            if(err){
                console.log(err)
            }
            res.statusCode=302
            res.setHeader('Location','/')
            return res.end()
        })
       
    })
  
    
}


res.setHeader('Content-Type','text/html')
res.write('<html>')
res.write('<head><title>My First Page</title></head>')
res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
res.write('</html>')
res.end();
})
server.listen(4000) 