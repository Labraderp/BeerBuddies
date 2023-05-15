from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('signup/', views.user_sign_up, name='signup'),
    path('signin/', views.user_sign_in, name='signin'),
    path('curruser/', views.curr_user, name='curruser'),
    path('signout/', views.user_sign_out, name='signout'),
    path('increment_token/', views.increment_token, name='increment_token'),
    path('decrement_token/', views.decrement_token, name='decrement_token'),
    path('rate/<int:restaurant_id>/<int:rating>/', views.rate)
    # path('QRcode/', views.getQRcode, name='getQRcode' ) <-- calls api from backend
]
