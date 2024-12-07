const React = require('react');

class New extends React.Component {
    render() {
        return (
            <form action='/api/meats' method='POST'>
                Name: <input type='text' name='name' /> <br />
                Cut: <input type='text' name='cut' /> <br />
                Quality: <input type='text' name='quality' /> <br />
                Is It Fresh: <input type='checkbox' name='isItFresh' /> <br />
                <input type='submit' name='' value='Create Meat' />
            </form>
        )
    }
}

module.exports = New;