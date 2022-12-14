# European Tourist Guide

```
European Tourist Guide, with a frontend built in React & Redux and a backend built in Django API.
```

## Live Demo

![Screenshot 2022-08-17 at 10 05 41 PM](https://user-images.githubusercontent.com/106568442/185194634-55257ab5-4104-42d0-8bca-e1fb7f2171ba.png)

**This App uses a Heroku free plan, so I am afraid that it takes time to load the pages.**

Check out [FRONTEND LIVE DEMO](https://european-tourist-guide.herokuapp.com/) here!!

Check out [API LIVE DEMO](https://europeantrips-backend1.herokuapp.com) here!!

## Tech used

```
* Frontend : React & Redux
* Backend : Django
```

## How to Install

1. Git Clone https://github.com/groupdevelopmentprojects/European-Tourist-Guide-Project

```
git clone 
```

2. Backend setting

```
cd backend
Python -m venv env
(For Mac) source env/bin/activate
(For Windows) env/Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
# Open http://127.0.0.1:8000/posts/

# To have dummy data for testing run:
python manage.py fixtures/dummy-data.json
```

3. Frontend setting

```
cd frontend
npm install
npm start
# Open http://127.0.0.1:3000/
```
