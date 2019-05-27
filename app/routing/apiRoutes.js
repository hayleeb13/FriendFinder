var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var userData = req.body;
    var userScores = userData.scores;
    var totalDiff = 0;
    
    var match = {
      name: "",
      photo: "",
      difference: 100
    };

    for (var i = 0; i < friends.length(); i++) {
      for (var j = 0; j < 10; j++) {
        totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i]).scores[j]);
        if (totalDiff <= match.difference) {
          match.name = friends[i].name;
          match.photo = friends[i].photo;
          match.difference = friends[i].totalDiff;
        }
      }
    }

    friends.push(userData);
    res.json(match);

  });
};
