const database = require('./database');
const mainController = require('../controllers/mainController')

const dataMapper = {


    getAllJeuxVideo :(test)=> {
        const getAllQuery = {
            text : `SELECT * FROM "jeuxvideo";`
        }
        database.query(getAllQuery,test);
    },

     getOneJeuVideo : (id,test)=>{
         const getOneQuery = {
             text : `SELECT * FROM "jeuxvideo" WHERE id= $1;`,
             values : [id]
         }
         database.query(getOneQuery,test);
     },

    addVideoGame : (data,callback)=>{
        const addNewGame = {
            text : ` INSERT INTO jeuxvideo ("titre","image","description","date_de_sortie","plateforme","note")
            VALUES ($1,$2,$3,$4,$5,$6)  `,
            values : [data.titre,data.image,data.description,data.date_de_sortie,data.plateforme,data.note],
            
        }
        console.log(data)
        database.query(addNewGame);
        callback(null) //Tester la route add sans le callback(null) l'enlever aussi dans addVideoGame
        console.log('callback de addVideoGame fini')

    },

    deleteVideoGame : (id , callback)=>{
        const deleteGame = {
            text : `DELETE FROM "jeuxvideo" WHERE id=$1;`,
            values : [id],
        }
        database.query(deleteGame);
        callback(id)
    },

   

}
   
   

    module.exports=dataMapper