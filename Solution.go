
package main

import (
    "strconv"
    "strings"
    "unicode"
)

const EMPTY_CELL = 0

type Spreadsheet struct {
    cellsToValues map[string]int
}

func Constructor(rows int) Spreadsheet {
    return Spreadsheet{cellsToValues: map[string]int{}}
}

func (this *Spreadsheet) SetCell(cell string, value int) {
    this.cellsToValues[cell] = value
}

func (this *Spreadsheet) ResetCell(cell string) {
    delete(this.cellsToValues, cell)
}

func (this *Spreadsheet) GetValue(formula string) int {
    indexSecondOperator := strings.Index(formula, "+")
    firstValue, _ := this.extractValue(formula[1:indexSecondOperator])
    secondValue, _ := this.extractValue(formula[indexSecondOperator + 1:])
    return firstValue + secondValue
}

func (this *Spreadsheet) extractValue(operand string) (int, error) {
    if unicode.IsLetter(rune(operand[0])) {
        return this.cellsToValues[operand], nil
    }
    return strconv.Atoi(operand)
}
