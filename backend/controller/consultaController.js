const controller = {};

controller.list = (req, res) => {

    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            `SELECT 
                c.ID_CONSULTA,
                c.ID_PACIENTE,
                p.NRO_DOCUMENTO,
                p.NOMBRES AS PACIENTE_NOMBRES,
                p.APELLIDOS AS PACIENTE_APELLIDOS,
                c.ID_MEDICO,
                m.NOMBRES AS MEDICO_NOMBRES,
                m.APELLIDOS AS MEDICO_APELLIDOS,
                e.ESPECIALIDAD,
                c.FECHA,
                c.MOTIVO_CONSULTA,
                c.DIAGNOSTICO,
                c.TRATAMIENTO,
                c.OBSERVACIONES,
                c.ESTADO
             FROM consulta_medica c
             LEFT JOIN paciente p 
                ON c.ID_PACIENTE = p.ID_PACIENTE
             LEFT JOIN medico m 
                ON c.ID_MEDICO = m.ID_MEDICO
             LEFT JOIN especialidad e 
                ON m.ID_ESPECIALIDAD = e.ID_ESPECIALIDAD
             ORDER BY c.FECHA DESC`,
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

    const data = req.body;

    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            'INSERT INTO consulta_medica SET ?',
            [data],
            (err, row) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Consulta guardada correctamente',
                    id: row.insertId
                });

            }
        );

    });

};

controller.edit = (req, res) => {

    const { id } = req.params;

    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            'SELECT * FROM consulta_medica WHERE ID_CONSULTA = ?',
            [id],
            (err, rows) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json(rows[0]);

            }
        );

    });

};

controller.update = (req, res) => {

    const { id } = req.params;
    const newData = req.body;

    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            'UPDATE consulta_medica SET ? WHERE ID_CONSULTA = ?',
            [newData, id],
            (err) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Consulta actualizada correctamente'
                });

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
            'DELETE FROM consulta_medica WHERE ID_CONSULTA = ?',
            [id],
            (err) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Consulta eliminada correctamente'
                });

            }
        );

    });

};

module.exports = controller;
