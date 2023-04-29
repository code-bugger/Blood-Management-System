from rest_framework.serializers import ModelSerializer
from .models import Doner


class DonerSerializer(ModelSerializer):
    class Meta:
        model = Doner
        fields = '__all__'