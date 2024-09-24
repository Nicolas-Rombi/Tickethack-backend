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


router.get('/cart', async (req, res) => {
  try { const trips = await Trip.find();
  if (trips && trips.length > 0);
    res.json(trips);
  } catch (err) { 
   res.status(500).send('Erreur lors de la récupération des trajets');
   };
});

router.delete('/cart/:id', async (req, res) => {
  try {
    // Recherche et supprime le trajet par son ID
    const trip = await Trip.findByIdAndDelete(req.params.id);
    
    // Vérifie si le trajet a été trouvé et supprimé
    if (trip) {
      res.status(204).send(); // Trajet supprimé avec succès
    } else {
      res.status(404).send('Trajet non trouvé'); // Trajet non existant
    }
  } catch (err) {
    // Gère les erreurs lors de la suppression
    console.error(err);
    res.status(500).send('Erreur lors de la suppression du trajet'); // Erreur serveur
  }
});

  
module.exports = router;
