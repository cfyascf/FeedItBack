import { z } from "zod";

const createUserSchema = z.object({
    fullname: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        { message: 'Password must contain at least eight characters, one uppercase letter, one lowercase letter, one number and one special character:' }
    )
});

const updateUserSchema = z.object({
    fullname: z.string().min(3).max(50).optional(),
    email: z.string().email().optional(),
    password: z.string().regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        { message: 'Password must contain at least eight characters, one uppercase letter, one lowercase letter, one number and one special character:' }
    ).optional()
});

type ICreateUserSchema = z.infer<typeof createUserSchema>;
type IUpdateUserSchema = z.infer<typeof updateUserSchema>;

export { 
    createUserSchema, ICreateUserSchema,
    updateUserSchema, IUpdateUserSchema
};