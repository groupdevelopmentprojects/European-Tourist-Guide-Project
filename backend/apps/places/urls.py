# Import path
from django.urls import path

# Import views
from . import views

urlpatterns = [
    path('', views.PlacesList.as_view(), name='location_list'),
]