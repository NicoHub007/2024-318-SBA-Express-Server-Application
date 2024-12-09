const React = require('react');
const DefaultLayout = require('../layouts/default');

class Index extends React.Component {
    render() {
        const { drinks } = this.props; 
        return (
            <DefaultLayout title="Drinks Inventory">
                <ul>
                    {drinks.map((drink, index) => (
                        <li key={index}>
                            <img src={drink.image} alt={drink.name} />
                            <h2>{drink.name}</h2>
                            <a href={`/api/drinks/${index}`}>Details</a> |
                            <a href={`/api/drinks/${index}/edit/`}>Edit</a>
                            <form action={`/api/drinks/${index}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                        </li>
                    ))}
                </ul>
                <a href="/api/drinks/new">Add New Drink</a>
            </DefaultLayout>
        );
    }
}

module.exports = Index;
