const Models = require('../models/index');

module.exports = {
    index:function(req,res) {
     	 res.render('index', { title: 'Home' });
	  },
	
	contact:function(req,res) {
		//const ss = req.body;
		//Models.user(ss).then()
		res.render('contact', { contactTitle: 'Contact Us' });
	},

	faq:function(req,res) {
		res.render('faq', { faq: 'FREQUENTLY ASKED QUESTIONS' });
	},
beverages:function(req,res) {
     	 res.render('beverages', { title: 'Beverages' });
	  },
  
breakfast:function(req,res) {
     	 res.render('breakfast', { title: 'breakfast' });
	  },

checkout:function(req,res) {
     	 res.render('checkout', { title: 'checkout' });
	  },
	  desi:function(req,res) {
     	 res.render('desi', { title: 'desi' });
	  },
	  dinner:function(req,res) {
     	 res.render('dinner', { title: 'dinner' });
	  },
	  lunch:function(req,res) {
     	 res.render('lunch', { title: 'lunch' });
	  },
	  order:function(req,res) {
     	 res.render('order', { title: 'order' });
	  },
	  order_list:function(req,res) {
     	 res.render('order_list', { title: 'order_list' });
	  },
	  restaurants:function(req,res) {
     	 res.render('restaurants', { title: 'restaurants' });
	  },
	  rice:function(req,res) {
     	 res.render('rice', { title: 'rice' });
	  },
	  salad:function(req,res) {
     	 res.render('salad', { title: 'salad' });
	  },
	













}