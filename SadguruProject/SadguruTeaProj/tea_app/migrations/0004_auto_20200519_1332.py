# Generated by Django 2.2 on 2020-05-19 13:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tea_app', '0003_auto_20200519_1320'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tea',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2020, 5, 19, 13, 32, 49, 553325)),
        ),
        migrations.AlterField(
            model_name='tea',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='media'),
        ),
    ]
