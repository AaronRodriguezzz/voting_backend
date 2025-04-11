import { FilterQuery } from "mongoose";
import User, { IUser } from "../models/User"

export const createUser = async (userData : any) => {
    const newUser = new User(userData)
    return await newUser.save();
}

export const findUser = async (query: FilterQuery<IUser>) => {
    const user = await User.findOne(query).exec();
    if (user) {
        const { password, ...userWithoutPassword } = user.toObject();
        return userWithoutPassword;
    }

    return null;
};