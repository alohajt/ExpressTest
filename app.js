const express = require('express')
const app = express()
const port = 3000

const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get('/user/login', (req, res) => {
    //接受get参数 用 req.query
    console.log(req.query)
    console.log('nihao')
    //处理数据
    if (us === 'wangyi' && ps == 456) {
        res.send({err:0. msg:'login ok'})
    } else {
        res.send({err:-1, msg:'user ps no ok'})
    }

})

//post method
app.post('/user/reg', (req, res) => {
//接受post参数 消息体 请求体 用req.body
//express 不能直接解析消息体 需要第三方插件
    let {us,ps} = res.body
    res.send({err:-1, msg:'user ps no ok'})
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))