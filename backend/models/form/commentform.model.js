import mongoose from "mongoose";

const CommentFormSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const CommentForm = mongoose.model("CommentForm", CommentFormSchema);

export default CommentForm;
