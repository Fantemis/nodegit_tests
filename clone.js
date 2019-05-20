var Git = require("nodegit");

Git.Clone("https://github.com/Fantemis/nodegit_tests.git", "nodegit_tests").then(function(repository) {
  // Work with the repository object here.
});