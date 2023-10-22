from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_cloth, name='create_cloth'),
    path('list/', views.list_clothes, name='list_clothes'),
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup, name='signup'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('compare/', views.compare_clothes, name='compare'),
    path('', views.home, name='home'),
    path('select-clothes/', views.select_clothes, name='select_clothes'),
]
