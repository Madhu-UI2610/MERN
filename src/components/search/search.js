import React from 'react';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchterm: ""
        }
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <input value = {this.props.value}  onChange={this.props.searchFn}></input>
            </div>
        )
    }
}
export default Search


