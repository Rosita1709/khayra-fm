import { DataTypes } from 'sequelize';
import sequelize from './database.js';

const Contact = sequelize.define('Contact', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sujet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  statut: {
    type: DataTypes.ENUM('nouveau', 'lu', 'traité'),
    defaultValue: 'nouveau',
  }
}, {
  tableName: 'contacts',
  timestamps: true,
});

export default Contact;