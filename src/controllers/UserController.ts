import * as userService from '../services/UserService';
import { Request, Response } from 'express';
import { errorHandler } from '../utils/errorHandler';

export const createUser = async (req: Request, res: Response) => {
    try {
        // Check if the email or studentID is already in use by querying the database
        const isExist = await userService.findUser({
            $or: [
                {email: req.body.email},
                {studentID: req.body.studentID},
            ]
        })
        // If either the email or studentID is already used, throw an error
        if(isExist){
            throw new Error('The email or studentID is already registered')
        }
        // Create a new user by calling the createUser service method and save it to the database
        const newUser = await userService.createUser(req.body);
         // Respond with a 201 status and the newly created user object
        res.status(201).json(newUser);

    } catch (error) {
         // Use the errorHandler utility to format the error messages
        const errors = errorHandler(error as Error);
        // Respond with a 400 status and the error messages
        res.status(400).json({errors});
    }
};