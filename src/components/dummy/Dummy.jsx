import React from 'react';
import { EmpConsumer } from '../provider/provider';
import axios from 'axios'
class Dummy extends React.Component {
    emptyarray = [];
    constructor(props) {
        super(props);

        this.state = {
            isdataloaded: false
        }

        axios.get('http://localhost:3001/dummy/dummy').then((data) => {
            this.emptyarray = data.data.data;

            this.setState({
                isdataloaded: true
            })
        }
        )

    }
    dummyarray = () => {
        let data = (
            <React.Fragment>
                Loading ...
            </React.Fragment>
        )
        if (this.emptyarray.length > 0) {
            data = this.emptyarray.map((item, index) => {
                return <p>{item.name}</p>
            })
        }
        return data;
    }
    render() {
        return (

            <div>
                <EmpConsumer>{employee => (
                    <div>{employee.employId}</div>

                )}
                </EmpConsumer>
                <p>{this.dummyarray()}</p>
            </div>

        )
    }
}
export default Dummy;