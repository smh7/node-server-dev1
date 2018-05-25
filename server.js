const express = require('express');
const hbs = require('hbs');
var app = express();
const fs = require('fs');

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.')
    }
  });
  
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs', {
//     pageTitle: 'Maintenance Page',
//     maintenanceMessage: 'We apologize for the necessary inconvenience'
//   });
  
//   next();
// });

app.use(express.static(__dirname + '/public'));


hbs.registerHelper('getCurrentYear', ()=> {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Finally made it here, just in time'
  });
  // res.send({
  //   name: 'Steven',
  //   like: [
  //     'Coding',
  //     'Electronics',
  //     'learning',
  //     'cooking',
  //     'family activities'
  //   ]
  // });
  
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    welcomeMessage: "Glad to have you here"
  });
})

// app.get('/maintenance', (req, res) => {
//   res.render('maintenance.hbs', {
//     pageTitle: 'Maintenance Page',
//     maintenanceMessage: 'We apologize for the necessary inconvenience'
//   });
// })

app.get('/bad', (req, res) => {
  res.send({
    name: 'Error127983',
    errorMessage: [
      'unable to handle request'
    ]
  });
});
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});

