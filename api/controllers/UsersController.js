/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'signup' : function (req , res){
		res.locals.flash = _.clone(req.session.flash);
		res.view();
		req.session.flash = {};
	},

	create : function (req , res , next){
		Users.create( req.params.all(), function userCreated(err, Users){
			//if (err) return next(err);
			if (err) {
				console.log(err);
				req.session.flash = {
					err : err
				}

				return res.redirect('/#signup');
			}
			res.json(User);
			req.session.flash = {};
		});
	},

	show :  function (req , res , next){
		Users.findOne(req.param('id') , function foundUsers(err, Users){
			if (err) return next(err);
			if (!Users) return next();
			res.view ({
				Users : Users
			});
		});
	} 
};

