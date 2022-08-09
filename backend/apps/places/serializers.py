# Import Places
from .models import Places

# Import serializers
from rest_framework import serializers

# Create a Places serializer
class PlacesSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Places
        fields = '__all__'
