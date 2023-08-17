"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/register', methods=['POST'])
def register_user():
    if request.method == 'POST':
        body = request.json
        email = body.get('email', None)
        password = body.get('password', None)

        if email is None or password is None:
            return jsonify("Bad credentials")

        else:
            salt = 1
            user = User(email=email, password=password, salt=salt)
            db.session.add(user)
            try:
                db.session.commit()
                return jsonify({"message" : "User created"}), 201
            except Exception as err:
                print(err.args)
                db.session.rollback()
                return jsonify({"message" : "f'error: {err.args}"}), 500

            
        
