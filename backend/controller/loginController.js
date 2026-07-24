const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM login', (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO login set ?', [data], (err, row) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Login guardado', id: row.insertId });
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM login WHERE ID_LOGIN = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows[0]);
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE login set ? WHERE ID_LOGIN = ?', [newData, id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Login actualizado' });
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM login WHERE ID_LOGIN = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Login eliminado' });
        });
    });
};

module.exports = controller;