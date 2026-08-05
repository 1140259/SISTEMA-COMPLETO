const controller = {};

controller.list = (req, res) => {

    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            `SELECT
                c.ID_CITA,
                c.ID_PACIENTE,
                p.NRO_DOCUMENTO,
                p.NOMBRES AS PACIENTE_NOMBRES,
                p.APELLIDOS AS PACIENTE_APELLIDOS,

                c.ID_MEDICO,
                m.NOMBRES AS MEDICO_NOMBRES,
                m.APELLIDOS AS MEDICO_APELLIDOS,

                c.FECHA,
                c.HORA,
                c.MOTIVO,
                c.ESTADO

             FROM citas c

             LEFT JOIN paciente p
                ON c.ID_PACIENTE = p.ID_PACIENTE

             LEFT JOIN medico m
                ON c.ID_MEDICO = m.ID_MEDICO

             ORDER BY c.FECHA DESC, c.HORA DESC`,
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
            'INSERT INTO citas SET ?',
            [data],
            (err, row) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Cita guardada correctamente',
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
            'SELECT * FROM citas WHERE ID_CITA = ?',
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
            'UPDATE citas SET ? WHERE ID_CITA = ?',
            [newData, id],
            (err) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Cita actualizada correctamente'
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
            'DELETE FROM citas WHERE ID_CITA = ?',
            [id],
            (err) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Cita eliminada correctamente'
                });

            }
        );

    });

};

module.exports = controller;
