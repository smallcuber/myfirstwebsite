from django.db import models
from django.urls import reverse
from django.core.validators import FileExtensionValidator
from myfirstwebsite.settings import SONG_FILE_EXTENSION


class Album(models.Model):
    artist = models.CharField(max_length=256)
    album_title = models.CharField(max_length=512)
    genre = models.CharField(max_length=128)
    album_logo = models.FileField()

    def get_absolute_url(self):
        return reverse('music:detail', kwargs={'pk': self.pk})

    def __str__(self):
        return self.album_title + '- ' + self.artist


class Song(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    file_type = models.CharField(max_length=16, default='')
    song_title = models.CharField(max_length=256)
    is_favorite = models.BooleanField(default=False)
    song_file = models.FileField(null=False,
                                 blank=True,
                                 validators=[FileExtensionValidator(allowed_extensions=SONG_FILE_EXTENSION)])

    def get_absolute_url(self):
        return reverse('music:detail', kwargs={'pk': self.album_id})  # Well done!

    def __str__(self):
        return self.song_title
