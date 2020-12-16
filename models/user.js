import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../config';

const { JWT_SECRET } = config;

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

UserSchema.methods.setPassword = async function (password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  this.password = hashedPassword;
};

//입력한 비밀번호가 해당 계정의 비밀번호와 일치 여부
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result; // boolean
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON(); //응답할 Data에서 hashedPassword 필드 제거
  delete data.password;
  return data;
};

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this.id,
      email: this.email,
    },
    JWT_SECRET,
    {
      expiresIn: '7d', // 7일동안 유효함
    }
  );
  return token;
};

const User = mongoose.model('user', UserSchema);

export default User;
