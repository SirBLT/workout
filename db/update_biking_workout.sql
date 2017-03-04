update Biking
set
  email = coalesce($1, email),
  timeofday = coalesce($3, timeofday),
  distance = coalesce($4, distance),
  workoutlength = coalesce($5, workoutlength),
  avgspeed = coalesce($6, avgspeed),
  avghr = coalesce($7, avghr),
  surfacetype = coalesce($8, surfacetype),
  difficulty = coalesce($9, difficulty),
  othernotes = coalesce($10, othernotes)


where date = $2
returning *;
