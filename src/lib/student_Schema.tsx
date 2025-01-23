import {z} from 'zod';

const schema = z.object({
  username: z.string().min(3, {message: "Username must be atleast 3 characters"})
  .max(20, {message: "Password must be at most 20 characters"}),
  email: z.string().email({message: "Invalid email address"}),
  password: z.string().min(8, {message: "Password must be at least 8 characters"}),
  firstName: z.string().min(1, {message: "First Name is required!"}),
  lastName: z.string().min(1, {message: "Last Name is required!"}),
  phone: z.string().min(1, {message: "Phone is required!"}),
  address: z.string().min(1, {message: "Address is required!"}),
  bloodType: z.string().min(1, {message: "Blood type is required!"}),
  birthday: z.date({message: "Birthday is required!"}),
  sex: z.enum(["male", "female"], {message: "Sex is required!"}),
  img: z.instanceof(File, {message: "Image is required!"}),
})

export default schema;
