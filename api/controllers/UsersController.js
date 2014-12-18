/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'signup' : function (req , res){
		res.view();
	},

	create : function (req , res , next){
		Users.create( req.params.all(), function userCreated(err, Users){
			if (err) return next(err);
			res.json(Users);
		});
	}
};

