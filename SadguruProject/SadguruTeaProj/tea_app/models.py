from django.db import models
import datetime
from PIL import Image
# Create your models here.

def upload_path(instance, filname):
    return '/'.join(['media', str(instance.title), filname])


class Tea(models.Model):
    name = models.CharField(max_length = 50)
    price = models.FloatField(default=100)
    description = models.TextField(default="")
    created_at = models.DateTimeField(default=datetime.datetime.now())
    image = models.ImageField(upload_to=upload_path,null=True,blank=True)

    @property
    def image_url(self):
        invoice_url = self.image.url if self.image else None
        return invoice_url

    def __str__(self):
        return self.name