export const productValidator = (req, res, next) => {
    const { title, description, price, code, stock, category } = req.body;
    if (title && description && price && code && stock && category) {
        next();
    } else {
        res.status(400).json({ error: "Faltan datos" });
    }
}