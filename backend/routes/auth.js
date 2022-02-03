const router = require("express").Router();
const passport = require("passport");

router.get("login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    });
});

router.get("login/success", (req, res) => {
    res.status(200).json({
        success: true,
        message: "successful",
        user: req.user,
        //cookies: req.cookies
    });
});

router.get("logout", (req, res) => {
    req.logout();
    res.redirect("https://3000-jjpp43-reactblog-1hrrhv2uug4.ws-us30.gitpod.io/")
})

router.get("/google", passport.authenticate("google", { scope: ["profile"]}));

router.get("google/callback", passport.authenticate("google", {
    successRedirect: "https://3000-jjpp43-reactblog-1hrrhv2uug4.ws-us30.gitpod.io/forum",
    failureRedirect: ""
}))