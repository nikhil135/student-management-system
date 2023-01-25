# python
student management system
How to run :-
#create a virtual environment
python -m venv ~/venv
#Activate
source ~/venv/bin/activate
#Naviage to studentportal
cd studentportal
#Install requirements (make sure venv is activated)
pip install -r requirements.txt
#Create super user
python manage.py createsuperuser (give username and password)
#makemigrtions
python manage.py makemigrations
python manage.py makemigrations publication
python manage.py migrate
#runserver
python manage.py runserver

