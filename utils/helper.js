

const handlebars = require('handlebars');

handlebars.registerHelper('eq', function(a, b) {
  return a === b;
});

module.exports = {
    format_date: date => {
return date.toLocaleDateString();
    }
};