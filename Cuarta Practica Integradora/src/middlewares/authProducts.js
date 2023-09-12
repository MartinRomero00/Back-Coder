export const authProducts = (req, res, next) => {
    if (req.user.role === 'admin' || "premium") {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}