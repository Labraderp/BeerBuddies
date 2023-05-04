# Generated by Django 4.2 on 2023-05-04 16:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('beerbuddies_app', '0004_beer_garden_delete_friendlist'),
    ]

    operations = [
        migrations.CreateModel(
            name='Beer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(max_length=1000)),
            ],
        ),
        migrations.RemoveField(
            model_name='beer_garden',
            name='beer_description',
        ),
        migrations.AlterField(
            model_name='beer_garden',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='beer_garden',
            name='beer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='beer', to='beerbuddies_app.beer'),
        ),
    ]