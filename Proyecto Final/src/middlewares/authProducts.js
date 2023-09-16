export const authProducts = (req, res, next) => {
    if (req.user.role === 'admin' || req.user.role === 'premium') {
        next();
    } else {
        res.status(401).json('Unauthorized');
    }
}