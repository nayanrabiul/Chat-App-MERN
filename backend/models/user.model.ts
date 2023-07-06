import {model, Schema} from 'mongoose';

let schema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    image: String,
    password: String,
})
const User = model('user', schema)
export default User;
