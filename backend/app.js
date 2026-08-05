const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'COMERCIAL900',
    port: 3306,
    database: 'proyecto'
}, 'single'));

const empleadoRoutes = require('./rutas/empleado');
const cargoRoutes = require('./rutas/cargo');
const areaRoutes = require('./rutas/area');
const sueldoRoutes = require('./rutas/sueldo');

const sexoRoutes = require('./rutas/sexo');
const estadocivilRoutes = require('./rutas/estadocivil');
const tiposangreRoutes = require('./rutas/tiposangre');

const especialidadRoutes = require('./rutas/especialidad');
const medicoRoutes = require('./rutas/medico');
const pacienteRoutes = require('./rutas/paciente');
const consultaRoutes = require('./rutas/consulta');
const recetaRoutes = require('./rutas/receta');
const citaRoutes = require('./rutas/cita');
const loginRoutes = require('./rutas/login');

const historialPacienteRoutes =
require('./rutas/historialPaciente');

app.use('/api/empleados', empleadoRoutes);
app.use('/api/cargos', cargoRoutes);
app.use('/api/areas', areaRoutes);
app.use('/api/sueldos', sueldoRoutes);

app.use('/api/sexos', sexoRoutes);
app.use('/api/estadociviles', estadocivilRoutes);
app.use('/api/tiposangre', tiposangreRoutes);
app.use('/api/citas', citaRoutes);

app.use(
    '/api/historialpaciente',
    historialPacienteRoutes
);

app.use('/api/especialidades', especialidadRoutes);
app.use('/api/medicos', medicoRoutes);
app.use('/api/pacientes', pacienteRoutes);
app.use('/api/consultas', consultaRoutes);
app.use('/api/recetas', recetaRoutes);

app.use('/api/login', loginRoutes);

app.listen(app.get('port'), () => {
    console.log(
        'Servidor backend corriendo en el puerto',
        app.get('port')
    );
});
