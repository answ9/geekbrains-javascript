'use strict';

/*!
 * Функция складывает два аргумента
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
    return a + b;
}

/*!
 * Функция из аргумента "а" вычитает аргумент "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {
    return a - b;
}

/*!
 * Функция делит аргумента "a" на аргумент "b".
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}

/*!
 * Функция умножает два аргумента.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}

/*!
 * Функция получает два числа и осуществляет над ними математическую операцию.
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation может быть "+", "-", "/", "*".
 * @throws {Error} если передана не предусмотренная операция, то будет
 * выброшена ошибка.
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Операция " + operation + " не предусмотрена");
    }
}