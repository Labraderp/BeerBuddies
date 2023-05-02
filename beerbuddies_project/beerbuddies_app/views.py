from django.shortcuts import render, HttpResponse

# Create your views here.

def index(request):
    print('home!')
    theIndex = open('static/index.html').read()
    response = HttpResponse(theIndex)
    return HttpResponse(response)
