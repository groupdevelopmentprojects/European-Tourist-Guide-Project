# Import Category model
from .models import Category

# Import serializers from rest framework
from rest_framework import serializers

# Create a Category serializer that converts data for use in api

class CategorySerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Category
        fields = '__all__'
