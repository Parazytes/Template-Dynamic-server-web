module.exports= {

    HelloWorld(_,res){
        res.render('main', {
            body: 'Hello World'
        })
    }
}