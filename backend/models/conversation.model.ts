import {model, Schema} from 'mongoose';

let schema = new Schema({
    is_private: Boolean,
    members: {
        type: [Schema.Types.ObjectId],
        ref: 'user'
    },
    messages: [
        {
            from: {
                type: Schema.Types.ObjectId,
            },
            to: {
                type: Schema.Types.ObjectId,
            },
            text: String,
            time: {
                type: Date,
                default: Date.now
            }
        }]
}, {timestamps: true});

const Conversation = model('conversation', schema);
export default Conversation;
