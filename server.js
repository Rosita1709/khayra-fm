import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { envoyerEmail } from './mailer.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { nom, email, sujet, message } = req.body;

  if (!nom || !email || !sujet || !message) {
    return res.status(400).json({
      success: false,
      message: 'Tous les champs sont obligatoires'
    });
  }

  try {
    await envoyerEmail(nom, email, sujet, message);
    res.json({
      success: true,
      message: 'Message envoyé avec succès !'
    });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'envoi du message"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur KFM démarré sur le port ${PORT}`);
});