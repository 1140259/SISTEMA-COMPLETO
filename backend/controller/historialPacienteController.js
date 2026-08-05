const controller = {};

controller.list = (req, res) => {

    const { id } = req.params;

    req.getConnection((err, conn) => {

        if (err) {
            return res.status(500).json(err);
        }

        conn.query(
            `SELECT
                c.ID_CONSULTA,
                c.FECHA,
                c.MOTIVO_CONSULTA,
                c.DIAGNOSTICO,
                c.TRATAMIENTO,
                c.OBSERVACIONES,
                m.NOMBRES AS MEDICO_NOMBRES,
                m.APELLIDOS AS MEDICO_APELLIDOS,
                e.ESPECIALIDAD
             FROM consulta_medica c
             LEFT JOIN medico m
                ON c.ID_MEDICO = m.ID_MEDICO
             LEFT JOIN especialidad e
                ON m.ID_ESPECIALIDAD = e.ID_ESPECIALIDAD
             WHERE c.ID_PACIENTE = ?
             ORDER BY c.FECHA DESC`,
            [id],
            (err, rows) => {

                if (err) {
                    return res.status(500).json(err);
                }

                res.json(rows);

            }
        );

    });

};

module.exports = controller;