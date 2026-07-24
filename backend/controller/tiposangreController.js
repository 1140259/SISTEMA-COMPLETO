const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tiposangre', (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tiposangre set ?', [data], (err, row) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Tipo de sangre guardado', id: row.insertId });
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tiposangre WHERE ID_TIPOSANGRE = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows[0]);
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tiposangre set ? WHERE ID_TIPOSANGRE = ?', [newData, id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Tipo de sangre actualizado' });
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tiposangre WHERE ID_TIPOSANGRE = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Tipo de sangre eliminado' });
        });
    });
};

module.exports = controller;