delete from Users
where userid = $1
returning *;
