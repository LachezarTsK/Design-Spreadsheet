
class Spreadsheet(rows: Int) {

    private companion object {
        const val EMPTY_CELL = 0
    }

    private val cellsToValues = HashMap<String, Int>()

    fun setCell(cell: String, value: Int) {
        cellsToValues[cell] = value
    }

    fun resetCell(cell: String) {
        cellsToValues.remove(cell)
    }

    fun getValue(formula: String): Int {
        val indexSecondOperator = formula.indexOf('+')
        val firstValue = extractValue(formula.substring(1, indexSecondOperator))
        val secondValue = extractValue(formula.substring(indexSecondOperator + 1))
        return firstValue + secondValue
    }

    private fun extractValue(operand: String): Int {
        if (Character.isLetter(operand[0])) {
            return cellsToValues.getOrDefault(operand, EMPTY_CELL)
        }
        return operand.toInt();
    }
}
