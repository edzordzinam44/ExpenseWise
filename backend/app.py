from flask import Flask
from api.routes import ai_routes
from config.settings import Config

app = Flask(__name__)
app.register_blueprint(ai_routes, url_prefix='/api/ai')

if __name__ == '__main__':
    app.run(debug=Config.DEBUG)