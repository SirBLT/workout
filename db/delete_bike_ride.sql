delete from Biking
where date = $1
returning *;
