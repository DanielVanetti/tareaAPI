const { validationResult } = require('express-validator');

const validationErrors = (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
};

module.exports = validationErrors;