# Generated by Django 4.0.6 on 2022-07-21 18:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0004_cat_toys'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cat',
            name='toys',
        ),
    ]