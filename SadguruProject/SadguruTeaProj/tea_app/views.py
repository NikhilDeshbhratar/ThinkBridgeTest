from django.shortcuts import render
from rest_framework import viewsets
from .models import Tea
from .serializer import TeaSerializer,TeaListSerializer
from django.http import JsonResponse
import ast
from rest_framework.exceptions import ParseError
from .service import create_update_tea
from rest_framework.decorators import action
from django.shortcuts import render

def home(request):
    return render(request,'index.html')

# Create your views here.
class TeaViewSet(viewsets.ModelViewSet):
    queryset = Tea.objects.all()
    serializer_class = TeaSerializer

    def list(self,request):
        queryset = Tea.objects.filter().order_by("-created_at")
        serializer = TeaListSerializer(queryset,many=True)
        return JsonResponse({
            "data":serializer.data
        })

    def create(self,request):
        data = create_update_tea(request)
        return JsonResponse({
            "data":data,
            "message":"Tea item created succesfully"
        })       

    def update(self,request,pk):
        try:
            user = Tea.objects.get(id=int(pk))
        except:
            raise ParseError("Tea item not found")
        data = create_update_tea(request,user)
        return JsonResponse({
            "data":data,
            "message":"Tea item updated succesfully"
        }) 

    def retrieve(self,request,pk):
        try:
            user = Tea.objects.get(id=pk)
        except:
            raise ParseError("User not found")
        serializer = TeaSerializer(user)
        return JsonResponse({
            "data":serializer.data,
            "message":"User retrieved succesfully"
        }) 
    