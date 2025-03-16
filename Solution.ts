
class Spreadsheet {

    private static EMPTY_CELL = 0;
    private static ASCII_ZERO = 48;
    private cellsToValues: Map<string, number>;

    constructor(rows: number) {
        this.cellsToValues = new Map();
    }

    setCell(cell: string, value: number): void {
        this.cellsToValues.set(cell, value);
    }

    resetCell(cell: string): void {
        this.cellsToValues.delete(cell);
    }

    getValue(formula: string): number {
        const indexSecondOperator = formula.indexOf('+');
        const firstValue = this.extractValue(formula.substring(1, indexSecondOperator));
        const secondValue = this.extractValue(formula.substring(indexSecondOperator + 1));
        return firstValue + secondValue;
    }

    private extractValue(operand: string): number {
        if (/[A-Za-z]/.test(operand.charAt(0))) {
            return this.cellsToValues.has(operand) ? this.cellsToValues.get(operand) : Spreadsheet.EMPTY_CELL;
        }
        return Number(operand);
    }
}
