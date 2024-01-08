import mongoose, { Schema } from "mongoose";

const tableSchema = new Schema({
    id: {
        type: String,
        unique: true,
        maxlength: 8,
        minlength: 8,
        required: true
    },
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    columns: [{
        type: Schema.Types.ObjectId,
        ref: 'Columns'
    }]
})

export default mongoose.model('Table', tableSchema)