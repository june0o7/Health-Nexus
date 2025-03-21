"use server";
import { ID, Query } from "node-appwrite"
import {
    BUCKET_ID,
    
    ENDPOINT,
    PATIENT_COLLECTION_ID,
    PROJECT_ID,
    databases,
    storage,
    users,
  } from "../appwrite.config";
import { parseStringify } from "../utils"
// import { parsePhoneNumber } from 'libphonenumber-js';
// import {CreateUserParams} from "../utils"

export const createUser = async(user : CreateUserParams) =>{
    try{
       
        const newUser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.name


        )
    return parseStringify(newUser)
    }catch(error : any){
        if(error && error?.code ===409){
            const existingUser = await user.list(
                [Query.equal("email", [user.email]),]
            );
            return existingUser.users[0];
        }
        console.error("Error in createuser:", error);
     // Rethrow error for debugging
}
};