var Git = require("nodegit");

var getMostRecentCommit = function(repository) {
  return repository.getBranchCommit("master");
};

var makeBranch = function(repository, name) {
    getMostRecentCommit(repository).then(function(commit) {
        repository.createBranch(name, commit.id(), true);
    }).catch(function(reasonForFailure) {
        console.log(reasonForFailure);
    });
};

var getCommitID = function(commit) {
  return commit.id();
};

var getCommitMessage = function(commit) {
  return commit.message();
};

Git.Repository.open("../test_repo")
  .then(function(repository) {
    makeBranch(repository, "ayyyer_lmao");
  }).catch(
      function(reasonForFailure) {console.log(reasonForFailure)});