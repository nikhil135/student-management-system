from django.contrib import admin
from django.contrib.auth.models import User, Group
from django.contrib.auth.admin import UserAdmin, GroupAdmin
from publication.models import Faculty, Publication, Student

class AuthorFaculty(admin.ModelAdmin):
     list_display = ['get_name']
     def get_name(self, obj):
        return obj.user.username
     get_name.admin_order_field  = 'user'
     get_name.short_description = 'Faculty Name'
     
class AuthorPublication(admin.ModelAdmin):
     list_display = ['title']
class AuthorStudent(admin.ModelAdmin):
     list_display = ['name']

admin.site.site_header  =  "Student Publication Administration"  
admin.site.site_title  =  "Student Publications"
admin.site.index_title  =  "Student Publications"

# admin.site.register(User, UserAdmin)
# admin.site.register(Group, GroupAdmin)
admin.site.register(Faculty, AuthorFaculty)
admin.site.register(Publication, AuthorPublication)
admin.site.register(Student, AuthorStudent)

