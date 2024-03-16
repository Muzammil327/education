import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
});

const Newsletter = mongoose.model("Newsletter", NewsletterSchema);

export default Newsletter;
