from django.shortcuts import render, HttpResponse
from django.http import HttpRequest
from django.core.serializers import serialize
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from .models import *
from django.core.serializers import serialize
import json
# import requests

# JSON Response format
# success: True or success: False for checking CRUD actions
#       if "success: True", use "note: comment" to provide feedback of what was accomplished
#       if "success: False", use "reason: error" to provide feedback of error


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

    if 'super' in request.data:
        super_user = request.data['super']

    if 'staff' in request.data:
        staff = request.data['staff']

    if email == '' or password == '' or handle == '':
        return JsonResponse({"success": False, "reason": "empty field"})

    try:
        new_user = App_User.objects.create_user(
            username=handle, handle=handle, email=email, password=password)
        new_user.save()
        return JsonResponse({"success": True, "note": f"{handle} has been created"})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False, "reason": "already signed up"})


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
            return JsonResponse({"success": True, "note": f"{handle} has logged in"})
        except Exception as e:
            print(e)
            return JsonResponse({"success": False, "reason": e})
    print('other')
    return JsonResponse({"success": False, "reason": "user null/inactive error"})


@api_view(["GET"])
def curr_user(request):
    if request.user.is_authenticated:
        print(request.user)
        user_info = serialize(
            "json", [request.user], fields=['handle', 'email', "token_amount"])
        user_info_workable = json.loads(user_info)
        return JsonResponse({"curr_user": user_info_workable[0]})
    else:
        return JsonResponse({"curr_user": None})


@api_view(['POST'])
def user_sign_out(request):
    try:
        logout(request)
        return JsonResponse({"success": True, "note": "user has logged out"})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False, "reason": e})


@api_view(["POST"])
def increment_token(request):
    try:
        user_handle = request.data['user_handle']
        user = App_User.objects.get(handle=user_handle)
        # print("User:", user)

        user.token_amount += 1
        user.save()

        return JsonResponse({"success": True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False, "reason": e})


@api_view(["POST"])
def decrement_token(request):
    try:
        user_handle = request.data['user_handle']
        user = App_User.objects.get(handle=user_handle)

        user.token_amount -= 1
        user.save()

        return JsonResponse({"success": True})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False, "reason": e})


def restaurant_index(request: HttpRequest) -> HttpResponse:
    restaurants = Restaurant.objects.all()
    for restaurant in restaurants:
        rating = RestaurantRating.objects.filter(
            restaurant=restaurant, user=request.user).first()
        restaurant.user_rating = rating.rating if rating else 0
    return render(request, "index.html", {"restaurants": restaurants})


def restaurant_rate(request: HttpRequest, restaurant_id: int, rating: int) -> HttpResponse:
    restaurant = restaurant.objects.get(id=restaurant_id)
    RestaurantRating.objects.filter(
        restaurant=restaurant, user=request.user).delete()
    restaurant.rating_set.create(user=request.user, rating=rating)
    return restaurant_index(request)


def beer_index(request: HttpRequest) -> HttpResponse:
    beers = Beer.objects.all()
    for beer in beers:
        rating = BeerRating.objects.filter(
            beer=beer, user=request.user).first()
        beer.user_rating = rating.rating if rating else 0
    return render(request, "index.html", {"beers": beers})


def beer_rate(request: HttpRequest, beer_id: int, rating: int) -> HttpResponse:
    beer = beer.objects.get(id=beer_id)
    RestaurantRating.objects.filter(
        beer=beer, user=request.user).delete()
    beer.rating_set.create(user=request.user, rating=rating)
    return beer_index(request)
# uncomment this code to call the api from the backend

# @api_view(["GET"])
# def getQRcode(request):
#     endpoint = f"http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100"
#     response = requests.get(endpoint)
#     print(response)
#     return HttpResponse(response)
