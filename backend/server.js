import app from "./app.js";
import { PORT } from "./constants.js";
import connectDB from "./util/db.js";

import user from './routes/user.route.js'

import book from './routes/mcqs/book.route.js'
import mcqs from './routes/mcqs/mcqs.route.js'
import heading1 from './routes/mcqs/heading1.route.js'
import heading2 from './routes/mcqs/heading2.route.js'
import heading3 from './routes/mcqs/heading3.route.js'

import commentForm from './routes/form/commentForm.route.js'
import newsletter from './routes/form/newsletter.route.js'

connectDB();

app.use("/api/authentication", user);
// form
app.use("/api", newsletter);
app.use("/api", commentForm);
// mcqs
app.use("/api", mcqs);
app.use("/api", book);
app.use("/api", heading1);
app.use("/api", heading2);
app.use("/api", heading3);

app.get("/", (req, res) => {
  return res.json("Hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
