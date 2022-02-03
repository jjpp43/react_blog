const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const GOOGLE_CLIENT_ID = "944746663312-sts14os6j3qdove15ea6pu75vqk9686b.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: 'https://3000-jjpp43-reactblog-1hrrhv2uug4.ws-us30.gitpod.io/callbackHome'
    },
    (accessToken, refreshToken, profile, done) => {
        //done(null, profile);
        const user = {
            username: profile.displayName
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

const authenicateUser = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.status(301).redirect('/login');
    }
};

app.get('/', authenticateUser, (req, res, next) => {
    res.render('home', { title: 'Express' });
  });
  app.get('/login', (req, res, next)  => {
    res.render('login', { title: 'Login' })
  });
  app.get('/login',
    passport.authenticate('google', { scope: ['profile'] })
    );
  app.get('/callbackHome',
      passport.authenticate('google', {
        failureRedirect: '/login',
        successRedirect: '/'
  }));
