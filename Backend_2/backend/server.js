import express from 'express';


const app = express();


app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title:'A joke',
            content:'this is a joke'
        },
        {
            id:2,
            title:' Two joke',
            content:'this is two joke'
        },
        {
            id:3,
            title:'Three joke',
            content:'this is three joke'
        },
        {
            id:4,
            title:'Four joke',
            content:'this is four joke'
        },
        {
            id:5,
            title:'Five joke',
            content:'this is five joke'
        },
    ];
    res.send(jokes);
});

const port = process.env.Port|| 3000;

app.listen(port,()=>{
    console.log(`server is running at https://localhost:${port}`);
}
);