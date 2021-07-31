const {
    response
} = require('express');
const dataMapper = require('../data/dataMapper')

const adminController = {

    loginView: (request, response) => {
        console.log('loginView is here');
        response.render('login');

    },

    login: (req, res) => {

        console.log('dans le login ')
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
        dataMapper.loginUser(data, callback);

    }


};

module.exports = adminController;