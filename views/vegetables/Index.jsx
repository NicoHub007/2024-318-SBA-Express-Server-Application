const React = require('react');
const DefaultLayout = require('../layouts/default');

class Index extends React.Component {
    render() {
        const { vegetables } = this.props;
        return (
            <DefaultLayout title="Vegetables Inventory">
                <ul>
                    {vegetables.map((vegetable, index) => (
                        <li key={index}>
                            <img src={vegetable.image} alt={vegetable.name} />
                            <h2>{vegetable.name}</h2>
                            <a href={`/api/vegetables/${index}`}>Details</a> |
                            <a href={`/api/vegetables/${index}/edit/`}>Edit</a>
                            <form action={`/api/vegetables/${index}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                        </li>
                    ))}
                </ul>
                <a href="/api/vegetables/new">Add New Vegetable</a>
            </DefaultLayout>
        );
    }
}

module.exports = Index;
