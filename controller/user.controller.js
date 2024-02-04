const UserServices = require('../services/user.services');

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body; 

        const existingUser = await UserServices.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                status: false,
                error: "User with this email already exists."
            });
        } else {
            await UserServices.registerUser({ email, password });
            
            res.json({
                status: true,
                success: "User registered successfully."
            });
        }
    } catch (error) {
        next(error); // Pass the error to the next middleware or error handler
    }
};
