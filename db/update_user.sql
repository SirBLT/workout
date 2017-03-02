update Users
set
  username = coalesce($2, username),
  firstname = coalesce($3, firstname),
  lastname = coalesce($4, lastname),
  email = coalesce($5, email),
  password = coalesce($6, password)

where userid = $1
returning *;
