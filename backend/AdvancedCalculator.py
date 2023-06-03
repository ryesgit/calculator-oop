'''
Inherits from Calculator class.

Aside from the basic add, subtract, divide, and multiply mechanism,
this advanced calculator can also do other arithmetic functions, such as:
values of trigonometric functions (sine, cosine, tangent),
squaring numbers, returning the square root of numbers
and lastly, performing logarithmic functions

'''
import math
from Calculator import Calculator

class AdvancedCalculator(Calculator):
    def __init__(self, name: str) -> None:
        super().__init__(name)

    def sine(self, number) -> None:
        self.result = math.sin(number)

    def cos(self, number) -> None:
        self.result = math.cos(number)