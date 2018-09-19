from rest_framework import permissions

class IsAdmin(permissions.BasePermission):
	"""custom permission class to allow only admin user to edit see contract information"""

	def has_admin_permission(self, request, view, obj):
		
		"""return True if the urrent user is an admin"""
		return user.is_staff
		