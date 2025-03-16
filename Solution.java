
import java.util.HashMap;
import java.util.Map;

public class Spreadsheet {

    private static final int EMPTY_CELL = 0;
    private final Map<String, Integer> cellsToValues;

    public Spreadsheet(int rows) {
        cellsToValues = new HashMap<>();
    }

    public void setCell(String cell, int value) {
        cellsToValues.put(cell, value);
    }

    public void resetCell(String cell) {
        cellsToValues.remove(cell);
    }

    public int getValue(String formula) {
        int indexSecondOperator = formula.indexOf('+');
        int firstValue = extractValue(formula.substring(1, indexSecondOperator));
        int secondValue = extractValue(formula.substring(indexSecondOperator + 1));
        return firstValue + secondValue;
    }

    private int extractValue(String operand) {
        if (Character.isLetter(operand.charAt(0))) {
            return cellsToValues.getOrDefault(operand, EMPTY_CELL);
        }
        return Integer.parseInt(operand);
    }
}
