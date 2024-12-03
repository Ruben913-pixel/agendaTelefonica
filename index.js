require("./mongo.js")
const express = require("express");
const app = express();
const cors= require("cors")
const Cliente = require("./agendaSchema");


app.use(cors())
app.use(express.json())
app.use(express.static('dist'))


app.get("/api/persons", async(_request, response) => {
 const resp =  await Cliente.find({})
  response.json(resp)
})

app.get("/api/persons/:id", async(request, response) => {
  const id = request.params.id;
  try{
    const resp= await Cliente.findById(id)
    response.status(200).json(resp)
  }catch{
    response.send("Not found")
  }

});


app.delete("/api/persons/:id",async(request, response) => {
  const id = request.params.id;
  try{
     await Cliente.findByIdAndDelete(id)
    response.status(201)

  }catch{

    response.status(404).end()
  }
 
 
});

app.post("/api/persons", (resquest, response) => {
  const {name,number} = resquest.body;
  const newPerson = new Cliente({
    name: name,
    number: number
});
try{
  newPerson.save()
  response.status(201).end()
}catch{
  response.status(400) 
}

})

app.patch("/api/persons/:id", async(resquest, response)=> {
  const id = resquest.params.id;
  const {name, number} = resquest.body;
  const updatedPerson = {
    name:name,
    number:number
  }
  try{
    await Cliente.findByIdAndUpdate(id, updatedPerson)
    response.status(200).end()
  }catch{

    response.status(304).end()
  }
  })



const PORT = process.env.PORT 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


