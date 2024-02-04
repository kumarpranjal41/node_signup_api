const UserModel = require('../model/user.model');

class UserServices {
    static async findOne(query) {
        try {
            return await UserModel.findOne(query);
        } catch (error) {
            throw error;
        }
    }

    static async registerUser({ email, password }) {
        try {
            const createUser = new UserModel({ email, password });
            return await createUser.save();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;
