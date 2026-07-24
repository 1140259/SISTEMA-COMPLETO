const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM sexo', (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json(rows);
        });
    });
};

controller.save = (req, res) => {
    const nuevo = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO sexo SET ?', [nuevo], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Registro Almacenado" });
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        // Asegúrate de que 'idsexo' coincida con el nombre real de tu llave primaria en MySQL
        conn.query('DELETE FROM sexo WHERE idsexo = ?', [id], (err, rows) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;