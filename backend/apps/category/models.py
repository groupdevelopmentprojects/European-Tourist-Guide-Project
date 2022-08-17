from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.

class Category(models.Model) :
    name = models.CharField(
        'Name', blank=False, null=False, max_length=120, db_index=True
    )
    image = CloudinaryField(
        'image', blank=True, null=True
    )
 