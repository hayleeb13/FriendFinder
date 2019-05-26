var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriends = req.body;
    newFriends.friends = newFriends.name.replace(/\s+/g, "").toLowerCase();
    var userScores = newFriends.scores;
    var difference = 0;
    var diffArray = [];
    for (var i = 0; i < friends.length; i++) {
      var diffObject = {
        name: "",
        image: "",
        difference: 0
      };
      for (var j = 0; j < userScores.length; j++) {
        difference = Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
        diffObject.difference += difference;
        diffObject.name = friends[i].name;
        diffObject.image = friends[i].photo;
        userScores[j] = parseInt(userScores[j]);
      }
      diffArray.push({
        name: diffObject.name,
        image: diffObject.image,
        difference: diffObject.difference
      });
      req.body.scores = userScores;
    }
    diffArray.sort(function (person1, person2) {
      return person1.difference - person2.difference;
    });
    match = diffArray[0];
    matchedFriend = match.name;
    matchedImage = match.image;

    friends.push(userInput);
  });
};