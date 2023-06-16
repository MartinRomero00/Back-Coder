export const githubResponse = (req, res, next) => {
    try {
        const {first_name, last_name, email, role, isGithub} = req.user;
        res.status(200).json({
            msg: 'User logged in GitHub successfully',
            session: req.session,
            user: {
                first_name,
                last_name,
                email,
                role,
                isGithub
            }
        })
    } catch (error) {
        console.log(error);
    }
}