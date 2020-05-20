from rest_framework import serializers
from .models import Tea

class TeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tea
        fields = "__all__"

class TeaListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tea
        fields = ["id","name","price","description","created_at","image_url"]
