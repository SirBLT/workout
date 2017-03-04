update users
set
  username = coalesce($2, username),
  email = coalesce($5, email),
where userid = $1
returning *;
