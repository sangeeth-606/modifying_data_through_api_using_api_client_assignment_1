import express from 'express';
import Menu from '../models/menuSchema.js';

const router = express.Router();

router.post('/menu', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    const newMenuItem = await Menu.create({ name, description, price });
    res.status(201).json({ message: 'Menu item added', item: newMenuItem });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/menu', async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
