/* 
Pagi @student-phase2, hari ini tidak ada kelas yaa silahkan lanjut mengerjakan Individual Project

Repo client dan server sudah ada di github, silahkan difork bagi yang belum
🔗 server: https://github.com/rmt-16-paris-fox/p2-iproject-server
🔗 client: https://github.com/rmt-16-paris-fox/p2-iproject-client
jangan lupa untuk mockup, sertakan gambar/foto di repo client dengan membuat folder mockup

Pengumpulan Individual Project itu di fork lalu bikin pull request dari repo hasil fork ke repo utama, jadi jangan bikin branch, nanti akan diingatkan oleh buddynya

berikut merupakan komponen untuk Individual Project seperti yang terdapat di document requirement :
- 15 = Hit minimal 2 3rd party API (1 wajib REST API, 1 lagi bebas mau pakai rest API atau package)
- 50 = Fitur utama (socket, nodemailer, dll teknologi apa pun yang menarik)
- 10 = Deploy
- 10 = Aesthetic
- 10 = Github
- 5  = API DOC
Bobot untuk iProject 20%, jadi kerjakan sebaik mungkin untuk menambah nilai yang sudah kalian dapat

*/

/* 
We want something simple, attractive in its utility and reliable.

Let's start with a User. User has no level, no admin role. Each User's Activities and Records are personalized to their own.
Activities, is created by the User and is personal to the User.
UserActivities/Record, is the record-keeping itself.

User hasMany Activities

User Many-Many Record

Categories

Dua relasi, One to Many , Many to Many antara tabel User & ACtivities, dibedain dengan alias

Google Calendar dari sisi Client aja

Relasi & Google Calendar

Untuk Relasi, referensi Favourites dari challenge 3
Untuk G-calendar, pakai Google Oauth2 Playground untuk tes lempar-terima data ke API-nya. Mungkin juga ad terintegrasi di Vue.

Maksimalin 3rd-party API & Fitur
Pakai Git Workflow
Dokumentasi server
Deploy

*/

/* 

sequelize db:create

sequelize model:generate --name User --attributes email:string,password:string,name:string

sequelize model:generate --name Activity --attributes title:string,description:string

sequelize model:generate --name UserActivity --attributes UserId:integer,ActivityId:integer,status:string

sequelize seed:generate --name Initial-seed-user
sequelize seed:generate --name Initial-seed-inventory

sequelize db:migrate
sequelize db:seed:all


git remote set-url origin git@github.com:Forgotosleep/p2-iproject-server-1.git

*/

/* 
SERVER Endpoints

User  -OK
- Login
- Register
- Login Google // No Oauth Client Key in .env just yet!

Activity  -OK
- GetAll (by the User) (GET)
- Create new (POST)
- Edit Activity (PUT)
- Delete Activity (DELETE)

UserActivity / Records -OK
- GetAll (tied to per User) (GET) ; with Date Query if possible
- Create Record
- Edit Record
- Delete Record
* Print Record, with timestamp so it can't be faked (Client)

*/

/* 
TODO: (lest I forget)
BACKEND:
- Endpoints -OK
- OAuth (Server)  -OK
- Documentation -OK
- AuthZ?  -NOT NEEDED. By default access is blocked on client's side, and another user's activities can't be accessed by a different user except by POSTMAN and its like
- GET Record by its ID?  - might be needed, but right now priority lies on G-calendar integration.

FRONTEND:
- G-Calendar  -OK!
- Oauth (Client)
- Looks

*/

/* 
CLIENT TODO:
- ACTIVITY
  * GET       -OK
  * POST      -OK
  * PUT       -OK
  * DELETE    -OK
- RECORDS
  * GET       -OK
  * POST      
  * PUT       -NOT IMPLEMENTED (It seems silly once I think about it. You could just as easily delete, then add a new one and it seems more intuitive that way)
  * PATCH     -OK
  * DELETE    -OK
- INTEGRATE G-CALENDAR W/ RECORDS   -OK
- DEPLOY      
*/

/* 
heroku create brian-idid

heroku addons:create heroku-postgresql:hobby-dev --app brian-idid

heroku config --app brian-idid

heroku config:set SECRETKEY= GOOGLECLIENTID= --app brian-idid

heroku git:remote --app brian-idid

git push heroku +HEAD:master

heroku run bash 
npx sequelize-cli db:migrate

https://brian-idid.herokuapp.com/

heroku logs --tail

*/