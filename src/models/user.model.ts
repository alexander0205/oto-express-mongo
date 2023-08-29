import mongoose from 'mongoose';
import { UserInterface } from '../interfaces/user.interface';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const User = mongoose.model<UserInterface & mongoose.Document>('User', UserSchema);

export default User;
