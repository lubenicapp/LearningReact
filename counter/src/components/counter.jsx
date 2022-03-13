import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontSize: 18,
        color: 'black'
    };


    render() { 
        return (
            <React.Fragment>
                <div>
                    <span 
                    style={this.styles} 
                    className={this.getAlertClasses()}> 
                    {this.formatCount()} 
                    </span>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className = "btn btn-danger mx-4">Delete</button>

                </div>

            </React.Fragment>
        );
    }

    getAlertClasses() {
        let classes = "badge m-2 ";
        classes += (this.props.counter.value === 0) ? "alert-warning" : "alert-primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}

 
export default Counter;
