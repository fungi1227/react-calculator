import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            one: "",
            two: "",
            total: ""
        }
    }

    clearForm() {
        this.setState({
            one: "",
            two: "",
            total: ""
        });
    }

    onChange = (propertyName, value) => {
        this.setState({
            [propertyName]: value
        });
    }

    // handleChange = (event) => {
    //     var id = event.target.id;
    //     switch (id) {
    //         case "one":
    //             this.setState({
    //                 one: Number(event.target.value),
    //             });
    //             break;
    //         default:
    //             this.setState({
    //                 two: Number(event.target.value),
    //             });
    //             break;
    //     }
    // }

    add = () => {
        this.setState({
            total: Number(this.state.one) + Number(this.state.two)
        });
    }

    subtract = () => {
        this.setState({
            total: Number(this.state.one) - Number(this.state.two)
        });
    }

    isFormValid = () => {
        const { one, two } = this.state;
        console.log("one", this.state.one);
        console.log("two", this.state.two);
        const len1 = one.length > 0;
        console.log("len1", len1);
        const len2 = two.length > 0;
        console.log("len2", len2);
        const isANum1 = !isNaN(Number(one));
        console.log("isANum1", isANum1);
        const isANum2 = !isNaN(Number(two));
        console.log("isANum2", isANum2);
        const isValid = len1 && isANum1 && len2 && isANum2;
        console.log("isValid", isValid);
        return isValid;
    }

    render() {
        const {one, two} = this.state;
        return (
            <div>
                <div>
                    <label htmlFor="one">1st #</label>
                    <input 
                        type="number" 
                        id="one" 
                        placeholder="Enter a number"
                        value={one}
                        onChange={(event) => this.onChange("one", event.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="two">2nd #</label>
                    <input 
                        type="number" 
                        id="two" 
                        placeholder="Enter a number"
                        value={two}
                        onChange={(event) => this.onChange("two", event.target.value)}
                    ></input>
                </div>
                <br />
                <div>
                    <button onClick={() => this.add()} disabled={!this.isFormValid()}>Add</button>
                    <button onClick={() => this.subtract()} disabled={!this.isFormValid()}>Subtract</button>
                    <button onClick={() => this.clearForm()}>Clear</button>
                </div>
                { this.state.total && <div><span>Total: </span><span>{this.state.total}</span></div> }
            </div>
        );
    }
}

export default Calculator;