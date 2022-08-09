# Import path
from django.urls import path

# Import views
from . import views

urlpatterns = [
    path('', views.CategoryList.as_view(), name='category_list'),
]