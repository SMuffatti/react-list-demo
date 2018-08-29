import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Thoughts</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.doggieData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.thoughts}</td>
                <td><button onClick={() => props.removeDog(index)}>Delete</button></td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}


class Table extends Component {
    render() {
        const { doggieData, removeDog } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody
                     doggieData={doggieData}
                     removeDog={removeDog}
                 />
            </table>
        )
    }
}

export default Table;
