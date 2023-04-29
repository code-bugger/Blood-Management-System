from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Doner
from .serializers import DonerSerializer
# Create your views here.

@api_view(['GET'])
def getDatas(request):
    model=Doner.objects.all()
    serializer=DonerSerializer(model,many=True)
    return Response(serializer.data)



@api_view(['POST'])
def createDoner(request):
    serializer = DonerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    

@api_view(['PUT'])
def updateDoner(request, pk):
    data = request.data
    model = Doner.objects.get(id=pk)
    serializer = DonerSerializer(instance=model, data=data)

    if serializer.is_valid():
       serializer.save()
    return Response(serializer.data)


# @api_view(['GET'])
# def getData(request,pk):
#     model=Doner.objects.get(id=pk)
#     serializer=DonerSerializer(model,many=False)
#     return Response(serializer.data)


@api_view(['DELETE'])
def deleteDoner(request, pk):
    data = Doner.objects.get(id=pk)
    data.delete()
    return Response('Note was deleted!')