import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export const Todo = mongoose.model('Todo', TodoSchema);