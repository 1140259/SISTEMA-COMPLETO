const jwt = require('jsonwebtoken');

const controller = {};

controller.login = (req, res) => {

    const {
        usuario,
        password
    } = req.body;

    req.getConnection((err, conn) => {

        if (err) {
            return res.status(500).json(err);
        }

        conn.query(
            'SELECT * FROM usuarios WHERE USUARIO = ?',
            [usuario],
            (err, rows) => {

                if (err) {
                    return res.status(500).json(err);
                }

                if (rows.length === 0) {

                    return res.status(401).json({
                        message: 'Usuario incorrecto'
                    });

                }

                const user = rows[0];

                console.log('USUARIO ENCONTRADO:', user.USUARIO);
                console.log('PASSWORD RECIBIDO:', password);

                if (password !== 'admin123') {

                    return res.status(401).json({
                        message: 'Contraseña incorrecta'
                    });

                }

                const token = jwt.sign(
                    {
                        id: user.ID_USUARIO,
                        usuario: user.USUARIO,
                        rol: user.ROL
                    },
                    'USAP_SECRET_KEY',
                    {
                        expiresIn: '8h'
                    }
                );

                res.json({

                    token,

                    usuario: user.USUARIO,

                    nombre: user.NOMBRE_COMPLETO,

                    rol: user.ROL

                });

            }
        );

    });

};

module.exports = controller;