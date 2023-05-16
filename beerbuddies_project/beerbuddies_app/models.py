from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models import Avg
# Create your models here.


class App_User(AbstractUser):
    email = models.EmailField(blank=False, null=False, unique=True)
    handle = models.CharField(
        max_length=255, null=False, blank=False, unique=True)
    USERNAME_FIELD = "handle"
    REQUIRED_FIELDS = []
    profile_info = models.TextField(
        blank=True, null=True, max_length=1000, default='')
    token_amount = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.handle} | {self.email}"


class Restaurant(models.Model):
    name = models.CharField(max_length=255)
    distance = models.DecimalField(max_digits=4, decimal_places=2)

    def average_rating(self) -> float:
        return RestaurantRating.objects.filter(restaurant=self).aggregate(Avg("rating"))["rating__avg"] or 0

    def __str__(self) -> str:
        return f" Restaurant Name - {self.name} | Distance - {self.distance} | Average Rating - {self.average_rating()}"


class PurchasedBeer(models.Model):
    user = models.ForeignKey(App_User, on_delete=models.CASCADE, default=1)
    name = models.CharField(max_length=255)
    abv = models.DecimalField(max_digits=4, decimal_places=1)
    description = models.TextField(max_length=1000)

    def __str__(self):
        return f"{self.name}/{self.abv}/{self.description}/{self.user}"


class Beer(models.Model):
    name = models.CharField(max_length=255)
    abv = models.DecimalField(max_digits=4, decimal_places=1)
    description = models.TextField(max_length=1000)

    def average_rating(self) -> float:
        return BeerRating.objects.filter(beer=self).aggregate(Avg("rating"))["rating__avg"] or 0

    def __str__(self):
        return f"{self.name} | {self.abv} |{self.description}"


class RestaurantRating(models.Model):
    user = models.ForeignKey(App_User, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.handle} Rated {self.restaurant.name} with {self.rating} stars"


class BeerRating(models.Model):
    user = models.ForeignKey(App_User, on_delete=models.CASCADE)
    beer = models.ForeignKey(Beer, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.handle} Rated {self.beer.name} with {self.rating} stars"
