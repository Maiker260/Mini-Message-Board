import express from "express";
const router = express.Router();

const pages = [
    { path: "/", view: "index", title: "Home" },
    { path: "/about", view: "about", title: "About" },
]

pages.forEach(({ path, view, title }) => {
    router.get(path, (req, res) => {
        res.render(`pages/${view}`, { title });
    });
});

export default router;