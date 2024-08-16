from main import app

if __name__ == "__main__":
    db.init_app(app)
    app.run()
