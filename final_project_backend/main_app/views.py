from rest_framework import generics
from rest_framework.permissions import AllowAny

from .serializers import *


class MovieView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = MovieSerializer
