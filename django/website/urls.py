
from django.contrib import admin
from django.urls import path

from website import views


app_name = 'website'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.HomeView.as_view(), name='home'),
]
