import mongoose, { Schema } from 'mongoose';

const MylistSchema = new Schema(
  {
    contentId: {
      type: String,
    },
    isMovie: {
      type: Boolean,
    },
    userInfo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Mylist = mongoose.model('mylist', MylistSchema);

export default Mylist;
