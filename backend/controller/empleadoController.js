const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empleado', (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO empleado set ?', [data], (err, row) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Empleado guardado exitosamente', id: row.insertId });
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empleado WHERE ID_EMPLEADO = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows[0]);
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE empleado set ? WHERE ID_EMPLEADO = ?', [newData, id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Empleado actualizado' });
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM empleado WHERE ID_EMPLEADO = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Empleado eliminado' });
        });
    });
};

module.exports = controller;