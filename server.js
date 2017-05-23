var Git = require("nodegit");
var fs = require('fs');

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

Git.Clone.clone("https://github.com/keanedawg/test_repo.git", "../test_repo")
  .then(function(repository) {
    makeBranch(repository, "elmao");
  }).then(function() {
    fs.createReadStream('throw_me.txt').pipe(fs.createWriteStream('../test_repo/hey.txt'));
  }).catch(
      function(reasonForFailure) {console.log(reasonForFailure)});