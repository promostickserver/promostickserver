import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    activationCode: String,
    nameAndSurname: String,
    email: String,
    phoneNumber: String,
    address: String,
    createdAt: {
        type: Date,
    }
})

const User = mongoose.model('User', UserSchema);

export default User;