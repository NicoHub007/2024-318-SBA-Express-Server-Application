const React = require('react');
const DefaultLayout = require('../layouts/default');

class Show extends React.Component {
    render() {
        const { vegetables } = this.props;
        return (
            <DefaultLayout title={`Details of ${vegetables.name}`}>
                <h1>{vegetables.name}</h1>
                <p>Fresh: {vegetables.isItFresh ? "Yes" : "No"}</p>
                <img src={vegetables.image} alt={vegetables.name} />
                <a href="/api/vegetables">Back to Vegetables</a>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
