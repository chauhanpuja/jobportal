# Generated by Django 3.2.5 on 2022-01-21 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobportal', '0017_certificate'),
    ]

    operations = [
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('resume', models.FileField(default=None, max_length=250, null=True, upload_to='image')),
            ],
        ),
    ]
