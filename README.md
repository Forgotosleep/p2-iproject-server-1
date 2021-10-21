# p2-iproject-server

Individual Project - Server

## Endpoints List:

- Users

  - `POST/users/register`
  - `POST/users/login`
  - `POST/users/login-google`

- Activities

  - `GET/activities/`
  - `POST/activities/`
  - `PUT/activities/:id`
  - `DELETE/activities/:id`

- UserActivities (Records)
  - `GET/user-activities/`
  - `POST/user-activities/`
  - `PUT/user-activities/:recordId`
  - `PATCH/user-activities/:recordId`
  - `DELETE/user-activities/:recordId`

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


### ACTIVIES
#### GET/activities/

> Gets all Activities entity based on User's ID
> _Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
    {
        "id": 2,
        "title": "Lempar Lembing",
        "description": "Bukan Kambing",
        "UserId": 2,
        "Author": {
            "id": 2,
            "email": "kucingku@mail.com",
            "name": "kucingku"
        }
    }
]
```

_Response (500 - Internal Server Error)_

```
{
  message: Internal Server Error
}
```

#### POST/activities/

> Creates a new Activities entity tied to a specific User
> _Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "title" : string,
  "description" : string
}
```

_Response (201)_

```
{
    "id": 6,
    "title": "Brunch",
    "description": "Sarapan Kesiangan",
    "UserId": 1,
    "updatedAt": "2021-10-19T18:53:26.481Z",
    "createdAt": "2021-10-19T18:53:26.481Z"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "Activity title is required"
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
  message: Internal Server Error
}
```

#### PUT/activities/:id

> Edits an Activity entity
> _Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "title" : string,
  "description" : string
}
```

_Response (200)_

```
[
    {
        "id": 4,
        "title": "Brunch",
        "description": "Sarapan Paling Enak",
        "UserId": 1,
        "createdAt": "2021-10-19T16:30:15.117Z",
        "updatedAt": "2021-10-19T16:33:14.235Z"
    }
]
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "Activity title is required"
    ]
}
```

_Response (404 - Not Found)_

```
{
    "message": "Activity not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  message: Internal Server Error
}
```

#### DELETE/activities/:id

> Delete an Activity Entity
> _Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "message": "Successfully deleted Activity with ID 5"
}
```


_Response (404 - Not Found)_

```
{
    "message": "Activity not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  message: Internal Server Error
}
```

### USER-ACTIVITIES (RECORDS)
#### GET/user-activities/

> Gets all Record entity based on User's ID
> _Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
    {
        "id": 1,
        "UserId": 1,
        "ActivityId": 1,
        "status": "pending",
        "createdAt": "2010-10-09T17:00:00.000Z",
        "updatedAt": "2010-10-09T17:00:00.000Z",
        "Activity": {
            "id": 1,
            "title": "Breakfast",
            "description": "Sarapan",
            "UserId": 1
        },
        "User": {
            "id": 1,
            "email": "admin@mail.com",
            "name": "admin"
        }
    },
    ...
]
```

_Response (500 - Internal Server Error)_

```
{
  message: Internal Server Error
}
```


#### POST/user-activities/

> Creates a new Record entity tied to a specific User
> _Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "ActivityId" : integer,
}
```

_Response (201)_

```
{
    "id": 4,
    "UserId": 1,
    "ActivityId": 1,
    "status": "pending",
    "updatedAt": "2021-10-19T17:41:28.816Z",
    "createdAt": "2021-10-19T17:41:28.816Z"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "Activity ID is required"
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
  message: Internal Server Error
}
```

#### PUT/user-activities/:recordId

> Edits an Record entity
> _Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "ActivityId" : integer,
}
```

_Response (200)_

```
[
    {
        "id": 4,
        "UserId": 1,
        "ActivityId": 2,
        "status": "pending",
        "createdAt": "2021-10-19T17:41:28.816Z",
        "updatedAt": "2021-10-19T17:42:49.485Z"
    }
]
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "Activity title is required"
    ]
}
```

_Response (404 - Not Found)_

```
{
    "message": "Record not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  message: Internal Server Error
}
```

#### PATCH/user-activities/:recordId

> Changes the status of an Activity entity
> _Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "message": "Status of record with ID of 4 has been set to complete."
}
```

_Response (404 - Not Found)_

```
{
    "message": "Record not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  message: Internal Server Error
}
```

#### DELETE/user-activities/:recordId

> Deletes a Record entity
> _Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not  needed
```

_Response (200)_

```
{
    "message": "Record with ID of 4 has been deleted."
}
```

_Response (404 - Not Found)_

```
{
    "message": "Record not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  message: Internal Server Error
}
```