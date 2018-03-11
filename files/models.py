from django.db import models
from datetime import datetime


class Upload(models.Model):

    # Check number of times that the page has been visited
    DownloadDocount = models.IntegerField(verbose_name="Times_Visited")

    # Unique file identifier
    FileCode = models.CharField(max_length=8, verbose_name="code")

    # Record the uploaded time
    DataTime = models.DateTimeField(default=datetime.now, verbose_name="Upload Time")

    # File storage path
    FilePath = models.CharField(max_length=64, verbose_name="Download Path")

    # File Name
    FileName = models.CharField(max_length=64, verbose_name="File Name")

    # File Size
    FileSize = models.CharField(max_length=32, verbose_name="File Size")

    # The user name of User
    FileUser = models.CharField(max_length=32, verbose_name="User Name", default="")

    class Meta:
        verbose_name = "Download"
        # de_table = "Download"

    def __str__(self):
        return self.name
