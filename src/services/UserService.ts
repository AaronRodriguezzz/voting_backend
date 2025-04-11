import { FilterQuery } from "mongoose";
import User, { IUser } from "../models/User"

export const createUser = async (userData : any) => {
    const newUser = new User(userData)
    return await newUser.save();
}

export const findUser = async (query: FilterQuery<IUser>) => {
    return await User.findOne(query).exec();
};