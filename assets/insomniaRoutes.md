### Get - Return all users
`http://localhost:3001/api/users/`

### Get - Return all thoughts
`http://localhost:3001/api/thoughts/`

### Get - Return single users
`http://localhost:3001/api/users/64c080fab11d0da0c8547cf3`

### Get - Return single thought
`http://localhost:3001/api/thoughts/64c08241b11d0da0c8547cfd`

## Users

### Post 

{
	"username": "alainchau",
	"email": "alain@ygmail.com",
	"friends": ["64c080fab11d0da0c8547cf3", "64c08103b11d0da0c8547cf5", "64c0814db11d0da0c8547cfb"],
	"thoughts": ["64c08241b11d0da0c8547cfd", "64c087cdb11d0da0c8547d15"]
}

{
	"username": "richard",
	"email": "rich@yahoo.com"
}

### Delete
 `http://localhost:3001/api/users/ID_HERE`

