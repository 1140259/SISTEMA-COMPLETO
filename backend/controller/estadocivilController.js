const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM estadocivil', (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO estadocivil set ?', [data], (err, row) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Estado civil guardado', id: row.insertId });
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM estadocivil WHERE ID_ESTADOCIVIL = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows[0]);
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE estadocivil set ? WHERE ID_ESTADOCIVIL = ?', [newData, id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Estado civil actualizado' });
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM estadocivil WHERE ID_ESTADOCIVIL = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Estado civil eliminado' });
        });
    });
};

module.exports = controller;