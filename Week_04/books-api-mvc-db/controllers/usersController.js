// controllers/usersController.js

const User = require('../models/user');

const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await User.createUser(userData);
        res.status(201).json({ success: true, data: newUser });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error creating user', error: err.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.status(200).json({ success: true, data: users });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error retrieving users', error: err.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.getUserById(userId);
        if (user) {
            res.status(200).json({ success: true, data: user });
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error retrieving user', error: err.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
        const updatedUser = await User.updateUser(userId, updatedData);
        res.status(200).json({ success: true, data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error updating user', error: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.deleteUser(userId);
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error deleting user', error: err.message });
    }
};

async function searchUsers(req, res) {
    const searchTerm = req.query.searchTerm; // Extract search term from query params
    
    try {
        const userController = new User();
        const users = await userController.searchUsers(searchTerm);
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error searching users" });
    }   
};

async function getUsersWithBooks(req, res) {
    try {
      const users = await User.getUsersWithBooks();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching users with books" });
    }
  };

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    searchUsers,
    getUsersWithBooks,
};
