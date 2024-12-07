const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="/styles.css" />
                    <title>Grilling Inventory Manager</title>
                </head>
                <body>
                    <header>
                        <h1>G!M | Grilling Inventory Manager</h1>
                        <nav>
                            <a href="/meats">Meats</a> |  <a href="/vegetables">Vegetables</a> 
                        </nav>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                    <footer>
                        <p>&copy; 2025 Grilling Inventory Manager | G!M</p>
                    </footer>
                </body>
            </html>
        );
    }  
}

module.exports = DefaultLayout;