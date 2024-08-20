from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.dialects.postgresql import Insert
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash
import psycopg2
import json
import uuid
import datetime


db = SQLAlchemy()
#test

#User class implementation
class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(50), unique = True)
    password_hash = db.Column(db.String())

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    @staticmethod
    def get_by_username(username):
        return User.query.filter_by(username=username).first()

    @staticmethod
    def get_by_id(id):
        return User.query.get(int(id))

    def __repr__(self):
        return f"User {self.username}"


class Project(db.Model):
    __tablename__ = 'projects'
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String, unique = True, nullable=False)




class ProjectImages(db.Model):
    __tablename = 'project_images'
    id = db.Column(db.Integer, primary_key = True)
    filename = db.Column(db.String, unique = True, nullable=False)
    project_title = db.Column(db.String, db.ForeignKey('projects.title',ondelete='CASCADE'),nullable=False)
    cover = db.Column(db.Boolean, default=False)

    project = relationship('Project', backref='project_images', passive_deletes=True)

if __name__ == '__main__':
    db.create_all()
