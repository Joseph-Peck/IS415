# Generated by Django 3.0.3 on 2020-04-10 04:24

import api.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='COVID',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.TextField()),
                ('current_amount', models.DecimalField(decimal_places=2, max_digits=20)),
                ('goal', models.DecimalField(decimal_places=2, max_digits=20)),
                ('donators', models.IntegerField()),
                ('days_active', models.IntegerField()),
                ('title', models.TextField()),
                ('description', models.TextField()),
                ('user_first_name', models.TextField()),
                ('user_last_name', models.TextField()),
                ('campaign_image_url', models.TextField()),
                ('campaign_hearts', models.IntegerField()),
                ('social_share_total', models.IntegerField()),
                ('location_city', models.TextField()),
                ('location_country', models.TextField()),
                ('is_charity', models.BooleanField()),
                ('quality', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Sale',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('address1', models.TextField()),
                ('address2', models.TextField(blank=True, null=True)),
                ('city', models.TextField()),
                ('state', models.TextField()),
                ('zipcode', models.TextField()),
                ('total', models.DecimalField(decimal_places=2, max_digits=10)),
                ('items', api.fields.JSONField(default=dict)),
                ('payment_intent', api.fields.JSONField(default=dict)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('description', models.TextField()),
                ('filename', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.Category')),
            ],
        ),
    ]
