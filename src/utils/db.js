const {USER, PASSWORD} = process.env;
export const connectionSrc="mongodb+srv://"+USER+":"+PASSWORD+"@cluster0.f2zo2mt.mongodb.net/productDB?retryWrites=true&w=majority"