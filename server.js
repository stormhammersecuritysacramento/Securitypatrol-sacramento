const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

// 1. Home Page with Hero & Calculator
app.get('/', (req, res) => {
    res.render('index');
});

// 2. SEO Dynamic Engine: Generates pages for any Service/City combo
app.get('/:service-:city', (req, res) => {
    res.render('service-city', { 
        service: req.params.service.replace(/-/g, ' '), 
        city: req.params.city.replace(/-/g, ' ') 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
