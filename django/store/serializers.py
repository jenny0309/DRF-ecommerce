from rest_framework import serializers

from .models import Product, ProductImage


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductImage
        fields = ["id", "image", "alt_text"]


class ProductSerializer(serializers.ModelSerializer):
    product_image = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        # data sent to the frontend
        fields = ["id", "title", "description", "regular_price", "slug", "product_image"]
