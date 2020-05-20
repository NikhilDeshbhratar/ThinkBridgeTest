from .serializer import TeaSerializer
from django.http import JsonResponse
from rest_framework.exceptions import ParseError
import json

def create_update_tea(request,*extra):
    data = request.data
    serializer = TeaSerializer(data=data,*extra)
    if serializer.is_valid():
        serializer.save()
        return serializer.data
    else:
        raise ParseError(serializer.errors)
