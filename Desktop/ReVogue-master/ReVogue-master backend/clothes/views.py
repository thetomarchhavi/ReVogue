from django.shortcuts import render, redirect
from .models import Cloth, User
from .forms import ClothForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout

@login_required
def create_cloth(request):
    if request.method == 'POST':
        form = ClothForm(request.POST)
        if form.is_valid():
            cloth = form.save(commit=False)
            cloth.user = request.user
            cloth.image = request.FILES['image']
            cloth.save()
            return redirect('list_clothes')
    else:
        form = ClothForm()
    
    return render(request, 'create_cloth.html', {'form': form})

@login_required
def list_clothes(request):
    clothes = Cloth.objects.filter(user=request.user)
    return render(request, 'list_clothes.html', {'clothes': clothes})

def home(request):
    return render(request, 'home.html')

def signup(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')
        name = request.POST.get('name')
        most_bought_brand = request.POST.get('most_bought_brand')
        most_bought_genre = request.POST.get('most_bought_genre')
        most_bought_colour = request.POST.get('most_bought_colour')
        most_visited_website = request.POST.get('most_visited_website')
        newuser = User.objects.create_user(username=username, password=password, email=email, name=name, most_bought_brand=most_bought_brand,
                                           most_bought_colour=most_bought_colour, most_bought_genre=most_bought_genre,
                                           most_visited_website=most_visited_website)
        newuser.save()
        return redirect('login')
    return render(request, 'signup.html')


def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard')
        else:
            return render(request, 'login.html')
    # GET REQUEST
    return render(request, 'login.html')

@login_required
def dashboard(request):
    current_user = request.user.username
    context = {'username': current_user}
    return render(request, 'dashboard.html', context)

def compare_clothes(request):
    cloth1 = Cloth.objects.get(id=request.POST.get('cloth1'))
    cloth2 = Cloth.objects.get(id=request.POST.get('cloth2'))

    context = {
        'cloth1': cloth1,
        'cloth2': cloth2,
    }

    return render(request, 'compare_clothes.html', context)

def select_clothes(request):
    clothes = Cloth.objects.all()
    context = {
        'clothes': clothes,
    }
    return render(request, 'select_clothes.html', context)
