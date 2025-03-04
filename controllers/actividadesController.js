const Actividad = require('../models/actividad');
const Cliente = require('../models/cliente');
const validationErrors = require('./validationController');

// Obtener actividad por código
exports.consultarActividad = async (req, res, next) => {
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
exports.registrarActividad = async (req, res, next) => {
    const validationResult = validationErrors(req, res);
    if (validationResult) {
        return;
    }
    try {
        const { nombre, fecha, descripcion, cupo, clienteId } = req.body;

        // Verificar si el cliente ya está registrado en la actividad
        const actividadExistente = await Actividad.findOne({
            where: { nombre, fecha },
            include: [
                {
                    model: Cliente,
                    as: 'cliente',
                    where: { id: clienteId }
                }
            ]
        });
        
        if (actividadExistente) {
            return res.status(400).json({ error: 'El cliente ya está registrado en esta actividad' });
        }
        
        const nuevaActividad = await Actividad.create(req.body);
        res.status(201).json(nuevaActividad);
    } catch (error) {
        //Manejo centralizado de errores
        next(error);
    }
};

exports.obtenerTodasLasActividades = async (req, res, next) => {
    try {
        const actividad = await Actividad.findAll();
        res.json(actividad);
    } catch (error) {
        next(error);
    }
};