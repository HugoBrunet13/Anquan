# Generated by Django 2.0 on 2018-09-18 16:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('employee_profile', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contract',
            name='id_employee',
        ),
        migrations.AddField(
            model_name='contract',
            name='employee',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='contract', to='employee_profile.Employee'),
            preserve_default=False,
        ),
    ]
