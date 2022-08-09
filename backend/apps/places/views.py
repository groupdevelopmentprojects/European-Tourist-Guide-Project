from django.shortcuts import render

# Import generics: for APIView and filters: to return what is selected by parameter
from rest_framework import generics, filters

# Import Places model and serializer
from .models import Places
from .serializers import PlacesSerializer

# Import DjangoFilterBackend that returns data based on field that was filtered from the backend
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
# Create a view that lists the Categories based on its filtering the request from the back
class PlacesList(generics.ListAPIView):
    queryset = Places.objects.all()
    serializer_class = PlacesSerializer
    # Filters field selection from backend
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    # Sets the field you want to filter against
    filterset_fields = ['Category']
    # Sets the items that can be filtered/queried
    search_fields = ['name', 'description']
