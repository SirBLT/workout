insert into MainWorkout
  (email, date, timeOfDay, mGroup, workoutLength, numOfExercises, difficulty, workoutNotes)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8);
