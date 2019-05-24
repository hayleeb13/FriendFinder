var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriends = req.body;
    newFriends.friends = newFriends.name.replace(/\s+/g, "").toLowerCase();
    friends.push(newFriends);
    res.json(newFriends);
  });
};