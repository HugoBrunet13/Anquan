from django.db import models
#from erp import settings


class Employee(models.Model):
	first_name = models.CharField(max_length=150)
	last_name = models.CharField(max_length=150)
	age = models.IntegerField()
	address = models.TextField()
	phone =models.CharField(max_length=150)
	work_address=models.TextField()
	work_email= models.CharField(max_length=150)
	work_phone= models.CharField(max_length=150)
	public_info=models.TextField()
	department = models.CharField(max_length=150)
	job_title=models.CharField(max_length=150)
	manager=models.CharField(max_length=150)
	coach=models.CharField(max_length=150)
	working_time=models.TextField()

class Contract(models.Model):
	employee=models.ForeignKey('Employee', on_delete=models.CASCADE, related_name='contract')
	salary=models.FloatField()
	start_date=models.DateField(auto_now=False, auto_now_add=False)
	end_date=models.DateField(auto_now=False, auto_now_add=False)
	working_schedule=models.CharField(max_length=150)
	scheduled_pay=models.CharField(max_length=150)

	# class Meta:
	# 	permissions = (
	# 		("view_contract", "Can see contract")
	# 	)



