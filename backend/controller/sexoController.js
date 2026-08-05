const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM proyecto.sexo', (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows);
        });
    });
};

controller.save = (req, res) => {
    const nuevo = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO proyecto.sexo SET ?', [nuevo], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Registro Almacenado" });
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        // Asegúrate de que 'idsexo' coincida con el nombre real de tu llave primaria en MySQL
        conn.query('DELETE FROM proyecto.sexo WHERE ID_SEXO = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM proyecto.sexo WHERE ID_SEXO = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows[0]);
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE proyecto.sexo set ? WHERE ID_SEXO = ?', [newData, id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Sexo actualizado' });
        });
    });
};

module.exports = controller;