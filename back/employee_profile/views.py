from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import EmployeeSerializers
from .models import *
from .permissions import IsAdmin
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class CreateViewEmployee(generics.ListCreateAPIView):
	queryset = Employee.objects.all()
	serializer_class = EmployeeSerializers
	# authentication_classes = (SessionAuthentication, BasicAuthentication)
	# permission_classes = (IsAuthenticated, IsAdmin,)

	def perform_create(self, serializer):
		serializer.save()


class DetailsViewEmployee(generics.RetrieveUpdateDestroyAPIView):
	queryset = Employee.objects.all()
	serializer_class=EmployeeSerializers
	# authentication_classes = (SessionAuthentication, BasicAuthentication)
	# permission_classes = (IsAuthenticated, IsAdmin,)