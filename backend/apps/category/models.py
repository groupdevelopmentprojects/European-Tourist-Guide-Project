from email.mime import image
from django.db import models
# Import Cloudinary for image
from cloudinary.models import CloudinaryField
# Create your models here.


# Create Model that defines the Natural Wonders selection category

class Category(models.Model):
    name = models.CharField('Name', max_length=120, blank=False, null=False, db_index=True),

    image = CloudinaryField('Image', blank=True, null=True)
