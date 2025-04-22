import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const createToken = (req:Request, res:Response) => {
    try{
        const token = jwt.sign(
            { email: '' }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' } 
        );

        res.cookie('jwt', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000, sameSite: 'lax' }); 
    }catch(error){

    }
}