const {Schema, model} = require('mongoose')

const WorkoutSchema = new Schema( 
  {
    name: {
      type: String,
      required: true
    },
    workoutType: {
      type: String,
      required: true
    },
    workoutDescription: {
      type: String,
      required: true,
    }
  }
)

const Workout = model('workout', WorkoutSchema)

module.exports = Workout