# Generated by Django 4.0.6 on 2022-07-19 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0002_auto_20200831_1441'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cat',
            name='breed',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='cat',
            name='description',
            field=models.TextField(max_length=250),
        ),
        migrations.AlterField(
            model_name='cat',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
