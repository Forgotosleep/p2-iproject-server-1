# p2-iproject-server
Individual Project - Server

## Endpoints List:
- Users
  - `POST/users/register`
  - `POST/users/login`

&nbsp;

## RESTFUL Endpoints

### USERS

#### POST/users/register
> Creates a new User entity
> _Request Header_

```
not needed
```

_Request Body_

```
{
  "name" : string,
  "email" : email,
  "password" : string,
}
```

_Response (201)_

```
{
    "id": 12,
    "email": "saturn@mail.com",
    "name": "saturn",
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "Email is required",
        "Password is required"
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
  message: Internal Server Error
}
```

#### POST/users/login
> Logs in to the App with credentials provided
> _Request Header_

```
not needed
```

_Request Body_

```
{
  "email" : email,
  "password" : string,
}
```

_Response (200)_

```
{
    "access_token": access_token
}
```

_Response (401 - Login Error)_

```
{
    "message": "Invalid email/password"
}
```

_Response (500 - Internal Server Error)_

```
{
  message: Internal Server Error
}
```