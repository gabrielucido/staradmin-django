from django.views.generic import TemplateView


class HomeView(TemplateView):
    """Home View."""

    template_name = 'website/home.html'
