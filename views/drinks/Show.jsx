const React = require('react');
const DefaultLayout = require('../layouts/default');

class Show extends React.Component {
    render() {
        const { drink } = this.props; // 'vegetables' is replaced with 'drink'
        return (
            <DefaultLayout title={`Details of ${drink.name}`}>
                <h1>{drink.name}</h1>
                <p>Color: {drink.color}</p>
                <p>Caffeine: {drink.caffeine ? "Yes" : "No"}</p>
                <img src={drink.image} alt={drink.name} /> 
                <br /> 
                <a href="/api/drinks">  Back to Drinks</a>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
