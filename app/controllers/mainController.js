
const dataMapper = require('../data/dataMapper');

const mainController = {
    homePage: (request, response) => {
        console.log('on est bien dans : mainController homePage');


        const test = (error, result) => {
            if (error) {
                response.send('sa marche pas conio')
            } else {

                console.log(result.rows)
                response.render('index', {
                    jeuxvideo: result.rows
                })
            }


        };
        dataMapper.getAllJeuxVideo(test);
    },

    oneGamePage: (request, response) => {
        console.log('dans le OneGamePage');
        const test = (error, result) => {
            if (error) {
                response.send('sa marche pas conio' + error)
            } else {
                console.log(result)
                response.render('oneGame', {

                    jeu: result.rows[0]

                })
            }

        }
        dataMapper.getOneJeuVideo((request.params.id), test);
    },

    addGameView: (request, response) => {
        console.log('addGameView is here');
        const newGame = request.body

        response.render('newGame')
        // dataMapper.addVideoGame ();


    },

    addGame: (request, response) => {
        console.log('addGame is here');
        const newGame = request.body;
        console.log(request.body + 'addGame');
        console.log('JE PASSE AU DESSUS DU CALLBACK')
        const callback = (error, result) => {
            console.log('JE PASSE PAR LE CALLBACK')
            if (error) {
                console.log(error);
                response.status(500).send(error);
            } else {
                response.redirect('/');
                prompt('Nouveau jeu ajouté');
            }
        };
        console.log('JE PASSE APRES LE CALLBACK')
        dataMapper.addVideoGame(newGame, callback);
    },

    deleteOneGame: (request, response) => {
        console.log('deletezer');
        const deleteGame = request.params.id;
        console.log(deleteGame);
        const callback = (error, result) => {
            if (error) {
                console.log(error);
                response.status(500).send(error);
            } else {
                console.log(result.rows + 'route get');
                response.send('sa a bien été supprimé');
            }
        }
        dataMapper.deleteVideoGame(deleteGame,callback)
    },


}

module.exports = mainController