const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Items were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Item was created'
    });
});

router.get('/:itemId', (req, res, next) => {
    res.status(200).json({
        message: 'Item details',
        orderId: req.params.orderId
    });
});

router.delete('/:itemId', (req, res, next) => {
    res.status(200).json({
        message: 'Item deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;