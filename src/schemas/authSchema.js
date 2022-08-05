import joi from "joi";

const signUpSchema = joi.object({
    name: joi.string().min(1).max(120).trim().required(),
    email: joi.string().email({ tlds: { allow: false }}).required(),
    password: joi.string().min(8).max(30).required(),
    confirmPassword: joi.string().min(8).max(30).required()
})

const signInSchema = joi.object({
    email: joi.string().email({ tlds: { allow: false }}).required(),
    password: joi.string().min(8).required()
})

export { signInSchema, signUpSchema }
