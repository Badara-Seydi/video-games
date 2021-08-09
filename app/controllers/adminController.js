const {
    response
} = require('express');
const dataMapper = require('../data/dataMapper')

const adminController = {

    signInView: (request, response) => {
        console.log('signInView is here');
        response.render('signin');

    },

    signIn: (req, res) => {

        console.log('dans le signIn ')
        const data = req.body;
        console.log(data);
        const callback = (error, result) => {
            if (error) {
                console.log(error)
            } else {

                res.redirect('/');
            }
            console.log('login')
        };
        dataMapper.signInUser(data, callback);

    },

    justLog: (req,res)=>{
        res.render('login')
    },

    justLogIn : (req, res) => {
        console.log('dans le justLog');
        const input = req.body;
        // const user = dataMapper.logInUser;
        const callback = (error, result) => {
            if(error){
                console.log(error),
                res.status(500).send(error)
            }else {
                console.log(input),
                console.log('email correspondant trouvé '),
                res.render('login')
            }
        };dataMapper.logInUser(input , callback)

        },
        
    };

module.exports = adminController;