
#include <string>
#include <unordered_map>
using namespace std;

class Spreadsheet {

    static const int EMPTY_CELL = 0;
    unordered_map<string, int> cellsToValues;

public:
    Spreadsheet(int rows) {}

    void setCell(const string& cell, int value) {
        cellsToValues[cell] = value;
    }

    void resetCell(const string& cell) {
        cellsToValues.erase(cell);
    }

    int getValue(const string& formula) const {
        int indexSecondOperator = formula.find('+');
        int firstValue = extractValue(formula.substr(1, indexSecondOperator - 1));
        int secondValue = extractValue(formula.substr(indexSecondOperator + 1));
        return firstValue + secondValue;
    }

private:
    int extractValue(const string& operand) const {
        if (isalpha(operand[0])) {
            return cellsToValues.contains(operand) ? cellsToValues.at(operand) : EMPTY_CELL;
        }
        return stoi(operand);
    }
};
