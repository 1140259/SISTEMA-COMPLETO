const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM licencia_conduc', (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO licencia_conduc set ?', [data], (err, row) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Licencia guardada', id: row.insertId });
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM licencia_conduc WHERE ID_LICENCIA = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows[0]);
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE licencia_conduc set ? WHERE ID_LICENCIA = ?', [newData, id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Licencia actualizada' });
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM licencia_conduc WHERE ID_LICENCIA = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Licencia eliminada' });
        });
    });
};

module.exports = controller;