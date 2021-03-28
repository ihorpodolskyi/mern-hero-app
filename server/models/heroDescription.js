import mongoose from "mongoose";

const heroSchema = mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  realName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  originDesc: {
    type: String,
    required: true,
  },
  superpowers: {
    type: String,
    required: true,
  },
  catchPhrase: {
    type: String,
    required: true,
  },
  selectedFile: String
});

const HeroDescription = mongoose.model("HeroDescription", heroSchema);

export default HeroDescription;