require('dotenv').config();
const connectionString = process.env.MONGO_CON;
const mongoose = require('mongoose');
console.log("Mongo URI:", process.env.MONGO_CON);
mongoose.connect(connectionString);

const Egg = require("./models/eggSchema");

async function recreateDB() {
  try {
    await Egg.deleteMany();

    let instance1 = new Egg({bird_type: "cardinal", color: 'freckled-gray', size: "small"});
    let instance2 = new Egg({bird_type: "ostrich", color: "ivory", size: "very large"});
    let instance3 = new Egg({bird_type: "chicken", color: "white", size: "medium"});

    await instance1.save();
    console.log("First object saved");

    await instance2.save();
    console.log("Second object saved");

    await instance3.save();
    console.log("Third object saved");
  
  } catch (err) {
    console.error(err);
  }
}
let reseed = false;
if (reseed) {
  recreateDB();
}

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    Account.findOne({ username: username })
      .then(function (user){
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
        })
        .catch(function(err){
          return done(err)
        })
  })
)


var indexRouter = require('./routes/index');
var resourceRouter = require('./routes/resource'); 
var usersRouter = require('./routes/users');
var eggRouter = require('./routes/egg');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/resource', resourceRouter);
app.use('/users', usersRouter);
app.use('/egg', eggRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);

var Account=require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});