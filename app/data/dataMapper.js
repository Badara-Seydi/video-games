const database = require('./database');
const mainController = require('../controllers/mainController');
const { request } = require('http');

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
        callback(null);
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

    signInUser : (data,callback) =>{
        const addUser = {
            text : 'INSERT INTO "user" ("email","password")'+
            `VALUES ($1,$2)`,
            values : [data.email,data.password],
        }
        console.log([data]);
        database.query(addUser);
        callback(
            console.log("fin de loginUser") 
        )
       ;
    },

    logInUser : (input,callback)=>{
        const logIn = {
            text: `SELECT * FROM "user" WHERE 'email' ILIKE $1;`,
            values: [`%${input}%`]
        }
        // console.log(datas);
        database.query(logIn,callback);
        callback(
            console.log("fin de logInUser", logIn)
        )

    }

   

}
   
   

    module.exports=dataMapper