import types from '../types'

export const addThis = (number) => ({
    type: types.ADD,
    number,
});
export const subsctractThis = (number) => ({
    type: types.SUBTRACT,
    number,
});
