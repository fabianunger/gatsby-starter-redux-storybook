import React from 'react';
import { add, substract } from '../../_store/state_count/countActions'
import { connect } from 'react-redux'
import { CounterWrapper, Input,Button } from './index.style';

function Counter(props) {
    const { add, substract, amount } = props
    return (
        <CounterWrapper>
            <Button onClick={() => substract(1)}>
                -
            </Button>
            <Input type="number" disabled value={amount}/>
            <Button onClick={() => add(1)}>
                +
            </Button>
        </CounterWrapper>)
}

Counter.propTypes = {}

const mapStateToProps = (state) => ({
    amount: state.count.amount,
})
const mapDispatchToProps = (dispatch) => ({
    add: (productCode) => dispatch(add(productCode)),
    substract: (product) => dispatch(substract(product)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
