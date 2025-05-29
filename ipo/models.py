from django.db import models

class IPO(models.Model):
    company_logo = models.URLField()
    company_name = models.CharField(max_length=100)
    price_band = models.CharField(max_length=50)
    open_date = models.DateField()
    close_date = models.DateField()
    issue_size = models.CharField(max_length=100)
    issue_type = models.CharField(max_length=50)
    listing_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=50)
    ipo_price = models.FloatField()
    listing_price = models.FloatField()
    listing_gain = models.FloatField()
    cmp = models.FloatField()  # Current Market Price
    current_return = models.FloatField()
    rhp_pdf = models.URLField()
    drhp_pdf = models.URLField()

    def __str__(self):
        return self.company_name

