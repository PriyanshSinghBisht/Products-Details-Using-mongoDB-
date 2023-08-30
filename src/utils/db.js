const {user, password} = process.env;
export const connectionSrc="mongodb+srv://"+user+":"+password+"@cluster0.f2zo2mt.mongodb.net/productDB?retryWrites=true&w=majority"