/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const passport = require('passport');
const sendMail = require('../services/email');

module.exports = {
    //Login function
    Login: function(req, res){
      passport.authenticate('local', function (err, user ,info){
      if((err) || (!user)){
        return res.send({
            message: info.message,
            });
      }
        req.session.authenticated = true;
            return res.send({
            status: "OK",
            userid: user.id,
            username: user.username,
            message: "You have been logged in"
            });
        })(req,res);
    },

    //Logout function
    logout: function(req, res){
      req.logout();
      res.redirect('/landingpage');
    },

    //Register function
    register: function(req, res){
      //TODO: form validation here
      console.log(req.body)
      data = req.body;

      User.create (data, function(err, datum){
        if (err) {
          return res.send({
            success: false,
            message: err.message,
          });
        } else {
          return res.json({
            success: true,
            message: "Welcome mortal",
            data: datum
          })
        }
      })

    },
    'delete': async (req,res)=>{
      const id = req.body.id;
      await Hobbies.destroy(id);
    },
    create: function(req, res){
      //email.sendEmail(err, account );
      var hobby = req.body.hobbies.hobby;
      var description = req.body.hobbies.description;
      var username = req.body.hobbies.username;

      Hobbies.create({hobby:hobby, description:description, username:username}).exec(function(err, hobby){
        sendMail(req.body.body.message);
        if (err){
          res.send(500, {error: 'Database Error'});
        }
      });
    },
    'showhobbies': async (req,res)=>{
      console.log('Hey Ninja');
      console.log(req.body);
      const me = req.body.username;
      console.log(me);

      var Hob =  await Hobbies.find({where:{username:me},select:['hobby','description']});
      console.log(Hob);
          return res.send({
            hobby:Hob
          });

  }
};
