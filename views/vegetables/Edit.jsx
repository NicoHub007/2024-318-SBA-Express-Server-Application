const React = require('react');

class Edit extends React.Component {
    render() {
        return (
            <form action={`/api/vegetables/${this.props.id}?_method=PUT`} method='POST'>
                Name: <input type='text' name='name' defaultValue={this.props.vegetable.name} /> <br />
                Color: <input type='text' name='cut' defaultValue={this.props.vegetable.color} /> <br />
                Is it Fresh:
                {this.props.meat.isItFresh ? <input type='checkbox' name='isItFresh' defaultChecked /> : < input type='checkbox' name='readyToEat' />}<br />
                <input type='submit' name='' value='Edit Vegetable' />
            </form>
        )
    }
}

module.exports = Edit;