const React = require('react');
const DefaultLayout = require('../layouts/default');

class Index extends React.Component {
    render() {
        const {vegetables} = this.props;
        return (
            <DefaultLayout title="Vegetables Inventory">
                <ul>
                    {vegetables.map((vegetable) => (
                        <li key={vegetable.id}>
                            <img src={vegetable.image} alt={vegetable.name} />
                            <h2>{vegetable.name}</h2>
                            <a href={`/vegetables/${vegetable.id}`}>Details</a>
                            <a href={`/vegetables/${vegetable.id}/edit`}>Edit</a>
                            <form action = {`/vegetables/${vegetable.id}?_method=DELETE`} method="POST">
                                <input type="submit" value="Delete" />
                            </form>
                        </li>
                    ))}
                </ul>
                <a href="/vegetables/new">Add a new vegetable</a>
            </DefaultLayout>
        );
    }
}

module.exports = Index;