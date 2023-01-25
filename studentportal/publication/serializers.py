from django.contrib.auth.models import User, Group
from rest_framework import serializers
from publication.models import Faculty, Student, Publication

class BulkCreateSerializer(serializers.ListSerializer):
    def create(self, validated_data):
         result = [self.child.create(attrs) for attrs in validated_data]
         try:
             self.child.Meta.model.objects.bulk_create(result)
         except IntegrityError as e:
             raise ValidationError(e)
         return result
    
class FacultySerializer(serializers.HyperlinkedModelSerializer):
    def create(self, validated_data):
         instance = Faculty(**validated_data)
         if isinstance(self._kwargs["data"], dict):
             instance.save()
         return instance

    class Meta:
        model = Faculty
        fields = ['url', 'user', 'institution', 'department']
        list_serializer_class = BulkCreateSerializer

class PublicationSerializer(serializers.HyperlinkedModelSerializer):
    def create(self, validated_data):
         instance = Publication(**validated_data)
         if isinstance(self._kwargs["data"], dict):
             instance.save()
         return instance

    class Meta:
        model = Publication
        fields = ['url', 'title', 'type', 'venue', 'date', 'sponser',
                  'file', 'grant', 'faculty']
        list_serializer_class = BulkCreateSerializer

class StudentSerializer(serializers.HyperlinkedModelSerializer):
    def create(self, validated_data):
         instance = Student(**validated_data)
         if isinstance(self._kwargs["data"], dict):
             instance.save()
         return instance

    class Meta:
        model = Student
        fields = ['url', 'name', 'age', 'sex', 'phone', 'email',
                  'publication', 'award', 'patent', 'institution', 'department']
        list_serializer_class = BulkCreateSerializer

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']