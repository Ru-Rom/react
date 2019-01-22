/*

2. Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади
(можете выбрать какую то конкретную фигуру, а можете, основываясь на переданных параметрах, 
выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) 
и возвращать объект вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры, для которой вычислялась площадь, input - входные параметры, по которым было произведено вычисление

*/

const calculateArea = () => {
    let x, y, r, result = {};
    let pi = 3.141592653589793238462643383279502884197169399375105820;
    let figure = prompt('circle or square?');
    switch (figure) {
        case 'square':
            x = prompt('Длина: ');
            y = prompt('Ширина: ');
            result.area = x * y;
            result.figure = figure;
            result.input = {
                x: x,
                y: y
            }
            document.write('Площадь прямоугольника: ' + result.area);
            return result;

        case 'circle':
            r = prompt('Радиус: ');
            result.area = r * r * pi;
            result.figure = figure;
            result.input = {
                r: r
            }
            document.write('Площадь круга: ' + result.area);
            return result;

        default:
            document.write('Вы ввели что то не то...введите circle либо square');
    }
};

console.log(calculateArea());