import React, { Component } from 'react';
import Counter from './counter'


class Counters extends Component {
    state = { counters: [
        {id: 1, value: 0},
        {id: 2, value: 5},
        {id: 3, value: 10},
        {id: 4, value: 20},
    ] } 

    handleDelete = (id) =>
    {
        console.log('called e', id);
        const counters = this.state.counters.filter(c => c.id !== id);
        this.setState({counters: counters});
        
    }

    handleReset = () => 
    {
        console.log("called Reset");
        const counters = this.state.counters.map(c => {c.value=0;})
        this.setState({counters: counters});
    }

    handleIncrement = counter =>
    {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters: counters});

    }

    render() { 
        return (
            <React.Fragment>
                <div>
                    <div>
                        <button 
                            onClick = {this.handleReset}
                            className="btn btn-primary m-2">Reset</button>
                    </div>
                    {this.state.counters.map(counter => 
                    <Counter    
                            key={counter.id}
                            counter = {counter}
                            value={counter.value}
                            selected={true}
                            onIncrement={this.handleIncrement}
                            onDelete={this.handleDelete}
                    />)}
                </div>
            </React.Fragment>

        );
    }
}
 
export default Counters;