import React from 'react';
const EmpContext = React.createContext();
export const EmpConsumer = EmpContext.Consumer;
class Providers extends React.Component {
    // constructor() {
    state = {
        id: "23"
    }
    // }
    render() {
        let sharedComponent = {
            employId: this.state.id
        }
        return (

            <div>
                {/* <h1>Introduction to Context API {this.state.id}</h1> */}
                <EmpContext.Provider value={sharedComponent}>{this.props.children}</EmpContext.Provider>
                
                {/* <p>It is a top-down-drilling approach.It includes providers and consumers.Provider is an object. </p> */}
            </div>
        );

    }
}

export default Providers;