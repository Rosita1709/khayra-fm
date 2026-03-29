import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { envoyerEmail } from './mailer.js';
import sequelize from './database.js';
import Contact from './contact.model.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connexion DB + démarrage serveur
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Base de donnees connectee');
    app.listen(PORT, () => {
      console.log(`Serveur KFM demarre sur le port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erreur connexion base de donnees:', err);
  });

app.post('/contact', async (req, res) => {
  const { nom, email, sujet, message } = req.body;

  if (!nom || !email || !sujet || !message) {
    return res.status(400).json({
      success: false,
      message: 'Tous les champs sont obligatoires'
    });
  }

  try {
    // 1. Sauvegarder en base de donnees
    await Contact.create({ nom, email, sujet, message });

    // 2. Envoyer l'email
    await envoyerEmail(nom, email, sujet, message);

    res.json({
      success: true,
      message: 'Message envoye avec succes !'
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'envoi du message"
    });
  }
});