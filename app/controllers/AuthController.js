const Models = require('../models/index');
const Sequelize = require('sequelize');
module.exports = {
    hello: function (req, res) {
        res.render('index', { title: 'Quick MVC' });
    },
    login: function (req, res) {
        res.render('login', { title: 'Login Page' });
    },
    dashboard: function (req, res) {
        res.render('dashboard', { title: 'Dashboard' });
    },
    signup: function (req, res) {
        res.render('signup', { title: 'Signup' });
    },
     menu_items: function(req, res) {
        Models.menu_items.findAll().then(function(products) {
            console.log("product", products);
            res.render('menu_items', { data: products, title: 'Admin Product List' });

        });
    },
      editmenuitem: function(req, res) {
        // Models.categories.findOne() // getting dynamic data object

        const id = req.params.id;
        const menu = req.body;

        console.log(req.params.id);
        Models.menu_items.update({
             name: menu.name,
             status: menu.status,
             rate: menu.rate,
             menu_type: menu.menu_items
        }, { where: { id: id } }).then(function() {
            console.log("updated product");

            Models.menu_items.findByPk(id).then(function(category) {
                console.log(category);
                res.redirect("/menu_items");
            })


        })
        // res.render('addcategory', { title: 'Add category' });
    }
   
}