const express = require ('express');                                                                     //L'application requiert l'utilisation du module Express.La variable express nous permettra d'utiliser les fonctionnalités du module Express. 
const port = process.env.PORT || 8000;                                                                   //spécification du port de connexion  
const cors = require ('cors');
const app = express()
const mongoose = require ('mongoose');                                                                     //La variable mongoose nous permettra d'utiliser les fonctionnalités du module mongoose.
let urlMongo = 'mongodb://localhost/todoListVue'                                                         //URL de notre base

mongoose.connect(urlMongo,{ useUnifiedTopology: true,  useNewUrlParser: true  } , function (err){
    if (err) {throw err}
});                                                                                                     // Nous connectons l'API à notre base de données

// app.use(bodyParser.json()); 
app.use(cors());                                                                                
app.use(express.urlencoded({ extended: true }));
app.use(express.json())                                                                                //Route permettant de lire le contenu de ce qu'il y a dans le body

let donneesShema = new mongoose.Schema ({                                                              // Création du schéma pour les donnees
    name: String, id: Number, 
    createdAt: String, todo: Boolean});

let donneesModel = mongoose.model('Donnees', donneesShema);                                              // Création du Model pour les donnees


app.post('/todo', function (req,res) {
    let donnees = new donneesModel ({                                                                // Nous utilisons le schéma donnee
        name : req.body.name,                                                                        // Nous récupérons les données reçues pour les ajouter à l'objet donnees
        id : req.body.id,
        createdAt : req.body.createdAt,
        todo : req.body.todo,}); 

        donnees.save(function (err) {                                                                   //Nous stockons l'objet en base
            if(err) {
                res.send(err);
            }
            res.send({message : 'Bravo, la donnee est maintenant stockée en base de données'});
        })
    }),


app.get('/todo', async function (req,res){
    let result = await donneesModel.find() 
    res.send(result);
});

app.get('/todo/:id', async function (req,res) {
    let result = await donneesModel.find({id: req.params.id})
    res.send(result);
});



app.put('/todo/:id', async function(req,res) {
    let todofind = await donneesModel.findOne({id:req.params.id})
    await donneesModel.updateOne({id:req.params.id}, {todo : !todofind.todo}, function (err){                      //Mettre à jour des données avec Mongoose;
    if(err) {throw err}
    res.send('update ok');
 });

});




app.listen(port, () => {
    console.log('Server app listening on port' + port)
});