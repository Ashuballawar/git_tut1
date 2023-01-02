const http=require('http')
const server=http.createServer((req,res)=>{
    console.log('Ashutosh')
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Name</title><head>')
    res.write('<body><h1>Ashutosh</h1></body>')
    res.write('</html>')
    res.end();
})

server.listen(4000);