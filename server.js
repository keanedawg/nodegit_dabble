var Git = require("nodegit");

var getMostRecentCommit = function(repository) {
  return repository.getBranchCommit("master");
};

var makeBranch = function(respository) {
  console.log(repository)
  repository.createBranch("tester", getMostRecentCommit(repository)).then(
      function(reference) {console.log("good")}, 
      function(reasonForFailure) {console.log("bad1")}).catch(
      function(reasonForFailure) {console.log("bad2")});
};

var getCommitMessage = function(commit) {
  return commit.message();
};

Git.Repository.open("../test_repo")
  .then(getMostRecentCommit).catch(
      function(reasonForFailure) {console.log(reasonForFailure)});