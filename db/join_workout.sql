select mainWorkout.email, mainWorkout.date, mainWorkout.timeOfDay, mainWorkout.mGroup, perExercise.exercise, perExercise.sets, perExercise.reps, perExercise.weight, mainWorkout.workoutNotes from mainWorkout
full join perExercise
on mainWorkout.email = perExercise.email
