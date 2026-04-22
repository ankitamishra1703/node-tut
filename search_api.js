const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());

app.get('/search/:key', async (req, resp) => {
    let data = await Product.find(
        {"$or": [
            { id: { $regex: req.params.key } },
            { name: { $regex: req.params.key } },
            { brand: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },
            { category: { $regex: req.params.key } },
            
        ]
    }
    );
    resp.send(data);
})

app.listen(5000)