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
    calc_info = _dissect_calc_info(calculator)
    return jsonify(calc_info), 200

@app.route('/calculator')
def get_all_calculators():
    all_calculator_infos = []

    calculator:Calculator
    for calculator in calculators.values():
        calc_info = _dissect_calc_info(calculator)
        all_calculator_infos.append(calc_info)
    
    return jsonify(all_calculator_infos), 200


def _dissect_calc_info(calculator:Calculator):
    calc_info = {
        "name": calculator.get_name(),
        "first_num": calculator.get_number(0),
        "second_num": calculator.get_number(1),
        "result": calculator.get_result(),
        "operation": calculator.get_operation()
    }

    return calc_info


