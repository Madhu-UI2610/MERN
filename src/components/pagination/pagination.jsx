import React from 'react';
import axios from 'axios';


class Pagination extends React.Component {
    state = {
        reload: false,
        currentPage: 1,
        recordsCount_perpage: 10
    };
    comments = [];
    constructor() {
        super();
        axios.get("https://jsonplaceholder.typicode.com/comments").then(data => {
            console.log(data);
            this.comments = data.data;
            this.setState({
                reload: !this.state.reload
            })
        })
    }
    pageDisplayRecords = () => {
        const { currentPage, recordsCount_perpage } = this.state
        for (let i = (currentPage - 1) * recordsCount_perpage; i < recordsCount_perpage * currentPage; i++) {
            // let data = this.comments
                console.log("33333",i)
            // return (
            //     <tr key={data[i].id}>
            //         <table>
            //             <tbody>
            //                 <td>{data[i].name}</td>
            //                 <td>{data[i].id}</td>
            //                 <td>{data[i].postId}</td>
            //                 <td>{data[i].body}</td>
            //                 <td>{data[i].email}</td>
            //             </tbody>
            //         </table>
            //     </tr>
            // )
        }
    }
    prevButtonClick = () => {
        this.setState({ currentPage: this.state.currentPage - 1 }, function () {
            this.pageDisplayRecords();
        })
    }
    nextbuttonClick = () => {
        this.setState({ currentPage: this.state.currentPage + 1 }, function () {
            this.pageDisplayRecords();
        })
    }
    paginationHeader = () => {
        return (
            <div>
                <button onClick={this.prevButtonClick}> prev_button </button>
                <button onClick={this.nextbuttonClick}> next_button </button>
            </div>

        )
    }
    // displayData = () => this.comments.map(each => {
    //     console.log("33333")
    //     return (
    //         <tr key={each.id}>
    //             <table>
    //                 <tbody>
    //                     <td>{each.name}</td>
    //                     <td>{each.id}</td>
    //                     <td>{each.postId}</td>
    //                     <td>{each.body}</td>
    //                     <td>{each.email}</td>
    //                 </tbody>
    //             </table>
    //         </tr>
    //     )
    // })

    render() {
        console.log(this.state)
        // let displayData = this.comments.map(each => {
        //     return (
        //         <tr key={each.id}>
        //             <td>{each.name}</td>
        //             <td>{each.id}</td>
        //             <td>{each.postId}</td>
        //             <td>{each.body}</td>
        //             <td>{each.email}</td>
        //         </tr>
        //     )
        // })
        return (
            <div>
                {this.paginationHeader()}

            </div>
        );
    }
}

export default Pagination;