'use strict';

/**
 * Функция разделяет число на разряды
 * @param {int} num [0, 999] - Число, которое разобьется на разряды.
 * @returns {Object} Объект с разрядами числа или пустой объект в случае ошибки.
 */
function getDigitsOfNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Значение аргумента должно быть целым числом в диапазоне [0 .. 999].');
        return {};
    }

    return {
        units: num % 10,
        hundereds: Math.floor(num / 100),
        tens: Math.floor(num / 10) % 10,
    };
}

