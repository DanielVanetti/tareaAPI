const Actividad = require('../models/actividad');

// Obtener actividad por código
exports.consultarActividad = async (req, res) => {
    try {
        const codigo = req.params.codigo;
        const actividad = await Actividad.findOne({ where:{id: codigo} });
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
    try {
        const nuevaActividad = await Actividad.create(req.body);
        res.status(201).json(nuevaActividad);
    } catch (error) {
        //Manejo centralizado de errores
        next(error);
    }
};