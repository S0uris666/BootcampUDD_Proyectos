require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const userRouter = require("./Router/user.route");
const guitarRouter = require("./Router/guitar.route");
// Connect to database

const PORT = process.env.PORT || 5000;

const app = express();
connectDB();

const allowedOrigins = [
  "http://otro-proyecto.netlyfi.app",
  "https://myapp.com",
];

//middlewares

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/guitars", guitarRouter);

/* app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json({ users });
        
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server error' });
    }
})


app.put('/users/:id', async (req, res) => {
    try {
        
        const { username, gmail, password } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { username, gmail, password },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ datos: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error' });
    }
    
});



app.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        return res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Server error' });
    }

}) */

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
