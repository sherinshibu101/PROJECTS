import {getDBConnection} from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signUpRoute = {
    path:'api/signup',
    method:'POST',
    handler: async (req, res) => {
        const{email,password} = req.body;
        const db = getDBConnection('accesslearn');
        const user = await db.collection('users').findOne({email});

        if(user){
            res.status(400).json({message:'User already exists'});
        }
        const passwordHash = await bcrypt.hash(password, 10);

        const startinginfo =
        {
            haircolor: '';
            favouriteFood: '';
            bio: '';
        };

        const result = await db.collection('users').insertOne({
            email,
            passwordHash,
            info: startingInfo, 
            isVerified: false,
        })
        const { insertedId } = result;
        jwt.sign({
            id: insertedId,
            email,
            info: startingInfo,
            isVerified: false,
        })
}