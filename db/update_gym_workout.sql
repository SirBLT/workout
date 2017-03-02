update MainWorkout
set
  userId = coalesce($1, userId),
  timeofday = coalesce($3, timeofday),
  muscleGroup = coalesce($4, muscleGroup),
  workoutlength = coalesce($5, workoutlength),
  numberOfExercises = coalesce($6, numberOfExercises),
  difficultyLevel = coalesce($7, difficultyLevel),



where date = $2
returning *;
