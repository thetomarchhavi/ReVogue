from django.contrib import admin

# Register your models here.
from .models import User, Cloth

class CLothAdmin(admin.ModelAdmin):
    list_display = ['brand_name', 'genre', 'description']

admin.site.register(Cloth, CLothAdmin)
admin.site.register(User)