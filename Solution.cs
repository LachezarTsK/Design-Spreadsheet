
using System;
using System.Collections.Generic;

public class Spreadsheet
{
    private static readonly int EMPTY_CELL = 0;
    private readonly Dictionary<string, int>? cellsToValues;

    public Spreadsheet(int rows)
    {
        cellsToValues = new Dictionary<string, int>();
    }

    public void SetCell(string cell, int value)
    {
        if (!cellsToValues!.ContainsKey(cell))
        {
            cellsToValues!.Add(cell, value);
        }
        else
        {
            cellsToValues![cell] = value;
        }
    }

    public void ResetCell(string cell)
    {
        cellsToValues!.Remove(cell);
    }

    public int GetValue(string formula)
    {
        int indexSecondOperator = formula.IndexOf('+');
        int firstValue = ExtractValue(formula.Substring(1, indexSecondOperator - 1));
        int secondValue = ExtractValue(formula.Substring(indexSecondOperator + 1));
        return firstValue + secondValue;
    }

    private int ExtractValue(string operand)
    {
        if (char.IsLetter(operand[0]))
        {
            return cellsToValues!.GetValueOrDefault(operand, EMPTY_CELL);
        }
        return int.Parse(operand);
    }
}
