const {z} = require("zod");

//creating an object schema

const signupSchema = z.object({
    username : z
    .string({required_error: "name is required"})
    .trim()
    .min(3,{message: "name should be min 3 character"})
    .max(20,{message:"name must not exceed 20 character"}),

    email : z
    .string({required_error : "email is required"})
    .trim()
    .email({message:"invalid email"})
    .min(5,{message:" email minimum 3 char is required"})
    .max(50,{message:" emailnot more than 20 chars"}),


    phone :z
    .string({required_error : "phone no is required"})
    .trim()
    .min(5,{message:" phone no minimum 3 char is required"})
    .max(20,{message:"phone no not more than 20 chars"}),


    password : z
    .string({required_error : "password is required"})
    .min(5,{message:"password minimum 3 char is required"})
    .max(20,{message:"password not more than 20 chars"}),


});

module.exports= signupSchema;