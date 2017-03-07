select MainWorkout.email, MainWorkout.date, MainWorkout.mGroup, perExercise.exercise, perExercise.sets, perExercise.reps, perExercise.weight, perExercise.otherNotes from MainWorkout
inner join perExercise
on MainWorkout.date=perExercise.date
where MainWorkout.date = $1;
