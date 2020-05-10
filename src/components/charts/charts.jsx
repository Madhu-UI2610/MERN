import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Axios from 'axios';



export default class Charts extends React.Component {
    state = {
        reload: false
    }
    contractors = [];
    data = {
        labels: [
            '< 30',
            '30 - 50',
            '> 50'
        ],
        datasets: [{
            data: [0, 0, 0],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };
    constructor() {
        super();
        Axios.get("http://localhost:3001/contractor/contractor").then(data => {
            console.log(data);
            this.contractors = data.data.data;
            this.setState({ reload: true })
        })
    }
    displayName = 'DoughnutExample';
    assignData = () => {
        let newData = this.data.datasets[0].data;

        for (let i = 0; i < this.contractors.length; i++) {
            if (this.contractors[i].Age < 30) {
                newData[0] += 1
            }
            else if (this.contractors[i].Age > 50) {
                newData[2] += 1
            }
            else {
                newData[1] += 1
            }
        }
        console.log(newData);
        this.data.datasets[0].data = newData;
        console.log(this.data.datasets[0].data);
    }
    render() {
        this.assignData();
        return (
            <div>
                <h2>Contractor details based on age</h2>
                <Doughnut data={this.data} />
            </div>
        );
    }
};