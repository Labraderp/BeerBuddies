from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('signup/', views.user_sign_up, name='signup'),
    path('signin/', views.user_sign_in, name='signin'),
    path('curruser/', views.curr_user, name='curruser'),
    path('signout/', views.user_sign_out, name='signout'),
    path('increment_token/', views.increment_token, name='increment_token'),
    path('purchaseBeer/', views.purchase_beer, name='purchase_beer'),
    path('update_user_preferences/', views.update_user_preferences, name='update_user_preferences'),
    path('restaurant_rate/<int:restaurant_id>/<int:rating>/', views.restaurant_rate),
    path('beer_rate/<int:beer_id>/<int:rating>/', views.beer_rate),
    path('api/purchased_beers/<str:handle>', views.purchased_beers, name='purchasedBeer')
    # path('QRcode/', views.getQRcode, name='getQRcode' ) <-- calls api from backend
]
