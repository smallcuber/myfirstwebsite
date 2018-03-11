from django.conf.urls import url
from . import views
from django.contrib.auth import views as auth_views

app_name = 'music'


urlpatterns = [
    # /music/
    url(r'^$', views.IndexView.as_view(), name='index'),

    # /register/
    url(r'^register/$', views.UserFormView.as_view(), name='register'),

    # /login/
    url(r'^login/$', views.LoginView.as_view(), name='login'),

    # /logout/
    url(r'^logout/$', views.LogoutView.as_view(), name='logout'),

    # /music/album_id/
    url(r'^(?P<pk>[0-9]+)/$', views.DetailView.as_view(), name='detail'),

    # /music/album/add/
    url(r'album/add/$', views.AlbumCreate.as_view(), name='album-add'),

    # /music/music/add/
    url(r'song/add/$', views.SongCreate.as_view(), name='song-add'),

    # /music/album/2/
    url(r'album/(?P<pk>[0-9]+)/$', views.AlbumUpdate.as_view(), name='album-update'),

    # /music/album/2/delete/
    url(r'album/(?P<pk>[0-9]+)/delete/$', views.AlbumDelete.as_view(), name='album-delete'),
]