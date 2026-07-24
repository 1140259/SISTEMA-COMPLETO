const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ubigeo', (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO ubigeo set ?', [data], (err, row) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Ubigeo guardado', id: row.insertId });
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ubigeo WHERE ID_UBIGEO = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows[0]);
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE ubigeo set ? WHERE ID_UBIGEO = ?', [newData, id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Ubigeo actualizado' });
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM ubigeo WHERE ID_UBIGEO = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Ubigeo eliminado' });
        });
    });
};

module.exports = controller;