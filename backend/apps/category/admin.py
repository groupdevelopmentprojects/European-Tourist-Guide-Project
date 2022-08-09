from django.contrib import admin

# Import Category model
from .models import Category

# Register your models here.
admin.site.register(Category)