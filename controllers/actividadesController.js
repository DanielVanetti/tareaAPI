const Actividad = require('../models/actividad');
const Cliente = require('../models/cliente');
const validationErrors = require('./validationController');

// Obtener actividad por código
exports.consultarActividad = async (req, res) => {
    validationErrors(req, res);
    try {
        const codigo = req.params.codigo;
        const actividad = await Actividad.findOne({ where:{id: codigo},
            include: [
                {
                    model: Cliente,
                    as: 'cliente', // Asegúrate de que el alias coincida con el definido en `Actividad.belongsTo(Cliente, { as: 'cliente', foreignKey: 'clienteId' })`
                    attributes: ['id', 'nombre', 'apellido1', 'correo'] // Trae solo estos campos
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
exports.registrarActividad = async (req, res) => {
    validationErrors(req, res);
    try {
        const nuevaActividad = await Actividad.create(req.body);
        res.status(201).json(nuevaActividad);
    } catch (error) {
        //Manejo centralizado de errores
        next(error);
    }
};