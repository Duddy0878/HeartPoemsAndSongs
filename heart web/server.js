const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PRODUCTS_FILE = path.join(__dirname, 'products.json'); // Absolute path for products
const CATEGORYS_FILE = path.join(__dirname, 'categorys.json'); // Absolute path for categories
const CUSTOMERS_FILE = path.join(__dirname, 'customers.json');
const ORDERS_FILE = path.join(__dirname, 'orders.json');
// Endpoint to fetch products
app.get('/products.json', (req, res) => {
    fs.readFile(PRODUCTS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading products file');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Endpoint to save products
app.post('/products.json', (req, res) => {
    const newData = req.body;
    fs.writeFile(PRODUCTS_FILE, JSON.stringify(newData, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error writing to products file');
        } else {
            res.status(200).send('Products successfully saved');
        }
    });
});

// Endpoint to fetch categories
app.get('/categorys.json', (req, res) => {
    fs.readFile(CATEGORYS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading categories file');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Endpoint to save categories
app.post('/categorys.json', (req, res) => {
    const newData = req.body;
    fs.writeFile(CATEGORYS_FILE, JSON.stringify(newData, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error writing to categories file');
        } else {
            res.status(200).send('Categories successfully saved');
        }
    });
});

// Endpoint to fetch customers
app.get('/customers.json', (req, res) => {
    fs.readFile(CUSTOMERS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading categories file');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Endpoint to save customers
app.post('/customers.json', (req, res) => {
    const newData = req.body;
    fs.writeFile(CUSTOMERS_FILE, JSON.stringify(newData, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error writing to categories file');
        } else {
            res.status(200).send('Categories successfully saved');
        }
    });
});

// Endpoint to fetch orders
app.get('/orders.json', (req, res) => {
    fs.readFile(ORDERS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading categories file');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Endpoint to save orders
app.post('/orders.json', (req, res) => {
    const newData = req.body;
    fs.writeFile(ORDERS_FILE, JSON.stringify(newData, null, 2), (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error writing to categories file');
        } else {
            res.status(200).send('Categories successfully saved');
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});