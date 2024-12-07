const React = require('react');
const DefaultLayout = require('../layouts/default');

class Index extends React.Component {
    render() {
        const { meats } = this.props;
        return (
            <DefaultLayout title={"Meats Inventory"}>
            <ul>
                {meats.map((meat)=> (
                    <li key= {meat.id}>
                      <img src={meat.image} alt={meat.cut} />
                      <h2>The {meat.name} {meat.cut} is {meat.quality} grade.
                        <br />
                      </h2>
                      <a href={`/meats/${meat.id}`}>Details</a>
                      <a href={`/meats/${meat.id}/edit`}>Edit</a>
                      <form action={`/meats/${meat.id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE" />
                      </form>
                    </li>
                ))}
             </ul>
            <a href="/meats/new">Add New Meat</a>
            </DefaultLayout>
        );
    }
}

module.exports = Index;