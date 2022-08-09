const mongoose = require('mongoose');

const allSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  reporter: { type: String, required: true },
  date: { type: String, required: true },
  img: { type: String, required: true },
  publisher: { type: String, required: true },
  contents: { type: String, required: true },
},
{
  timestamps: true,
  collection: '전체', 
}, 
);


allSchema.statics.create = function (payload) {
  const all = new this(payload);
  return all.save();
};

allSchema.statics.findAll = function () {
  return this.find({});
};

allSchema.statics.findOneByAllid = function (allid) {
  return this.findOne({ allid });
};

allSchema.statics.updateByAllid = function (allid, payload) {
  return this.findOneAndUpdate({ allid }, payload, { new: true });
};

allSchema.statics.deleteByAllid = function (allid) {
  return this.remove({ allid });
};

module.exports = mongoose.model('All', allSchema);