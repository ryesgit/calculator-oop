'''

filename: Calculator.py

This module contains the Calculator class.
Pass these as parameters to the constructor:
- First number
- Second number
- Operation register
- Result register
- Calculator name

'''

# Pseudocode
'''

1. Create constructor (Calculator name, first number, second number, operation register, result register)
2. Create methods (solve, clear, get result, get name, set first and second number, calculate)
3. Look out for errors!

'''

class Calculator:
    def __init__(self, name:str) -> None:
        self.name = name
        self.operation:str = ''
        self.result:float = 0
        self.first_num:float = 0
        self.second_num:float = 0

    def solve(self) -> None:
        # Calculates given the first number, second number, and the operation
        # Throws error if one of them is missing, an incorrect value, or operation is not supported!
        result = self.__calculate()
        self.result = result

    def __calculate(self) -> None:
        # If one of the arguments is missing, throw an error
        if not(self.first_num and self.second_num and self.operation):
            raise NameError('Uh oh! Some of the arguments is missing.')
        try:
            self.first_num = float(self.first_num)
            self.second_num = float(self.second_num)
        except ValueError:
            raise ValueError("You must input numbers!")
        match self.operation:
            case 'add':
                return self.first_num + self.second_num
            case 'subtract':
                return self.first_num - self.second_num
            case 'multiply':
                return self.first_num * self.second_num
            case 'divide':
                try:
                    return self.first_num / self.second_num
                except ZeroDivisionError:
                    raise ZeroDivisionError("You are not allowed to divide by zero. Sorry!")
            case _:
                raise ValueError("Operation is not supported.")
            
    def set_number(self, number, position) -> None:

        try:
            self.first_num = float(self.first_num)
            self.second_num = float(self.second_num)
        except ValueError:
            raise ValueError("Parameter must be a floating point number or convertible to one.")
        match position:
            case 0:
                self.first_num = number
            case 1:
                self.second_num = number
            case _:
                raise ValueError("Illegal positioning. To change first number, use 0 as position, or 1 for second number")
