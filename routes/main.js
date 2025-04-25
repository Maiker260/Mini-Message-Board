import express from "express";
import { messages } from "../messages.js";

const router = express.Router();

const routes = [
    { path: "/", view: "index", title: "Mini Message Board", content: messages },
];

routes.forEach(({ path, view, title, content }) => {
    router.get(path, (req, res) => {
        res.render(`pages/${view}`, { title, content });
    });
});

router.post("/", (req, res) => {
    const { messageText, messageUser } = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date().toDateString() });
    res.redirect("/");
})

export default router;