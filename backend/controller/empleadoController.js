const controller = {};

controller.list = (req, res) => {

    console.log('Listando empleados...');

    req.getConnection((err, conn) => {

        if (err) {
            return res.status(500).json(err);
        }

        conn.query(`
            SELECT
                e.ID_EMPLEADO,
                e.NOMBRES,
                e.APELLIDOS,
                e.FECHA_CONTRATO,
                e.ID_SEXO,
                s.SEXO
            FROM proyecto.empleado e
            LEFT JOIN proyecto.sexo s
                ON e.ID_SEXO = s.ID_SEXO
            ORDER BY e.ID_EMPLEADO
        `,
        (err, rows) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(rows);

        });

    });

};
``

controller.save = (req, res) => {

    const data = {
        ID_SEXO: req.body.idsexo,
        NOMBRES: req.body.nombre,
        APELLIDOS: req.body.apellido,
        FECHA_CONTRATO: req.body.fechacontrato
    };

    req.getConnection((err, conn) => {

        if (err) {
            return res.status(500).json(err);
        }

        conn.query(
            'INSERT INTO proyecto.empleado SET ?',
            [data],
            (err, result) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Empleado guardado exitosamente',
                    id: result.insertId
                });

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
            'SELECT * FROM proyecto.empleado WHERE ID_EMPLEADO = ?',
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

    const data = {
        ID_SEXO: req.body.idsexo,
        NOMBRES: req.body.nombre,
        APELLIDOS: req.body.apellido,
        FECHA_CONTRATO: req.body.fechacontrato
    };

    req.getConnection((err, conn) => {

        if (err) {
            return res.status(500).json(err);
        }

        conn.query(
            'UPDATE proyecto.empleado SET ? WHERE ID_EMPLEADO = ?',
            [data, id],
            (err, rows) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Empleado actualizado correctamente'
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
            'DELETE FROM proyecto.empleado WHERE ID_EMPLEADO = ?',
            [id],
            (err, rows) => {

                if (err) {
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Empleado eliminado'
                });

            }
        );

    });

};

module.exports = controller;