const controller = {};

controller.list = (req, res) => {

    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            `SELECT 
                r.ID_RECETA,
                r.ID_CONSULTA,
                r.FECHA_RECETA,
                r.INDICACIONES,

                c.ID_PACIENTE,
                c.ID_MEDICO,
                c.DIAGNOSTICO,
                c.TRATAMIENTO,

                p.NRO_DOCUMENTO,
                p.NOMBRES AS PACIENTE_NOMBRES,
                p.APELLIDOS AS PACIENTE_APELLIDOS,

                m.NOMBRES AS MEDICO_NOMBRES,
                m.APELLIDOS AS MEDICO_APELLIDOS,

                e.ESPECIALIDAD

             FROM receta_medica r
             LEFT JOIN consulta_medica c
                ON r.ID_CONSULTA = c.ID_CONSULTA
             LEFT JOIN paciente p
                ON c.ID_PACIENTE = p.ID_PACIENTE
             LEFT JOIN medico m
                ON c.ID_MEDICO = m.ID_MEDICO
             LEFT JOIN especialidad e
                ON m.ID_ESPECIALIDAD = e.ID_ESPECIALIDAD
             ORDER BY r.FECHA_RECETA DESC`,
            (err, rows) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json(rows);

            }
        );

    });

};

controller.save = (req, res) => {

    const receta = {
        ID_CONSULTA: req.body.ID_CONSULTA,
        INDICACIONES: req.body.INDICACIONES
    };

    const detalles = req.body.detalles || [];

    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            'INSERT INTO receta_medica SET ?',
            [receta],
            (err, row) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                const idReceta = row.insertId;

                if (detalles.length === 0) {
                    return res.json({
                        message: 'Receta guardada sin detalle',
                        id: idReceta
                    });
                }

                const values = detalles.map((d) => [
                    idReceta,
                    d.MEDICAMENTO,
                    d.DOSIS,
                    d.FRECUENCIA,
                    d.DIAS
                ]);

                conn.query(
                    `INSERT INTO receta_detalle
                    (
                        ID_RECETA,
                        MEDICAMENTO,
                        DOSIS,
                        FRECUENCIA,
                        DIAS
                    )
                    VALUES ?`,
                    [values],
                    (err) => {

                        if (err) {
                            console.log(err);
                            return res.status(500).json(err);
                        }

                        res.json({
                            message: 'Receta guardada correctamente',
                            id: idReceta
                        });

                    }
                );

            }
        );

    });

};

controller.getDetalle = (req, res) => {

    const { id } = req.params;

    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            `SELECT
                r.ID_RECETA,
                r.ID_CONSULTA,
                r.FECHA_RECETA,
                r.INDICACIONES,

                d.ID_DETALLE,
                d.MEDICAMENTO,
                d.DOSIS,
                d.FRECUENCIA,
                d.DIAS
             FROM receta_medica r
             LEFT JOIN receta_detalle d
                ON r.ID_RECETA = d.ID_RECETA
             WHERE r.ID_RECETA = ?`,
            [id],
            (err, rows) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json(rows);

            }
        );

    });

};

controller.delete = (req, res) => {

    const { id } = req.params;

    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            'DELETE FROM receta_detalle WHERE ID_RECETA = ?',
            [id],
            (err) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                conn.query(
                    'DELETE FROM receta_medica WHERE ID_RECETA = ?',
                    [id],
                    (err) => {

                        if (err) {
                            console.log(err);
                            return res.status(500).json(err);
                        }

                        res.json({
                            message: 'Receta eliminada correctamente'
                        });

                    }
                );

            }
        );

    });

};
controller.getOne = (req, res) => {

    const { id } = req.params;

    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            `SELECT
                r.ID_RECETA,
                r.ID_CONSULTA,
                r.FECHA_RECETA,
                r.INDICACIONES,

                c.DIAGNOSTICO,
                c.MOTIVO_CONSULTA,

                p.NOMBRES AS PACIENTE_NOMBRES,
                p.APELLIDOS AS PACIENTE_APELLIDOS,

                m.NOMBRES AS MEDICO_NOMBRES,
                m.APELLIDOS AS MEDICO_APELLIDOS,

                e.ESPECIALIDAD

             FROM receta_medica r

             LEFT JOIN consulta_medica c
                ON r.ID_CONSULTA = c.ID_CONSULTA

             LEFT JOIN paciente p
                ON c.ID_PACIENTE = p.ID_PACIENTE

             LEFT JOIN medico m
                ON c.ID_MEDICO = m.ID_MEDICO

             LEFT JOIN especialidad e
                ON m.ID_ESPECIALIDAD = e.ID_ESPECIALIDAD

             WHERE r.ID_RECETA = ?`,
            [id],
            (err, rows) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                if (rows.length === 0) {
                    return res.status(404).json({
                        message: 'Receta no encontrada'
                    });
                }

                const receta = rows[0];

                conn.query(
                    `SELECT
                        ID_DETALLE,
                        MEDICAMENTO,
                        DOSIS,
                        FRECUENCIA,
                        DIAS
                     FROM receta_detalle
                     WHERE ID_RECETA = ?`,
                    [id],
                    (err, detalle) => {

                        if (err) {
                            console.log(err);
                            return res.status(500).json(err);
                        }

                        receta.detalles = detalle;

                        res.json(receta);

                    }
                );

            }
        );

    });

};

module.exports = controller;