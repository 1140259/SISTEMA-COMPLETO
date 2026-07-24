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

// CORREGIDO: Se añadió '/api/' y se ajustó a plural para que coincida con Angular
app.use('/api/empleados', empleadoRoutes);
app.use('/api/cargos', cargoRoutes);
app.use('/api/areas', areaRoutes);
app.use('/api/sueldos', sueldoRoutes);

app.listen(app.get('port'), () => {
    console.log('Servidor backend corriendo en el puerto', app.get('port'));
});