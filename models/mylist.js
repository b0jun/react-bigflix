import mongoose, { Schema } from 'mongoose';

const MylistSchema = new Schema(
  {
    contentId: {
      type: String,
    },
    contentInfo: {
      type: Array,
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

const Mylist = mongoose.model('user', MylistSchema);

export default Mylist;
