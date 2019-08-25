import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 1, name: 'BPM Solution Doc', email: 'chandra@email.com' },
            { id: 2, name: 'RFS solution doc', email: 'siva@email.com' },
            { id: 3, name: 'Aadith', email: 'aadith@email.com' },
            { id: 4, name: 'Roshan', email: 'roshan@email.com' }
         ]
      }
   }

   renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, email } = student //destructuring
       return (
          <tr key={index}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }

 render() {
    return (
       <div className='table-margin'>
          <table className='students'>
             <tbody>
             <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}

export default Table //exporting a component make it reusable and this is the beauty of react