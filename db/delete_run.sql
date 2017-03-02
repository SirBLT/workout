delete from Running
where date = $1
returning *;
