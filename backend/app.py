from flask import Flask, jsonify, request
from flask_cors import CORS

from Calculator import Calculator

app = Flask(__name__)

CORS(app)

@app.route('/')
def hello():
    return "Hello world."

calculators = {}

@app.route('/calculator/create', methods=['POST'])
def create_calculator():
    req_body = request.json
    name = req_body.get('name')
    calculator = Calculator(name)
    # Add calculator to calculators dictionary
    calculators[name] = calculator
