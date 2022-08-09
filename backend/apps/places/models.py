from django.db import models

# Import Cloudinary
from cloudinary.models import CloudinaryField

# Import Category for Reference in Places model
from apps.category.models import Category

# Create your models here.

# Create Places model for that is references category and defines the Tourists Attractions
class Places(models.Model):

    name = models.CharField('Name', max_length=120, db_index=True, null=False, blank=False)

    image = CloudinaryField('Image', blank=True, null=True)

    # Reference to category selection that deletes if category is deleted
    Category = models.ForeignKey(Category, on_delete=models.CASCADE)

    description = models.CharField('description', max_length=120, db_index=True, blank=False, null=False,)

    created_at = models.DateTimeField('Created Datetime', blank=True, auto_now_add=True)

    updated_at = models.DateTimeField('Updated Datetime', blank=True, auto_now=True)

    # Return name in string format
    def __str__(self):
        return self.name
