
class Spreadsheet {

    static #EMPTY_CELL = 0;
    static #ASCII_ZERO = 48;
    #cellsToValues;

    /**
     * @param {number} rows
     */
    constructor(rows) {
        this.#cellsToValues = new Map();
    }

    /** 
     * @param {string} cell 
     * @param {number} value
     * @return {void}
     */
    setCell(cell, value) {
        this.#cellsToValues.set(cell, value);
    }

    /** 
     * @param {string} cell
     * @return {void}
     */
    resetCell(cell) {
        this.#cellsToValues.delete(cell);
    }

    /** 
     * @param {string} formula
     * @return {number}
     */
    getValue(formula) {
        const indexSecondOperator = formula.indexOf('+');
        const firstValue = this.#extractValue(formula.substring(1, indexSecondOperator));
        const secondValue = this.#extractValue(formula.substring(indexSecondOperator + 1));
        return firstValue + secondValue;
    }

    /** 
     * @param {string} operand
     * @return {number}
     */
    #extractValue(operand) {
        if (/[A-Za-z]/.test(operand.charAt(0))) {
            return this.#cellsToValues.has(operand) ? this.#cellsToValues.get(operand) : Spreadsheet.#EMPTY_CELL;
        }
        return Number(operand);
    }
}
