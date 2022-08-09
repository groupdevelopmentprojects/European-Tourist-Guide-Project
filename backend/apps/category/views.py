from django.shortcuts import render

# Import generics: for APIView and filters: to return what is selected by parameter
from rest_framework import generics, filters

# Import Category model and serializer
from .models import Category
from .serializers import CategorySerializer

# Import DjangoFilterBackend that returns data based on field that was filtered from the backend
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
# Create a view that lists the Categories based on its filtering the request from the back
class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # Filters selection from backend based on search
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]