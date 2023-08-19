export const authCompra = (req, res, next) => {
    if (req.user.role === 'user' || req.user.role === 'premium') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}