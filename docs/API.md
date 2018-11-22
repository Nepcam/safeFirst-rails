### Request Structure

Clients using the API should have the following HTTP header
<pre>
Accept: application/json
</pre>

<pre>
Content-Type: application/json
</pre>

This header not required for sign_in and non secure API.
<pre>
Authorization: {sign_in response Authorization header}
</pre>

Method : POST
Route : /users

(body) - an object / if correct new user :
```sh
{
  "user": {
    "name": "Other Rbob",
    "email": "abc@gmail.com",
    "password": "123456789",
    "password_confirmation": "123456789",
    "contact_number": "35345",
    "home_address": "86CQ WSellington"
  }
}
```
Will return
```sh
{
  "name": "Other Rbob",
  "email": "abc@gmail.com",
  "contact_number": "35345",
  "home_address": "86CQ WSellington"
}
```

(body) - an object / if invalid user details:
```sh
{
  "name": "",
  "email": "abc@gmail.com",
  "contact_number": "35345",
  "home_address": "86CQ WSellington"
}
```
Will return
```sh
{
  "errors":{
    "email":["has already been taken"],
    "name":["can't be blank"]
  }
}
```

Method : POST
Route : /users/sign_in

(body) - an object / if correct combination :
```sh
{
  "user": {
    "email":"abc@gmail.com",
    "password":"123456789"
  }
}
```
Response Header with Authorization header
```sh
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Download-Options: noopen
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: strict-origin-when-cross-origin
Location: /
Content-Type: application/json; charset=utf-8
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNTQyODUzODg3LCJleHAiOjE1NDI5NDAyODcsImp0aSI6IjMzNzQzZmRiLTFiYzgtNDBiMy04NmJiLTkzODNmYTA4MzA3NiJ9.vsGHjCceQL-i2a6lWHoAVP4_cJ2aqwbDM1k8gT4lNjU
ETag: W/"a6b23021868034015633de64ca2ac7c1"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 07d4ed9a-22f5-4f8b-96b0-8b3e2d66be07
X-Runtime: 0.152731
Transfer-Encoding: chunked
```
Response Body:

```sh
{
  "name": "",
  "email": "abc@gmail.com",
  "contact_number": "35345",
  "home_address": "86CQ WSellington"
}
```

(body) - an object / if incorrect password :
```sh
{"user_name":"bob",
"password":"bob"
}
```
Will return
```sh
{
  "error": "Invalid Email or password."
}
```
 ---

Method : GET
Route : /dashboard

(body)- - an array of objects
```sh
{
      TBD
}
```


Method : DELETE
Route : /users/sign_out
 ---
