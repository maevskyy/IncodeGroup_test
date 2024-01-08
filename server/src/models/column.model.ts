import mongoose, { Document, Schema } from "mongoose";

const taskSchema = new Schema({
    id: {
        type: String,
        unique: true,
        maxlength: 8,
        minLength: 8,
    },
    title: {
        type: String,
        maxlength: 1,
        minLength: 30,
    },
    description: String
})

const columnSchema = new Schema({
    id: {
        type: String,
        maxlength: 8,
        minLength: 8,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true,
        maxlength: 30,
        minLength: 1,
    },
    //? i dont want to complicate the queries by making a lot of joins
    //? i know its not even first normal form but mongo wont take offence to that 
    tasks: {
        type: [taskSchema],
        default: [],
    }
})

interface ITask {

    id: string;
    title: string;
    description?: string;

}

export interface IColumn extends Document {
    id: string;
    title: string;
    tasks: ITask[];
}

export default mongoose.model<IColumn>('Column', columnSchema)



