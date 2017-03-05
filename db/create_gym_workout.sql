insert into MainWorkout
  (username, date, timeOfDay, muscleGroup, workoutLength, numberOfExercises, difficulty)
VALUES
($1, $2, $3, $4, $5, $6, $7);
