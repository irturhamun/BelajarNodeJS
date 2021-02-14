//initialize express router
let router = require('express').Router();

//set default API Response
router.get('/api',function(req,res){
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

//import contactController
var contactController = require('./contactController');

//contact apiRoutes
router.route('/contacts')
.get(contactController.index)
.post(contactController.new);

router.route('/contacts/:contact_id')
.get(contactController.view)
.patch(contactController.update)
.put(contactController.update)
.delete(contactController.delete);

//export API
module.exports = router;