from django.conf.urls import url,include
from tea_app.views import home

urlpatterns = [
    url(r'^.*$', home, name='home'),
]

