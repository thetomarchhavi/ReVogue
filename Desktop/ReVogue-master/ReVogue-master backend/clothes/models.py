from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils.translation import gettext_lazy as _

class CustomUserManager(BaseUserManager):

    def create_user(self, username, email, password, **extra_fields):
        if not email:
            raise ValueError(_("The Email field must be set"))
        if not password:
            raise ValueError(_("User must have a password"))
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, username, email, password, **extra_fields):
        if not password:
            raise ValueError(_("User must have a password"))
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractUser):
    name = models.CharField(max_length=100)
    frequency_in_a_month = models.CharField(max_length=10)
    most_bought_brand = models.CharField(max_length=100)
    most_bought_genre = models.CharField(max_length=100)
    most_bought_colour = models.CharField(max_length=100)
    most_visited_website = models.CharField(max_length=100)

    REQUIRED_FIELDS = ['name', 'email']

    objects = CustomUserManager()

    def __str__(self):
        return self.name
    
class Cloth(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    brand_name = models.CharField(max_length=255)
    description = models.TextField()
    genre = models.CharField(max_length=100)
    colour = models.CharField(max_length=100)
    keywords = models.CharField(max_length=255)
    image = models.ImageField()

    def __str__(self):
        return self.brand_name
    
    class Meta:
        verbose_name_plural = "All Clothes"
