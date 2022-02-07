const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions.js')

test('equal two',() => {
    expect(returnTwo()).toEqual(2)
})

test('greeting test', () => {
    expect(greeting('James')).toEqual('Hello, James.')

    expect(greeting('Jill')).toEqual('Hello, Jill.')
})

test('add two number', () => {
    expect(add(1,2)).toEqual(3)

    expect(add(5,9)).toEqual(14)
})


describe('Math functions', () => {
    test('add', () => {
        expect(add(10,5)).toEqual(15)
    })

    test('multiply', () => {
        expect(multiply(10,5)).toEqual(50)
    })

    test('divide', () => {
        expect(divide(10,5)).toEqual(2)
    })

    test('subtract', () => {
        expect(subtract(10,5)).toEqual(5)
    })
})