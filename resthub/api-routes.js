//initialize express router
let router = require('express').Router();

//set default API Response
router.get('/',function(req,res){
    res.json({
        status : 'API Working',
        message: "Welcome to RESThub crafted"
    });
});

//export API
module.exports = router;
