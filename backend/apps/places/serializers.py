from .models import Places
from rest_framework import serializers

class Placesserializers(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Places 
        fields = '__all__'
