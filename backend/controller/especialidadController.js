const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        conn.query(
            'SELECT * FROM especialidad',
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
            'INSERT INTO especialidad SET ?',
            [data],
            (err, row) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Especialidad guardada',
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
            'SELECT * FROM especialidad WHERE ID_ESPECIALIDAD = ?',
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
            'UPDATE especialidad SET ? WHERE ID_ESPECIALIDAD = ?',
            [newData, id],
            (err) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Especialidad actualizada'
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
            'DELETE FROM especialidad WHERE ID_ESPECIALIDAD = ?',
            [id],
            (err) => {

                if (err) {
                    console.log(err);
                    return res.status(500).json(err);
                }

                res.json({
                    message: 'Especialidad eliminada'
                });

            }
        );

    });
};

module.exports = controller;