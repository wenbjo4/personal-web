import mongoose from 'mongoose';

const ScheduleSchema = new mongoose.Schema({
  date: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  startTime: { type: String, required: true },  // 新增開始時間
  endTime: { type: String, required: true },    // 新增結束時間
}, { timestamps: true });

export default mongoose.models.Schedule || mongoose.model('Schedule', ScheduleSchema);
