from flask import Flask, request, redirect, url_for, render_template, flash, session, jsonify, send_from_directory

from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager


import sys
import datetime
import os
import csv
import re
#import uuid
#from dateutil.relativedelta import relativedelta

from models import db, User
from secret import key, flask_secret, jwt_secret


#flask and alchemy config
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = key
app.config['SECRET_KEY'] = flask_secret
app.config['JWT_SECRET_KEY'] = jwt_secret
app.config['UPLOAD_FOLDER'] = "/uploads"

jwt = JWTManager(app)
db.init_app(app)



@jwt.user_identity_loader
def user_identity_lookup(user):
    return user.id


@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()


@app.route("/login", methods=["GET","POST"])
def login():
	return render_template('login.html')
	

@app.route("/authenticate", methods=["POST"])
def authenticate():
    username = request.form.get("username", None)
    password = request.form.get("password", None)

    user = User.query.filter_by(username=username).one_or_none()
    if not user or not user.check_password(password):
        return jsonify("Неверное имя пользователя или пароль!"), 401

    # Notice that we are passing in the actual sqlalchemy user object here
    access_token = create_access_token(identity=user)
    return jsonify(access_token=access_token)

