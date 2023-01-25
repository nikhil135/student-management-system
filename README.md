# python
student management system

How to run :- <br>
#create a virtual environment <br>
python -m venv ~/venv <br>

#Activate <br>
source ~/venv/bin/activate <br>

#Naviage to studentportal <br>
cd studentportal <br>

#Install requirements (make sure venv is activated) <br>
pip install -r requirements.txt <br>

#Create super user <br>
python manage.py createsuperuser (give username and password) <br>

#makemigrtions <br>
python manage.py makemigrations <br>
python manage.py makemigrations publication <br>
python manage.py migrate <br>

#runserver <br>
python manage.py runserver <br>

