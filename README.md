# Simple Portfolio WebSite for a Designer (Backend)

## Used components
- Python 3.11
- Flask + FlaskJWT
- PostgreSQL + SQLAlchemy
- Uwsgi + nginx (not yet)

## How to run a developement server?
1. Clone repo in a directory on your machine.
2. Open terminal, go to repo directory
3. Create venv with a following command
`
python -m venv venv
`
4. Install PostgreSQL and create your own user.
5. Add to project folder a file named secret.py with the following content,
replacing the values in the file according to your PostgreSQL credentials:
```
pg_user = "username" #This must be the name of the actual non-test database as well
pg_pass = "password" #PSQL password
pg_host = "localhost" #Host, do not change
pg_db = "designer" #DatabaseName

key = f'postgresql://{pg_user}:{pg_pass}@{pg_host}/{pg_db}' #do not change
flask_secret = 'value2' #generated with uuid.uuid4().hex
jwt_secret = 'value1'
```
6. Open flask cli with `flask shell` command in your terminal. 
Paste the following
```
import db,User from models
db.init_app(app)

db.session.create_all()
db.session.commit()

admin = Admin(username='username')
admin.set_password('password')

db.session.add(Admin)
db.session.commit()
```
7. Execute `flask run` in your terminal.
7.1. In case of missing libraries - install them with `pip install <library-name>`
