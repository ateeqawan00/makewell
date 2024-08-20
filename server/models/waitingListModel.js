import mongoose from "mongoose";

const waitingListSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: String,
});

const WaitingList = mongoose.model("WaitingList", waitingListSchema);

export default WaitingList;
