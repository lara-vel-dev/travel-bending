from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# CORS config
CORS(app, resources={r'/api/*':{
    'origins':'localhost:3000', 
    'methods':['GET', 'POST'], 
    'allow_headers': ['content-type']
}})

@app.route('/')
def hello_world():
    pass

if __name__ == '__main__':
    app.run()