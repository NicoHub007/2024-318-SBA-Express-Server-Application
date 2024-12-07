const React = require('react');

class Edit extends React.Component {
    render() {
        return (
            <form action={`/api/meats/${this.props.id}?_method=PUT`} method='POST'>
                Name: <input type='text' name='name' defaultValue={this.props.meat.name} /> <br />
                Cut: <input type='text' name='cut' defaultValue={this.props.meat.cut} /> <br />
                Quality: <input type='text' name='quality' defaultValue={this.props.meat.quality} /> <br />
                Is It Fresh:
                {this.props.meat.isItFresh ? <input type='checkbox' name='isItFresh' defaultChecked /> : < input type='checkbox' name='readyToEat' />}<br />
                <input type='submit' name='' value='Edit Meat' />
            </form>
        )
    }
}

module.exports = Edit;