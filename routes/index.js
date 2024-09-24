var express = require('express');
var router = express.Router();
const Trip = require('../models/trips')

/* GET home page. */
router.post('/search', async function(req, res, next) {
  const { departure, arrival, date } = req.body;
  const searchDate = new Date(date);
  
  if (!departure || !arrival || !date){
    res.status(404).json({ message: 'Veuillez remplir tous les champs' });
  }
  else {
    const trips =await Trip.find({
      departure,
      arrival,
      date: { $gte: searchDate }
    })
    return res.json({trips})
  }
});


router.get('./cart', async (req, res) => {
  try { const trips = await Trip.find();
  if (trips && trips.length > 0);
    res.json(trips);
  } catch (err) { 
   res.status(500).send('Erreur lors de la recuperation des trajets');
   };
});
  
  
module.exports = router;
