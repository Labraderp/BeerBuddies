from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('signup/', views.user_sign_up, name='signup'),
    path('signin/', views.user_sign_in, name='signin'),
    path('curruser/', views.curr_user, name='curruser'),
    path('signout/', views.user_sign_out, name='signout')
]
