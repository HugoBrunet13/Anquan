from rest_framework import serializers
from .models import *

class ContractSerializers(serializers.ModelSerializer):
	class Meta:
		model=Contract
		fields = ('salary','start_date', 'end_date', 'working_schedule', 'scheduled_pay')

class EmployeeSerializers(serializers.ModelSerializer):
	"""allow to map the model employee instance into JSON"""

	contract = ContractSerializers(many=True)

	class Meta:
		model= Employee
		fields = ('first_name','last_name', 'age', 'address', 'phone', 'work_address','work_email','work_phone','public_info', 'department','job_title','manager','coach','working_time', 'contract')

