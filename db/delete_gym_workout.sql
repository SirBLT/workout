delete from MainWorkout
where date = $1
returning *;
