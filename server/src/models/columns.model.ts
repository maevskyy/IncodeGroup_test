import mongoose, { Schema } from "mongoose";

const columnsSchema = new Schema({
    id: {
        type: String,
        maxlength: 8,
        minLength: 8,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    //? i dont want to complicate the queries by making a lot of joins
    //? i know its not even first normal form but mongo wont take offence to that 
    tasks: [{
        id: {
            type: String,
            unique: true,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: String

    }]
})

export default mongoose.model('Columns', columnsSchema)

