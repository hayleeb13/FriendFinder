var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriends = req.body;
    var newName = newFriends.name;
    var newScores = newFriends.scores;
    var differenceArray = [];

    for (var i = 0; i < friends.length; i++) {
      var difference = 0;
      var differenceObject = {
        name: "",
        image: "",
        difference: 0
      };
      for (var j = 0; j < newScores.length; j++){
        difference = Math.abs(parseInt(friends[i].scores[j]) - parseInt(newScores[j]));
        differenceObject.difference += difference;
        differenceObject.name = friends[i].name;
        differenceObject.image = friends[i].photo;
        newScores[j] = parseInt(newScores[j]);
      };
      differenceArray.push({
        name: differenceObject.name,
        image: differenceObject.image,
        difference: differenceObject.difference
      });
      req.body.scores = newScores;
    }
    differenceArray.sort(function (a, b) {
      return a.difference - b.difference
    });
    match = differenceArray[0];
    matchedName = match.name;
    matchedImage = match.image;
    friends.push(newFriends);
    newFriends.friends = newFriends.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriends);
    friends.push(newFriends);
    res.json(newFriends);
  });
};