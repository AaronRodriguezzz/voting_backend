import * as userService from '../services/UserService';
import { Request, Response } from 'express';
import { errorHandler } from '../utils/errorHandler';

export const createUser = async (req: Request, res: Response) => {
    try {
        const isExist = await userService.findUser({
            $or: [
                {email: req.body.email},
                {studentID: req.body.studentID},
            ]
        })

        if(isExist){
            throw new Error('The email or studentID is already registered')
        }

        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);

    } catch (error) {
        const errors = errorHandler(error as Error);
        res.status(400).json({errors});
    }
};