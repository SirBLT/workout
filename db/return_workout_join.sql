select MainWorkout.email, MainWorkout.date, MainWorkout.mGroup, perExercise.exercise, perExercise.sets, perExercise.reps, perExercise.weight, perExercise.otherNotes from MainWorkout
inner join perExercise
on MainWorkout.email=perExercise.email
where MainWorkout.date = $1;
