from django.shortcuts import render
from rest_framework import generics

from .models import Category, Product
from .serializers import ProductSerializer

# Create your views here.
class ProductListView(generics.ListAPIView):
    # list all products
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class Product(generics.RetrieveAPIView):
    # retrieve individual product
    lookup_field = "slug"
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
