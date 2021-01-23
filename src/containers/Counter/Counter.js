import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';

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
                <ul>
                    {
                        domResult
                    }
                </ul>
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
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: (value) => dispatch({type: 'ADD', value: value}),
        onSubtractCounter: (value) => dispatch({type: 'SUBTRACT', value: value}),
        onStoreResult: (result) => dispatch({type: 'STORE_RESULT', result: result}),
        onDeleteResult: (k) => dispatch({type: 'DELETE_RESULT', id: k}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);