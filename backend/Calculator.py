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
2. Create methods (solve, clear, get result, get name, set first and second number)
3. Look out for errors!

'''

class Calculator:
    def __init__(self, name:str) -> None:
        self.name = name
        self.operation:str = ''
        self.result:float = 0
        self.first_num:float = 0
        self.second_num:float = 0