const controller = {};

controller.list = (req, res) => {

    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            'SELECT * FROM paciente',
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
            'INSERT INTO paciente SET ?',
            [data],
            (err, row) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Paciente guardado',
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
            'SELECT * FROM paciente WHERE ID_PACIENTE = ?',
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
            'UPDATE paciente SET ? WHERE ID_PACIENTE = ?',
            [newData, id],
            (err) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Paciente actualizado'
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
            'DELETE FROM paciente WHERE ID_PACIENTE = ?',
            [id],
            (err) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Paciente eliminado'
                });

            }
        );

    });

};

module.exports = controller;