import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        dogs: []
    }

    removeDog = index => {
        const { dogs } = this.state

        this.setState({
            dogs: dogs.filter((dog, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = dog => {
        this.setState({dogs: [...this.state.dogs, dog]})
    }

    render() {
        return (
            <div className="container">
                <Table
                    doggieData={this.state.dogs}
                    removeDog={this.removeDog}
                />
            <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App
