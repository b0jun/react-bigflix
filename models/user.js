import mongoose, { Schema } from 'mongoose';

//mongoDB | 스키마 생성
const UserSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('user', UserSchema);

export default User;
