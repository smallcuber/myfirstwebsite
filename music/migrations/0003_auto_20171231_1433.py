# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-12-31 18:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0002_auto_20171013_1348'),
    ]

    operations = [
        migrations.AddField(
            model_name='song',
            name='song_file',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='album',
            name='album_logo',
            field=models.FileField(upload_to=''),
        ),
        migrations.AlterField(
            model_name='song',
            name='file_type',
            field=models.CharField(default='', max_length=16),
        ),
    ]
