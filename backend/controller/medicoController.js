const controller = {};

controller.list = (req, res) => {

    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            `SELECT
                m.ID_MEDICO,
                m.CODIGO_MEDICO,
                m.NOMBRES,
                m.APELLIDOS,
                m.ID_ESPECIALIDAD,
                e.ESPECIALIDAD,
                m.TELEFONO,
                m.CORREO,
                m.ESTADO
            FROM medico m
            LEFT JOIN especialidad e
            ON m.ID_ESPECIALIDAD = e.ID_ESPECIALIDAD`,
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
            return res.status(500).json(err);
        }

        conn.query(
            'SELECT IFNULL(MAX(ID_MEDICO),0)+1 AS SIGUIENTE FROM medico',
            (err, rows) => {

                if (err) {
                    return res.status(500).json(err);
                }

                const siguiente = rows[0].SIGUIENTE;

                data.CODIGO_MEDICO =
                    'MED' +
                    String(siguiente).padStart(4, '0');

                conn.query(
                    'INSERT INTO medico SET ?',
                    [data],
                    (err, row) => {

                        if (err) {
                            return res.status(500).json(err);
                        }

                        res.json({
                            message: 'Medico guardado',
                            id: row.insertId
                        });

                    }
                );

            }
        );

    });

};

controller.edit = (req, res) => {

    const { id } = req.params;

    req.getConnection((err, conn) => {

        if (err) {
            return res.status(500).json(err);
        }

        conn.query(
            'SELECT * FROM medico WHERE ID_MEDICO = ?',
            [id],
            (err, rows) => {

                if (err) {
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
            return res.status(500).json(err);
        }

        conn.query(
            'UPDATE medico SET ? WHERE ID_MEDICO = ?',
            [newData, id],
            (err) => {

                if (err) {
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Medico actualizado correctamente'
                });

            }
        );

    });

};

controller.delete = (req, res) => {

    const { id } = req.params;

    req.getConnection((err, conn) => {

        if (err) {
            return res.status(500).json(err);
        }

        conn.query(
            'DELETE FROM medico WHERE ID_MEDICO = ?',
            [id],
            (err) => {

                if (err) {
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Medico eliminado correctamente'
                });

            }
        );

    });

};

module.exports = controller;