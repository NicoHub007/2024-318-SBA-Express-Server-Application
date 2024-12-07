const express = require('express');
const bodyParser = require('body-parser');
const jsxViewEngine = require('jsx-view-engine');
const methodOverride = require('method-override');
const  meats = require('./data/meats');
const vegetables = require('./data/vegetables');

const PORT = 3000;
const app = express();

// import the meats and vegetables routes that I need
const meatRoutes = require('./routes/meats');
const vegetableRoutes = require('./routes/vegetables');

// View engine setup
// set up the view engine to be able to use it
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));
app.use('/styles',express.static('public/styles'));


// below is custom middleware, meaning that we wrote the code that we wanted to be executed
app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
})

app.use((req, res, next) => {
    const time = new Date();
    console.log(
        `-----
        ${time.toLocaleDateString()}: Received a ${req.method} request to ${req.url}.`
    );

    if (req.body && Object.keys(req.body).length > 0) {
        console.log('Containing the data:');
        console.log(`${JSON.stringify(req.body)}`);
    }
    next();
})

// =========== ROUTES =============
// We are going to create a full CRUD application
// Server-side rendering, you also need the views for someone to input to put or post
// INDUCES
// I - Index    - GET       - READ - display all of the elements
// N - New      - GET       - *  CREATE * but this is a view that allows user inputs
// D - Delete   - DELETE    - DELETE
// U - Update   - PUT       - UPDATE * this updates the data
// C - Create   - POST      - CREATE * this adds new data 
// E - Edit     - GET       - *  UPDATE * but this a view that allows user inputs
// S - Show     - GET       - READ - displays one of the elements

// add in the meats and vegetables routes that were imported
app.use('/api/meats', meatRoutes); 
app.use('/api/vegetables', vegetableRoutes);

// create routes to represent the different requests
// define the route
// define the method
// start with the get request
// general format of the request
// app.get(route, function)
// the route is what the client or user types in for the request
// the function is how we respond
app.get('/', (req, res) => {
    res.send(
        '<div>this is my home</div>'
    );
})

app.get('/index', (req, res) => {
    res.send(
        '<h1>This is an index</h1>'
    )
})

app.get('/meats', (req, res) => {
    try {
        const foundMeats =  meats.find({});
        res.status(200).render('meats/Index', { meats: foundMeats })
    } catch (err) {
        res.send(err).status(400);
    }
})

app.get('/vegetables', (req, res) => {
    try {
        const foundVegetables =  vegetables.find({});
        res.status(200).render('vegetables/Index', { vegetables: foundVegetables })
    } catch (err) {
        res.send(err).status(400);
    }
})

// N - NEW - GET  - *  CREATE * but this is a view that allows user inputs
app.get('/meats/new', (req, res) => {
    res.render('meats/New');
})

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New');
});

//E - EDIT - GET  - *  UPDATE * but this a view that allows user inputs
app.get('/meats/:id/edit', (req, res) => {
    try {
        const foundMeat = meats.findById(req.params.id);
        res.render('meats/Edit', { meat: foundMeat });
    } catch (err) {
        res.send(err).status(400);
    }
});

app.get('/vegetables/:id/edit',  (req, res) => {
    try {
        const foundVegetable =  vegetables.findById(req.params.id);
        res.render('vegetables/Edit', { vegetable: foundVegetable });
    } catch (err) {
        res.send(err).status(400);
    }
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
