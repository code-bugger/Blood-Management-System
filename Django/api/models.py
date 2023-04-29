from django.db import models
from datetime import date

# Create your models here.
class Doner(models.Model):
    Name=models.CharField(max_length=30)
    Age=models.IntegerField()
    Categorychoices=[
        ('A+ve','A+ve'),
        ('B+ve','B+ve'),
        ('O+ve','O+ve'),
        ('AB+ve','AB+ve'),
    ]
    Category=models.CharField(choices=Categorychoices,max_length=20)
    Date=models.DateField()
    
    
    def  __str__(self):
        return self.Name
    
    def availability(self):
        hello=(date.today()-self.Date).days
        if(hello>=90):
            return "Available"
        else:
            return "Not Available"