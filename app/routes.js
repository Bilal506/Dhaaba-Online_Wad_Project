const AuthController = require('./controllers/AuthController');
const SiteConroller = require('./controllers/SiteController');
module.exports = function (app, passport) {
	app.get('/login', AuthController.login);
	app.get('/dashboard', _authenticationMiddleware , AuthController.dashboard);
	app.get('/menu_items', _authenticationMiddleware , AuthController.menu_items);
	app.post('/login', passport.authenticate('local', {
		successRedirect : '/dashboard', // redirect to the secure dashboard section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
	app.get('/signup', AuthController.signup);
	app.post('/signup',passport.authenticate('local-signup', {
        successRedirect : '/dashboard', // redirect to the secure dashboard section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));//implement passport signup strategy
	app.get('/', SiteConroller.index);
	app.get('/contact', SiteConroller.contact);
	app.post('/contact', SiteConroller.contact);
	app.get('/faq', SiteConroller.faq);
	app.get('/beverages', SiteConroller.beverages);
	app.get('/breakfast', SiteConroller.breakfast);
	app.get('/checkout', SiteConroller.checkout);
	app.get('/desi', SiteConroller.desi);
	app.get('/dinner', SiteConroller.dinner);
	app.get('/lunch', SiteConroller.lunch);
	app.get('/order', SiteConroller.order);
	app.get('/order_list', SiteConroller.order_list);
	app.get('edit/menu_items/:id', _authenticationMiddleware ,SiteConroller.editmenuitem);
	app.post('edit/menu_items/:id', _authenticationMiddleware ,SiteConroller.editmenuitem);


app.get('/restaurants', SiteConroller.restaurants);
app.get('/rice', SiteConroller.rice);
app.get('/salad', SiteConroller.salad);




	// Endpoint to logout
	app.get('/logout', function (req, res) {
		req.logout();
		//res.send(null);
		return res.redirect('/login');
	});
}

function _authenticationMiddleware(req, res, next) {
	
			if (req.isAuthenticated()) {
				return next()
			}
			res.redirect('/login')

}