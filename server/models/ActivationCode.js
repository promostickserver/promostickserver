import mongoose from 'mongoose';

const ActivationCodeSchema = mongoose.Schema({
    activationCode: String,
    active: Boolean,
})

const ActivationCode = mongoose.model('ActivationCode', ActivationCodeSchema);

export default ActivationCode;