# Generated by Django 4.1.7 on 2023-05-15 19:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('beerbuddies_app', '0002_rating'),
    ]

    operations = [
        migrations.RenameField(
            model_name='rating',
            old_name='post',
            new_name='restaurant',
        ),
    ]
