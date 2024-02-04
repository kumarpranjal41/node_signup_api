const UserModel = require('../model/user.model');
const PassEncy =require('bcrypt');

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
           const EncPass = await PassEncy.hash(password , 10);
            const createUser = new UserModel({ email, password: EncPass });
            return await createUser.save();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;
