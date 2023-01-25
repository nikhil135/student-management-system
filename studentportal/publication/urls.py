from django.urls import path, include
from rest_framework.routers import DefaultRouter
from publication import views

router = DefaultRouter()
router.register(r'students', views.StudentViewSet, 'students-detail')
router.register(r'publications', views.PublicationViewSet, 'pubs-detail')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]