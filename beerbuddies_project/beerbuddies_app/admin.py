from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register([App_User, Beer, PurchasedBeer,
                    Restaurant, RestaurantRating, BeerRating])
