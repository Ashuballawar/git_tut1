const http=require('http')

const server=http.createServer((req,res)=>{

    console.log(req.url)

if(req.url=='/home'){

    res.setHeader('Content-Type','text/html')

    res.write('</html>')

    res.write('<head><title>My first Page</title></head>')

    res.write('<h1>Welcome to home</h1>')

    res.write('</html>')

}

else if(req.url=='/about'){

    res.setHeader('Content-Type','text/html')

    res.write('</html>')

    res.write('<head><title>My first Page</title></head>')

    res.write('<h1>Welcome to About Us page</h1>')

    res.write('</html>')

}

else if(req.url=='/node'){

    res.setHeader('Content-Type','text/html')

    res.write('</html>')

    res.write('<head><title>My first Page</title></head>')

    res.write('<h1> Welcome to my Node Js project</h1>')

    res.write('</html>')

}

})

server.listen(4000)