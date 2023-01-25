from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from publication.serializers import PublicationSerializer, StudentSerializer, FacultySerializer, UserSerializer, GroupSerializer
from publication.models import Faculty, Student, Publication

class FacultyViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    permission_classes = []

class PublicationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Publication.objects.all().order_by('-created')
    serializer_class = PublicationSerializer
    permission_classes = []

class StudentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Student.objects.all().order_by('-created')
    serializer_class = StudentSerializer
    permission_classes = []

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = []


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = []
