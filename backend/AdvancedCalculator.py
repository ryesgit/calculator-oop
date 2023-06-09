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

    def tan(self, number) -> None:
        self.result = math.tan(number)

    def square(self, number) -> None:
        self.result = math.pow(number, 2)

    def square_root(self, number) -> None:
        self.result = math.sqrt(number)

    def log(self, number, base) -> None:
        self.result = math.log(number, base)

    def ln(self, number) -> None:
        self.result = math.log10(number)

    def get_result(self) -> str:
        return f"{self.result} is the result."
