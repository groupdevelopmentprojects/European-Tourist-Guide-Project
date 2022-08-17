from rest_framework import generics, filters
from .serializers import Placesserializers
from .models import Places
from django_filters.rest_framework import DjangoFilterBackend

class PlacesList(generics.ListAPIView):
    queryset = Places.objects.order_by('-created_at').all()
    serializer_class = Placesserializers
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['Category']
    search_fields = ['name', 'decription'] 
