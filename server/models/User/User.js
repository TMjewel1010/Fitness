const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt')
const Meal = require('../Meals/Meals')

// add workout subdocument to this
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      function(input) {
        return input.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      },
      message: (props) => `${props} is not a valid email address`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  meals: [Meal.schema]
});

UserSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

const User = model('user', UserSchema)

module.exports = User