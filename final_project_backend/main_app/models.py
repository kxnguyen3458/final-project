from django.db import models


class FavoriteMovieModel(models.Model):
    name = models.CharField(max_length=255)
    genre = models.CharField(max_length=255)
    rating = models.IntegerField()
