insert into MainWorkout
  (userId, date, timeOfDay, muscleGroup, workoutLength, numberOfExercises, difficultyLevel)
VALUES
($1, $2, $3, $4, $5, $6, $7);
