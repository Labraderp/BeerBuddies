# Generated by Django 4.2 on 2023-05-04 16:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('beerbuddies_app', '0002_app_user_profile_info_app_user_token_amount_and_more'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='friendlist',
            unique_together=set(),
        ),
        migrations.AddField(
            model_name='friendlist',
            name='friends',
            field=models.ManyToManyField(blank=True, related_name='friend_list', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='friendlist',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.RemoveField(
            model_name='friendlist',
            name='friend',
        ),
    ]