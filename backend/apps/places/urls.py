from django.urls import path
from . import views

urlpatterns = [
    path('', views.PlacesList.as_view(), name='post_list'),
]
