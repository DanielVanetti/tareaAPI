const Actividad = require('../models/actividad');
const Cliente = require('../models/cliente');
const validationErrors = require('./validationController');

// Obtener actividad por código
exports.consultarActividad = async (req, res,next) => {
    const validationResult = validationErrors(req, res);
    if (validationResult) {
        return;
    }
    try {
        const codigo = req.params.codigo;
        const actividad = await Actividad.findOne({ where:{id: codigo},
            //Traer el cliente asociado a la actividad
            include: [
                {
                    model: Cliente,
                    as: 'cliente',
                    attributes: ['id', 'nombre', 'apellido1', 'correo']
                }
            ]
         });
        if (!actividad) {
            return res.status(404).json({ mensaje: 'Actividad no encontrada' });
        }
        res.json(actividad);
    } catch (error) {
        //Manejo centralizado de errores
        next(error);
    }
};

// Crear nueva actividad
exports.registrarActividad = async (req, res,next) => {
    const validationResult = validationErrors(req, res);
    if (validationResult) {
        return;
    }
    try {
        const nuevaActividad = await Actividad.create(req.body);
        res.status(201).json(nuevaActividad);
    } catch (error) {
        //Manejo centralizado de errores
        next(error);
    }
};