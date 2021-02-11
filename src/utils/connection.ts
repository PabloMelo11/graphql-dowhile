import * as mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://admin:godofwar3@cluster0.a13kd.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
