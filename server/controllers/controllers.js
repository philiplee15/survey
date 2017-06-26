var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Option = mongoose.model('Option');

module.exports = {
  login: function(req, res){
    console.log("We're in the login controller.");
    User.findOne({username:req.body.username}, function(err, foundUser){
      if(foundUser==null) {
        console.log("NO user in db, making new.");
        var user = new User(req.body);
        user.save(function(err, newUser){
          if(err){
            console.log("Error adding new User.");
            res.json(err);
          } else{
  					req.session.user = newUser;
            req.session.userId = newUser._id;
            res.json(newUser);
          }
        })
      }else{
        console.log("Added OLD user.", foundUser._id);
        req.session.userId=foundUser._id;
  			req.session.user = foundUser;
        res.json(foundUser);
      }
    })
  },
  addPoll: function(req, res){
      console.log(req.body.question);

      var question = new Question({_user:req.session.user, text:req.body.question});
      question.save(function(err, newQ){
        if(err){
          console.log(err);
          console.log("Question did not save.");
          res.json(err);
        } else {
            Question.findOne({_id:question._id}, function(err, q){
              let option = new Option({text:req.body.options.opt1});
              q.options.push(option);
              option.save(function(err){
                q.save(function(err){
                  if(err){
                    console.log(err, "Question did not save the push. Or option did not save");
                    res.json(err);
                  }else{
                    Question.findOne({_id:question._id}, function(err, q){
                      let option = new Option({text:req.body.options.opt2});
                      q.options.push(option);
                      option.save(function(err){
                        q.save(function(err){
                          if(err){
                            console.log(err, "Failed at Opt2.");
                            res.json(err);
                          }else{
                            Question.findOne({_id:question._id}, function(err, q){
                              let option = new Option({text:req.body.options.opt3});
                              q.options.push(option);
                              option.save(function(err){
                                q.save(function(err){
                                  if(err){
                                    console.log(err, "Failed at Opt3.");
                                    res.json(err);
                                  }else{
                                    Question.findOne({_id:question._id}, function(err, q){
                                      let option = new Option({text:req.body.options.opt4});
                                      q.options.push(option);
                                      option.save(function(err){
                                        q.save(function(err){
                                          if(err){
                                            console.log(err, "Failed at Opt4.");
                                            res.json(err);
                                          }else{
                                            res.json(option);
                                          }
                                        })
                                      })
                                    })
                                  }
                                })
                              })
                            })
                          }
                        })
                      })
                    })
                  }
                })
              })
            })
        }
      })
    },
  pollsQuery: function(req, res){
    Question.find({})
    .populate('_user')
	   .sort([['createdAt', 'descending']])
     .exec(function(err, questions){
       if(err) {
        console.log("Querying questions failed.");
        res.json(err);
      } else {
        console.log("Found all questions success");
        res.json(questions);
      }
    })
  },
  getCurrentUser: function(req, res){
  	User.findOne({_id:req.session.userId}, function(err, current){
  		if(err) {
  			console.log("current user query went wrong");
  			res.json(err);
  		}else{
  			console.log("found user");
  			res.json(current);
    	}
    })
  },
  queryQuestion: function(req, res){
  	Question.findOne({_id:req.params.id})
    .populate('options')
    .exec(function(err, current){
  		if(err) {
  			console.log("current question query went wrong");
  			res.json(err);
  		}else{
  			console.log("found question");
  			res.json(current);
    	}
    })
  },
  removeQ: function(req, res){
    Question.findOneAndRemove({_id: req.params.id}, function(err){
      if(err){
        console.log("Could not find question to remove.");
        res.json(err);
      } else {
        res.json({"success":"successfully removed."});
      }
    })
  },
  upvote: function(req, res){
    Option.findOne({_id: req.params.cid}, function(err, doc){
      if(err){
        console.log("Could not find question to remove.");
        res.json(err);
      } else {
        doc.vote +=1;
        doc.save();
        res.json({"success":"successfully upvoted."});
      }
    })
  },
  logout: function(req, res){
    req.session.userId = null;
    req.session.user = null;
    res.sendStatus(200);
  }
}
