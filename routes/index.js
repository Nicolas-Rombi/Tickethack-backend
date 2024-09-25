var express = require('express');
var router = express.Router();
const Trip = require('../models/trips')
const moment = require('moment');
const MyBooking = require ('../models/mareservation')

/* GET home page. */
router.post('/search', async function(req, res, next) {
  const { departure, arrival, date } = req.body;  
  if (!departure || !arrival || !date){
    res.status(404).json({ message: 'Veuillez remplir tous les champs' });
  }
  else {
    const startDate = moment(date).startOf('day').toDate();
    const endDate = moment(date).endOf('day').toDate();
    const trips =await Trip.find({
      departure,
      arrival,
      date: { $gte: startDate, $lte: endDate }
    })
    return res.json({trips})
  }
});


router.get('/cart', async (req, res) => {
  try { const trips = await Trip.find();
  if (trips && trips.length > 0);
    res.json(trips);
  } catch (err) { 
   res.status(500).send('Erreur lors de la récupération des trajets');
   };
});



router.post('/purchase',  (req, res) => {
})

router.get('/purchase', (req, res) => {
})

module.exports = router;
