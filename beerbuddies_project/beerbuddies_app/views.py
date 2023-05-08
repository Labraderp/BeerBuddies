from django.shortcuts import render, HttpResponse
from django.core.serializers import serialize
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from .models import *
from django.core.serializers import serialize
import json
# Create your views here.


def index(request):
    print('home!')
    theIndex = open('static/index.html').read()
    response = HttpResponse(theIndex)
    return HttpResponse(response)


@api_view(["POST"])
def user_sign_up(request):
    email = request.data['email']
    password = request.data['password']
    handle = request.data['handle']
    super_user = False
    staff = False
    if request.data['super']:
        super_user = request.data['super']
    if request.data['staff']:
        staff = request.data['staff']
    try:
        new_user = App_User.objects.create_user(
            username=handle, handle=handle, email=email, password=password, is_superuser=super_user, is_staff=staff)
        new_user.save()
        return JsonResponse({"Success": f"{handle}, was created as a user"})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})


@api_view(["POST"])
def user_sign_in(request):
    handle = request.data['handle']
    password = request.data['password']
    print(handle, password)
    print(request._request)
    user = authenticate(username=handle, password=password)
    print(user)
    if user is not None and user.is_active:
        try:
            login(request._request, user)
            print('logged in')
            return JsonResponse({'success': True})
        except Exception as e:
            print(e)
            return JsonResponse({'success': False})
    print('other')
    return JsonResponse({'success': False})


@api_view(["GET"])
def curr_user(request):
    if request.user.is_authenticated:
        print(request.user)
        user_info = serialize(
            "json", [request.user], fields=['handle', 'email'])
        user_info_workable = json.loads(user_info)
        return JsonResponse({"user": user_info_workable[0]})
    else:
        return JsonResponse({"user": None})


@api_view(['POST'])
def user_sign_out(request):
    try:
        logout(request)
        return JsonResponse({"signout": True})
    except Exception as e:
        print(e)
        return JsonResponse({"signout": False})


@api_view(["POST"])
def user_sign_up(request):
    email = request.data['email']
    password = request.data['password']
    handle = request.data['handle']
    super_user = False
    staff = False

    if 'super' in request.data:
        super_user = request.data['super']

    if 'staff' in request.data:
        staff = request.data['staff']

    if email == '' or password == '' or handle == '':
        return JsonResponse({"signup": False, "reason": "empty_field"})

    try:
        new_user = App_User.objects.create_user(
            username=handle, handle=handle, email=email, password=password)
        new_user.save()
        return JsonResponse({"signup": True})
    except Exception as e:
        print(e)
        return JsonResponse({"signup": False, 'reason': 'already_signed_up'})
