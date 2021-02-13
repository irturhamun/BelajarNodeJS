//initialize express router
let router = require('express').Router();

//set default API Response
router.get('/',function(req,res){
    res.json({
        status : 'API Working',
        message: "Welcome to RESThub crafted"
    });
});

//Datasiswa
router.get('/datasiswa',function(req,res){
    res.json({
        nama : 'Amir Muklisin',
        kelas: "X-MIPA-C",
        Absen: "3",
        NIS: "12345",
    });
});

//export API
module.exports = router;
