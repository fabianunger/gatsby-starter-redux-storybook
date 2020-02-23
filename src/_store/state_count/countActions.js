import types from '../types'

export const add = (number) => ({
    type: types.ADD,
    number,
});
export const substract= (number) => ({
    type: types.SUBTRACT,
    number,
});
