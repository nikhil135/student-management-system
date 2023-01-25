from django.db import models
from django.contrib.auth.models import User

class Faculty(models.Model):
    user = models.OneToOneField(User, related_name='faculties', on_delete=models.CASCADE)
    institution = models.CharField(max_length=254, blank=True)
    department = models.CharField(max_length=254, blank=True)
    class  Meta:
        verbose_name_plural  =  "Faculties"

class Publication(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=254)
    type = models.CharField(max_length=254, blank=True)
    venue = models.CharField(max_length=254, blank=True)
    date = models.DateTimeField(blank=True)
    sponser = models.CharField(max_length=254, blank=True)
    file = models.FileField(
        upload_to= 'publications/',
        blank=True,
    )
    grant =  models.CharField(max_length=254, blank=True)
    faculty =  models.ForeignKey(Faculty, related_name='pubs', on_delete=models.CASCADE)

    class Meta:
       ordering = ('created', )

    def save(self, *args, **kwargs):
        """
        use this for any additonal settings
        """
        super(Publication, self).save(*args, **kwargs)

class Student(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=254)
    age = models.PositiveIntegerField()
    sex = models.CharField(
        choices=GENDER_CHOICES, default='M', max_length=2)
    phone = models.CharField(max_length=15, blank=True, default='')
    email = models.EmailField(max_length=254, blank=True, default='')
    publication = models.ManyToManyField(Publication, related_name='stupubs', blank=True)
    award = models.CharField(max_length=254, blank=True, default='')
    patent =models.CharField(max_length=254, blank=True, default='')
    institution = models.CharField(max_length=254, blank=True)
    department = models.CharField(max_length=254, blank=True)
    
    class Meta:
        ordering = ('created', )

    def save(self, *args, **kwargs):
        """
        use this for any additonal settings
        """
        super(Student, self).save(*args, **kwargs)

