//initialize express router
let router = require('express').Router();

//set default API Response
router.get('/api',function(req,res){
    res.json({
        status : 'API Working',
        message: "Welcome to RESThub crafted"
    });
});

// //Datasiswa
// router.get('/datasiswa',function(req,res){
//     res.json({
//         nama : 'Amir Muklisin',
//         kelas: "X-MIPA-C",
//         Absen: "3",
//         NIS: "12345",
//     });
// });

//import siswaController
var siswaController = require('./siswaController');

//contact apiRoutes
router.route('/siswa')
.get(siswaController.index)
.post(siswaController.new);

router.route('/siswa/:siswa_id')
.get(siswaController.view)
.patch(siswaController.update)
.put(siswaController.update)
.delete(siswaController.delete);

//export API
module.exports = router;