from django.db import models
from django.contrib.auth.models import AbstractUser
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

    def __str__(self) -> str:
        return f"{self.name} | {self.distance}"
    
class PurchasedBeer(models.Model):
    user = models.ForeignKey(App_User, on_delete=models.CASCADE, default=1)
    name = models.CharField(max_length=255)
    abv = models.DecimalField(max_digits=4, decimal_places=1)
    description = models.TextField(max_length=1000)

    def __str__(self):
        return f"{self.name} bought by {self.user}"
    
class Beer(models.Model):
    name = models.CharField(max_length=255)
    abv = models.DecimalField(max_digits=4, decimal_places=1)
    description = models.TextField(max_length=1000)

    def __str__(self):
        return f"{self.name} | {self.abv} |{self.description}"