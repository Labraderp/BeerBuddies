from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class App_User(AbstractUser):
    email = models.EmailField(blank=False, null=False, unique=True)
    handle = models.CharField(
        max_length=255, null=False, blank=False, unique=True)
    USERNAME_FIELD = "handle"
    REQUIRED_FIELDS = []
    profile_info = models.TextField(max_length=1000, default='')
    token_amount = models.IntegerField(blank=True, default=0)

    def __str__(self):
        return f"{self.handle} | {self.email}"


# class Beer_Garden(models.Model):
#     user = models.ForeignKey(
#         App_User, on_delete=models.CASCADE, related_name='user')
#     # beers = models.ManyToManyField(Beer, related_name="beer_gardens")

#     def __str__(self):
#         return f"{self.user.handle}'s beer garden'"

#     # def __str__(self):
#     #     return f"{self.beer} ({self.user.handle})"


# class Beer(models.Model):
#     name = models.CharField(max_length=255)
#     description = models.TextField(max_length=1000)
#     beer_garden = models.ManyToManyField(
#         Beer_Garden, related_name="beer_gardens")

#     def __str__(self):
#         return f"{self.name} | {self.description}"
