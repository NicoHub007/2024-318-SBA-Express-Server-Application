const React = require('react');
const DefaultLayout = require('../layouts/default');

class Show extends React.Component {
    render() {
        const { meat } = this.props;
        return (
            <DefaultLayout title={`Details of ${meat.name}`}>
                <h1>{meat.name}</h1>
                <p>Cut: {meat.cut}</p>
                <p>Quality: {meat.quality}</p>
                <p>Fresh: {meat.isItFresh ? "Yes" : "No"}</p>
                <img src={meat.image} alt={meat.name} />
                <br/>
                <a href="/api/meats">Back to Meats</a>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
