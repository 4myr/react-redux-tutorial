import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as counter from '../../store/actions/counter';
import * as result from '../../store/actions/result';
// import { add, decrement, deleteResult, increment, storeResult, subtract } from '../../store/actions/result';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        const domResult = [];
        for (let k in this.props.res) {
            domResult.push(<li onClick={ () => this.props.onDeleteResult(k) } key={k.id}>{this.props.res[k].value}</li>)
        }
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ () => this.props.onIncrementCounter() } />
                <CounterControl label="Decrement" clicked={ () => this.props.onDecrementCounter() } />
                <CounterControl label="Add 5" clicked={ () => this.props.onAddCounter(5) }  />
                <CounterControl label="Subtract 2" clicked={ () => this.props.onSubtractCounter(2) }  />
                <hr />
                <CounterControl label="Store" clicked={ (result) => this.props.onStoreResult(this.props.ctr) }  />
                <ul>{domResult}</ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        res: state.res.result
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(counter.increment()),
        onDecrementCounter: () => dispatch(counter.decrement()),
        onAddCounter: (value) => dispatch(counter.add(value)),
        onSubtractCounter: (value) => dispatch(counter.subtract(value)),
        onStoreResult: (res) => dispatch(result.storeResult(res)),
        onDeleteResult: (key) => dispatch(result.deleteResult(key)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);