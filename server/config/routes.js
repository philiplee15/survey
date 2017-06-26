var mongoose = require('mongoose');
var display = require('../controllers/controllers.js');

module.exports = function(app) {
  app.post('/login', function(req,res){
    display.login(req,res);
  });
  app.post('/addPoll', function(req, res){
    console.log("Routed and shooting back to service.");
    display.addPoll(req,res);
  });
  app.get('/logout', function(req, res){
    display.logout(req,res);
  });
  app.get('/getPolls', function(req, res){
    display.pollsQuery(req, res);
  });
  app.get('/currentuser', function(req, res){
    display.getCurrentUser(req, res);
  });
  app.get('/remove/:id', function(req, res){
    display.removeQ(req, res);
  });
  app.get('/getQ/:id', function(req, res){
    display.queryQuestion(req, res);
  });
  app.get('/upvote/:cid', function(req, res){
    display.upvote(req, res);
  });
}
