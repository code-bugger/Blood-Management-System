from django.urls import path
from . import views

urlpatterns = [
    path('', views.getDatas),
    path('delete/<str:pk>/', views.deleteDoner),
    path('create/', views.createDoner),
    path('update/<str:pk>/', views.updateDoner),
]