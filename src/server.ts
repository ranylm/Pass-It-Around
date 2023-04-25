import express =require('express')

const app = express()
const PORT= process.env.PORT ||3000

app.get('/bottle/',(req,res)=>{
  res.send(`<h1>99 Bottles of beer on the wall</h1>
  <a href='/bottle/98'>take one down, pass it around</a>
  `)
})

app.get('/bottle/:bottles',(req,res)=>{
  res.send(+req.params.bottles === 0 ?`<h1>${req.params.bottles} Bottles of beer on the wall.</h1>
  <a href='/bottle/'>Find another wall</a>
  `
  :
  `<h1>${req.params.bottles} Bottles of beer on the wall.</h1>
  <a href='/bottle/${+(req.params.bottles)-1}'>take one down, pass it around</a>
  `)
})



app.get('/code',(req,res)=>{
  const random=(Math.floor(Math.random()*105))
  res.send(`<h1>99 little bugs in the code</h1>
  <h1>99 little bugs in the code</h1>
  <h1>Take one down</h1>
  <h1>Patch it around</h1>
  <h1>${random >100 ? random-100+99 : 98 } little bugs in the code</h1>
  <a href='/code/${random >100 ? random-100+99: 98 } '>git commit</a>
  `)
})

app.get('/code/:bugs',(req,res)=>{
  let random=(Math.floor(Math.random()*110))+5
  if(+req.params.bugs == 1) random=Math.floor(Math.random()*40)+100
  res.send(`<h1>${req.params.bugs} little bugs in the code</h1>
  <h1>${req.params.bugs} little bugs in the code</h1>
  <h1>Take one down</h1>
  <h1>Patch it around</h1>
  <h1>${random >100 ? random-100+ (+req.params.bugs) : (+req.params.bugs )-1 } little bugs in the code</h1>
  <a href='/code/${random >100 ? random-100+ (+req.params.bugs) : (+req.params.bugs) -1 } '>git commit</a>
  `)
})

app.listen(PORT , ()=>{
  console.log(`Listening on port: ${PORT}`)
})