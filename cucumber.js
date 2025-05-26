// cucumber.js
module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['step_definitions/**/*.js', 'support/**/*.js'],
    format: ['summary', 'progress-bar'],
    publishQuiet: true,
  }
};
