import React from 'react';
import { EmpConsumer } from '../provider/provider';
class Dummy extends React.Component {
    render() {
        return (
            <EmpConsumer>{employee => (
                <div>{employee.employId}</div>
            )}
            </EmpConsumer>

        )
    }
}
export default Dummy;