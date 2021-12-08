import ActivationCode from '../models/ActivationCode.js'
import User from '../models/User.js'

export const addUser = async (req, res) => {
    console.log("GOT USER")
    console.log(req.body)
    const userCredentials = req.body;
    
    const newUser = new User({
        ...userCredentials,
        createdAt: new Date()
    });
    console.log(newUser)
    try {
        await newUser.save();
        console.log("USER SAVED")
        res.status(201).json(newUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const activateCode = (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

}