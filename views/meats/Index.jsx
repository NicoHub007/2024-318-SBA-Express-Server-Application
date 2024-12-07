const React = require('react');
const DefaultLayout = require('../layouts/default');

class Index extends React.Component {
    render() {
        const { meats } = this.props;
        return (
            <DefaultLayout title="Meats Inventory">
                <ul>
                    {meats.map((meat, index) => (
                        <li key={index}>
                            <img src={meat.image} alt={`${meat.name} ${meat.cut}`} />
                            <h2>{`${meat.name} ${meat.cut} - ${meat.quality} grade`}</h2>
                            <a href={`/api/meats/${index}`}>Details</a> |
                            <a href={`/api/meats/${index}/edit/`}>Edit</a>
                            <form action={`/api/meats/${index}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                        </li>
                    ))}
                </ul>
                <a href="/api/meats/new">Add New Meat</a>
            </DefaultLayout>
        );
    }
}

module.exports = Index;
