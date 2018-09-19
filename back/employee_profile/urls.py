from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *

urlpatterns = {
	url(r'^employee/$',CreateViewEmployee.as_view(), name="createVEmployee"),
	url(r'^employee/(?P<pk>[0-9]+)/$',DetailsViewEmployee.as_view(), name="details")
}

urlpatterns= format_suffix_patterns(urlpatterns)