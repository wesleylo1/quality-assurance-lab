const { returnTwo, greeting, add } = require('./functions.js')

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