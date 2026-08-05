-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyecto
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `ID_AREA` int NOT NULL AUTO_INCREMENT,
  `NOMBRE_AREA` varchar(100) DEFAULT NULL,
  `ACTUALIZADO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_AREA`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'Recursos Humanos','2026-07-23 00:55:29'),(2,'Tecnología','2026-07-23 00:55:29'),(3,'Finanzas','2026-07-23 02:18:47'),(4,'Recursos Humanos','2026-07-23 02:18:47'),(5,'IT','2026-07-23 02:18:47'),(6,'Marketing','2026-07-23 02:18:47'),(7,'Ventas','2026-07-23 02:18:47'),(8,'Producción','2026-07-23 02:18:47'),(9,'Logística','2026-07-23 02:18:47'),(10,'Legal','2026-07-23 02:18:47'),(11,'Compras','2026-07-23 02:18:47'),(12,'Calidad','2026-07-23 02:18:47'),(13,'Investigación','2026-07-23 02:18:47'),(14,'Desarrollo','2026-07-23 02:18:47'),(15,'Atención al Cliente','2026-07-23 02:18:47'),(16,'Soporte Técnico','2026-07-23 02:18:47'),(17,'Administración','2026-07-23 02:18:47'),(18,'Contabilidad','2026-07-23 02:18:47'),(19,'Seguridad','2026-07-23 02:18:47'),(20,'Planificación','2026-07-23 02:18:47'),(21,'Innovación','2026-07-23 02:18:47'),(22,'Proyectos','2026-07-23 02:18:47'),(23,'Exportaciones','2026-07-23 02:18:47'),(24,'Importaciones','2026-07-23 02:18:47'),(25,'Diseño','2026-07-23 02:18:47'),(26,'Comunicación','2026-07-23 02:18:47'),(27,'Relaciones Públicas','2026-07-23 02:18:47'),(28,'Auditoría','2026-07-23 02:18:47'),(29,'Tesorería','2026-07-23 02:18:47'),(30,'Control Interno','2026-07-23 02:18:47'),(31,'Gestión Ambiental','2026-07-23 02:18:47'),(32,'Bienestar','2026-07-23 02:18:47'),(33,'Capacitación','2026-07-23 02:18:47'),(34,'Investigación de Mercado','2026-07-23 02:18:47'),(35,'Estrategia','2026-07-23 02:18:47'),(36,'Gestión de Riesgos','2026-07-23 02:18:47'),(37,'Gobierno Corporativo','2026-07-23 02:18:47'),(38,'Operaciones','2026-07-23 02:18:47'),(39,'Servicio Postventa','2026-07-23 02:18:47'),(40,'Gestión Documental','2026-07-23 02:18:47'),(41,'Gestión de Datos','2026-07-23 02:18:47'),(42,'Transformación Digital','2026-07-23 02:18:47'),(43,'Gestión de Proveedores','2026-07-23 02:18:47'),(44,'Gestión de Clientes','2026-07-23 02:18:47'),(45,'Gestión de Talento','2026-07-23 02:18:47'),(46,'Gestión de Proyectos','2026-07-23 02:18:47'),(47,'Gestión de Calidad','2026-07-23 02:18:47'),(48,'Gestión de Seguridad','2026-07-23 02:18:47'),(49,'Gestión de Producción','2026-07-23 02:18:47'),(50,'Gestión de Ventas','2026-07-23 02:18:47'),(51,'Gestión de Marketing','2026-07-23 02:18:47'),(52,'Gestión de Innovación','2026-07-23 02:18:47'),(53,'Finanzas','2026-07-23 02:32:05'),(54,'Recursos Humanos','2026-07-23 02:32:05'),(55,'IT','2026-07-23 02:32:05'),(56,'Marketing','2026-07-23 02:32:05'),(57,'Ventas','2026-07-23 02:32:05'),(58,'Producción','2026-07-23 02:32:05'),(59,'Logística','2026-07-23 02:32:05'),(60,'Legal','2026-07-23 02:32:05'),(61,'Compras','2026-07-23 02:32:05'),(62,'Calidad','2026-07-23 02:32:05'),(63,'Investigación','2026-07-23 02:32:05'),(64,'Desarrollo','2026-07-23 02:32:05'),(65,'Atención al Cliente','2026-07-23 02:32:05'),(66,'Soporte Técnico','2026-07-23 02:32:05'),(67,'Administración','2026-07-23 02:32:05'),(68,'Contabilidad','2026-07-23 02:32:05'),(69,'Seguridad','2026-07-23 02:32:05'),(70,'Planificación','2026-07-23 02:32:05'),(71,'Innovación','2026-07-23 02:32:05'),(72,'Proyectos','2026-07-23 02:32:05'),(73,'Exportaciones','2026-07-23 02:32:05'),(74,'Importaciones','2026-07-23 02:32:05'),(75,'Diseño','2026-07-23 02:32:05'),(76,'Comunicación','2026-07-23 02:32:05'),(77,'Relaciones Públicas','2026-07-23 02:32:05'),(78,'Auditoría','2026-07-23 02:32:05'),(79,'Tesorería','2026-07-23 02:32:05'),(80,'Control Interno','2026-07-23 02:32:05'),(81,'Gestión Ambiental','2026-07-23 02:32:05'),(82,'Bienestar','2026-07-23 02:32:05'),(83,'Capacitación','2026-07-23 02:32:05'),(84,'Investigación de Mercado','2026-07-23 02:32:05'),(85,'Estrategia','2026-07-23 02:32:05'),(86,'Gestión de Riesgos','2026-07-23 02:32:05'),(87,'Gobierno Corporativo','2026-07-23 02:32:05'),(88,'Operaciones','2026-07-23 02:32:05'),(89,'Servicio Postventa','2026-07-23 02:32:05'),(90,'Gestión Documental','2026-07-23 02:32:05'),(91,'Gestión de Datos','2026-07-23 02:32:05'),(92,'Transformación Digital','2026-07-23 02:32:05'),(93,'Gestión de Proveedores','2026-07-23 02:32:05'),(94,'Gestión de Clientes','2026-07-23 02:32:05'),(95,'Gestión de Talento','2026-07-23 02:32:05'),(96,'Gestión de Proyectos','2026-07-23 02:32:05'),(97,'Gestión de Calidad','2026-07-23 02:32:05'),(98,'Gestión de Seguridad','2026-07-23 02:32:05'),(99,'Gestión de Producción','2026-07-23 02:32:05'),(100,'Gestión de Ventas','2026-07-23 02:32:05'),(101,'Gestión de Marketing','2026-07-23 02:32:05'),(102,'Gestión de Innovación','2026-07-23 02:32:05'),(103,'Finanzas','2026-07-23 02:37:38'),(104,'Recursos Humanos','2026-07-23 02:37:38'),(105,'IT','2026-07-23 02:37:38'),(106,'Marketing','2026-07-23 02:37:38'),(107,'Ventas','2026-07-23 02:37:38'),(108,'Producción','2026-07-23 02:37:38'),(109,'Logística','2026-07-23 02:37:38'),(110,'Legal','2026-07-23 02:37:38'),(111,'Compras','2026-07-23 02:37:38'),(112,'Calidad','2026-07-23 02:37:38'),(113,'Investigación','2026-07-23 02:37:38'),(114,'Desarrollo','2026-07-23 02:37:38'),(115,'Atención al Cliente','2026-07-23 02:37:38'),(116,'Soporte Técnico','2026-07-23 02:37:38'),(117,'Administración','2026-07-23 02:37:38'),(118,'Contabilidad','2026-07-23 02:37:38'),(119,'Seguridad','2026-07-23 02:37:38'),(120,'Planificación','2026-07-23 02:37:38'),(121,'Innovación','2026-07-23 02:37:38'),(122,'Proyectos','2026-07-23 02:37:38'),(123,'Exportaciones','2026-07-23 02:37:38'),(124,'Importaciones','2026-07-23 02:37:38'),(125,'Diseño','2026-07-23 02:37:38'),(126,'Comunicación','2026-07-23 02:37:38'),(127,'Relaciones Públicas','2026-07-23 02:37:38'),(128,'Auditoría','2026-07-23 02:37:38'),(129,'Tesorería','2026-07-23 02:37:38'),(130,'Control Interno','2026-07-23 02:37:38'),(131,'Gestión Ambiental','2026-07-23 02:37:38'),(132,'Bienestar','2026-07-23 02:37:38'),(133,'Capacitación','2026-07-23 02:37:38'),(134,'Investigación de Mercado','2026-07-23 02:37:38'),(135,'Estrategia','2026-07-23 02:37:38'),(136,'Gestión de Riesgos','2026-07-23 02:37:38'),(137,'Gobierno Corporativo','2026-07-23 02:37:38'),(138,'Operaciones','2026-07-23 02:37:38'),(139,'Servicio Postventa','2026-07-23 02:37:38'),(140,'Gestión Documental','2026-07-23 02:37:38'),(141,'Gestión de Datos','2026-07-23 02:37:38'),(142,'Transformación Digital','2026-07-23 02:37:38'),(143,'Gestión de Proveedores','2026-07-23 02:37:38'),(144,'Gestión de Clientes','2026-07-23 02:37:38'),(145,'Gestión de Talento','2026-07-23 02:37:38'),(146,'Gestión de Proyectos','2026-07-23 02:37:38'),(147,'Gestión de Calidad','2026-07-23 02:37:38'),(148,'Gestión de Seguridad','2026-07-23 02:37:38'),(149,'Gestión de Producción','2026-07-23 02:37:38'),(150,'Gestión de Ventas','2026-07-23 02:37:38'),(151,'Gestión de Marketing','2026-07-23 02:37:38'),(152,'Gestión de Innovación','2026-07-23 02:37:38');
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `area_puesto`
--

DROP TABLE IF EXISTS `area_puesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area_puesto` (
  `ID_AREA_PUESTO` int NOT NULL AUTO_INCREMENT,
  `ID_AREA` int DEFAULT NULL,
  `ACTUALIZADO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_AREA_PUESTO`),
  KEY `ID_AREA` (`ID_AREA`),
  CONSTRAINT `area_puesto_ibfk_1` FOREIGN KEY (`ID_AREA`) REFERENCES `area` (`ID_AREA`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area_puesto`
--

LOCK TABLES `area_puesto` WRITE;
/*!40000 ALTER TABLE `area_puesto` DISABLE KEYS */;
INSERT INTO `area_puesto` VALUES (1,1,'2026-07-23 00:56:15'),(2,2,'2026-07-23 00:56:15'),(3,1,'2026-07-23 00:56:24'),(4,2,'2026-07-23 00:56:24');
/*!40000 ALTER TABLE `area_puesto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asignacion_medico`
--

DROP TABLE IF EXISTS `asignacion_medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asignacion_medico` (
  `ID_ASIGNACION` int NOT NULL AUTO_INCREMENT,
  `ID_PACIENTE` int NOT NULL,
  `ID_MEDICO` int NOT NULL,
  `FECHA_ASIGNACION` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_ASIGNACION`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignacion_medico`
--

LOCK TABLES `asignacion_medico` WRITE;
/*!40000 ALTER TABLE `asignacion_medico` DISABLE KEYS */;
/*!40000 ALTER TABLE `asignacion_medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargo` (
  `ID_CARGO` int NOT NULL AUTO_INCREMENT,
  `CARGO` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID_CARGO`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargo`
--

LOCK TABLES `cargo` WRITE;
/*!40000 ALTER TABLE `cargo` DISABLE KEYS */;
INSERT INTO `cargo` VALUES (1,'Analista'),(2,'Desarrollador'),(3,'Gerente'),(4,'Subgerente'),(5,'Analista'),(6,'Asistente'),(7,'Coordinador'),(8,'Supervisor'),(9,'Director'),(10,'Auxiliar'),(11,'Especialista'),(12,'Consultor'),(13,'Programador'),(14,'Diseñador'),(15,'Tester'),(16,'Administrador'),(17,'Contador'),(18,'Abogado'),(19,'Ingeniero'),(20,'Arquitecto'),(21,'Técnico'),(22,'Operario'),(23,'Secretario'),(24,'Recepcionista'),(25,'Encargado'),(26,'Jefe de Área'),(27,'Jefe de Proyecto'),(28,'Project Manager'),(29,'Scrum Master'),(30,'Product Owner'),(31,'Data Scientist'),(32,'Analista de Datos'),(33,'Analista Financiero'),(34,'Analista de RRHH'),(35,'Analista de Marketing'),(36,'Analista de Ventas'),(37,'Analista de Producción'),(38,'Analista de Logística'),(39,'Analista Legal'),(40,'Analista de Calidad'),(41,'Analista de Innovación'),(42,'Analista de Proyectos'),(43,'Analista de Seguridad'),(44,'Analista de Sistemas'),(45,'Analista de Soporte'),(46,'Analista de Comunicación'),(47,'Analista de Diseño'),(48,'Analista de Estrategia'),(49,'Analista de Gobierno'),(50,'Analista de Riesgos'),(51,'Analista de Auditoría'),(52,'Analista de Tesorería'),(53,'Gerente'),(54,'Subgerente'),(55,'Analista'),(56,'Asistente'),(57,'Coordinador'),(58,'Supervisor'),(59,'Director'),(60,'Auxiliar'),(61,'Especialista'),(62,'Consultor'),(63,'Programador'),(64,'Diseñador'),(65,'Tester'),(66,'Administrador'),(67,'Contador'),(68,'Abogado'),(69,'Ingeniero'),(70,'Arquitecto'),(71,'Técnico'),(72,'Operario'),(73,'Secretario'),(74,'Recepcionista'),(75,'Encargado'),(76,'Jefe de Área'),(77,'Jefe de Proyecto'),(78,'Project Manager'),(79,'Scrum Master'),(80,'Product Owner'),(81,'Data Scientist'),(82,'Analista de Datos'),(83,'Analista Financiero'),(84,'Analista de RRHH'),(85,'Analista de Marketing'),(86,'Analista de Ventas'),(87,'Analista de Producción'),(88,'Analista de Logística'),(89,'Analista Legal'),(90,'Analista de Calidad'),(91,'Analista de Innovación'),(92,'Analista de Proyectos'),(93,'Analista de Seguridad'),(94,'Analista de Sistemas'),(95,'Analista de Soporte'),(96,'Analista de Comunicación'),(97,'Analista de Diseño'),(98,'Analista de Estrategia'),(99,'Analista de Gobierno'),(100,'Analista de Riesgos'),(101,'Analista de Auditoría'),(102,'Analista de Tesorería'),(103,'Gerente'),(104,'Subgerente'),(105,'Analista'),(106,'Asistente'),(107,'Coordinador'),(108,'Supervisor'),(109,'Director'),(110,'Auxiliar'),(111,'Especialista'),(112,'Consultor'),(113,'Programador'),(114,'Diseñador'),(115,'Tester'),(116,'Administrador'),(117,'Contador'),(118,'Abogado'),(119,'Ingeniero'),(120,'Arquitecto'),(121,'Técnico'),(122,'Operario'),(123,'Secretario'),(124,'Recepcionista'),(125,'Encargado'),(126,'Jefe de Área'),(127,'Jefe de Proyecto'),(128,'Project Manager'),(129,'Scrum Master'),(130,'Product Owner'),(131,'Data Scientist'),(132,'Analista de Datos'),(133,'Analista Financiero'),(134,'Analista de RRHH'),(135,'Analista de Marketing'),(136,'Analista de Ventas'),(137,'Analista de Producción'),(138,'Analista de Logística'),(139,'Analista Legal'),(140,'Analista de Calidad'),(141,'Analista de Innovación'),(142,'Analista de Proyectos'),(143,'Analista de Seguridad'),(144,'Analista de Sistemas'),(145,'Analista de Soporte'),(146,'Analista de Comunicación'),(147,'Analista de Diseño'),(148,'Analista de Estrategia'),(149,'Analista de Gobierno'),(150,'Analista de Riesgos'),(151,'Analista de Auditoría'),(152,'Analista de Tesorería');
/*!40000 ALTER TABLE `cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cargoempleado`
--

DROP TABLE IF EXISTS `cargoempleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargoempleado` (
  `ID_CARGOEMPLEADO` int NOT NULL AUTO_INCREMENT,
  `ID_CARGO` int DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  `ACTUALIZADO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_CARGOEMPLEADO`),
  KEY `ID_CARGO` (`ID_CARGO`),
  CONSTRAINT `cargoempleado_ibfk_1` FOREIGN KEY (`ID_CARGO`) REFERENCES `cargo` (`ID_CARGO`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargoempleado`
--

LOCK TABLES `cargoempleado` WRITE;
/*!40000 ALTER TABLE `cargoempleado` DISABLE KEYS */;
INSERT INTO `cargoempleado` VALUES (1,1,'2020-01-15','2026-07-23 00:56:33'),(2,2,'2021-03-10','2026-07-23 00:56:33');
/*!40000 ALTER TABLE `cargoempleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria_profe`
--

DROP TABLE IF EXISTS `categoria_profe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria_profe` (
  `ID_CATEGORIA_PROFESIONAL` int NOT NULL AUTO_INCREMENT,
  `CATEGORIA` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID_CATEGORIA_PROFESIONAL`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria_profe`
--

LOCK TABLES `categoria_profe` WRITE;
/*!40000 ALTER TABLE `categoria_profe` DISABLE KEYS */;
INSERT INTO `categoria_profe` VALUES (1,'Junior'),(2,'Senior'),(3,'Junior'),(4,'Senior'),(5,'Pleno'),(6,'Master'),(7,'Trainee'),(8,'Senior');
/*!40000 ALTER TABLE `categoria_profe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriaemplea`
--

DROP TABLE IF EXISTS `categoriaemplea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriaemplea` (
  `ID_CATEGORIAEMPLEADO` int NOT NULL AUTO_INCREMENT,
  `ID_EMPLEADO` int DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  `ACTUALIZADO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_CATEGORIAEMPLEADO`),
  KEY `ID_EMPLEADO` (`ID_EMPLEADO`),
  CONSTRAINT `categoriaemplea_ibfk_1` FOREIGN KEY (`ID_EMPLEADO`) REFERENCES `empleado` (`ID_EMPLEADO`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriaemplea`
--

LOCK TABLES `categoriaemplea` WRITE;
/*!40000 ALTER TABLE `categoriaemplea` DISABLE KEYS */;
INSERT INTO `categoriaemplea` VALUES (1,1,'2020-01-15','2026-07-23 00:55:45'),(2,2,'2021-03-10','2026-07-23 00:55:45'),(3,1,'2020-01-15','2026-07-23 00:55:56'),(4,2,'2021-03-10','2026-07-23 00:55:56');
/*!40000 ALTER TABLE `categoriaemplea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `citas`
--

DROP TABLE IF EXISTS `citas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citas` (
  `ID_CITA` int NOT NULL AUTO_INCREMENT,
  `ID_PACIENTE` int NOT NULL,
  `ID_MEDICO` int NOT NULL,
  `FECHA` date NOT NULL,
  `HORA` time NOT NULL,
  `MOTIVO` varchar(255) DEFAULT NULL,
  `ESTADO` varchar(20) DEFAULT 'PENDIENTE',
  PRIMARY KEY (`ID_CITA`),
  KEY `FK_CITA_PACIENTE` (`ID_PACIENTE`),
  KEY `FK_CITA_MEDICO` (`ID_MEDICO`),
  CONSTRAINT `FK_CITA_MEDICO` FOREIGN KEY (`ID_MEDICO`) REFERENCES `medico` (`ID_MEDICO`),
  CONSTRAINT `FK_CITA_PACIENTE` FOREIGN KEY (`ID_PACIENTE`) REFERENCES `paciente` (`ID_PACIENTE`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citas`
--

LOCK TABLES `citas` WRITE;
/*!40000 ALTER TABLE `citas` DISABLE KEYS */;
INSERT INTO `citas` VALUES (3,2,1,'2026-08-03','08:00:00','Consulta General','PENDIENTE'),(4,3,2,'2026-08-03','11:01:00','seguimiento','PENDIENTE'),(5,6,3,'2026-08-03','08:00:00','','ATENDIDA'),(6,7,1,'2026-08-03','08:00:00','','ATENDIDA'),(7,2,1,'2026-08-04','08:00:00','dolor de cabeza','ATENDIDA');
/*!40000 ALTER TABLE `citas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consulta`
--

DROP TABLE IF EXISTS `consulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consulta` (
  `ID_CONSULTA` int NOT NULL AUTO_INCREMENT,
  `ID_PACIENTE` int NOT NULL,
  `ID_MEDICO` int NOT NULL,
  `FECHA` datetime DEFAULT CURRENT_TIMESTAMP,
  `MOTIVO_CONSULTA` text,
  `DIAGNOSTICO` text,
  `TRATAMIENTO` text,
  `OBSERVACIONES` text,
  PRIMARY KEY (`ID_CONSULTA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulta`
--

LOCK TABLES `consulta` WRITE;
/*!40000 ALTER TABLE `consulta` DISABLE KEYS */;
/*!40000 ALTER TABLE `consulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consulta_medica`
--

DROP TABLE IF EXISTS `consulta_medica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consulta_medica` (
  `ID_CONSULTA` int NOT NULL AUTO_INCREMENT,
  `ID_PACIENTE` int DEFAULT NULL,
  `ID_MEDICO` int DEFAULT NULL,
  `FECHA` datetime DEFAULT CURRENT_TIMESTAMP,
  `MOTIVO_CONSULTA` text,
  `DIAGNOSTICO` text,
  `TRATAMIENTO` text,
  `OBSERVACIONES` text,
  `ESTADO` varchar(20) DEFAULT 'ACTIVO',
  PRIMARY KEY (`ID_CONSULTA`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulta_medica`
--

LOCK TABLES `consulta_medica` WRITE;
/*!40000 ALTER TABLE `consulta_medica` DISABLE KEYS */;
INSERT INTO `consulta_medica` VALUES (1,2,1,'2026-08-02 20:24:00','temperatura','dengue','paracetamol','','ACTIVO'),(2,4,1,'2026-08-03 06:13:00','dolor de pie',' esguince','reposo','','ACTIVO'),(3,5,3,'2026-08-03 21:21:00','DOLOR DE CABEZA','ESTRES','DESCANSO 5 DIAS','','ACTIVO'),(4,6,3,'2026-08-03 22:08:00','dolor de pie','pie diabetico','','','ACTIVO'),(5,7,1,'2026-08-04 05:36:00','dolor de cabeza','estres','acetaminofen','','ACTIVO'),(6,8,2,'2026-08-04 01:41:00','dolor de cabeza','z','z','','ACTIVO');
/*!40000 ALTER TABLE `consulta_medica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `ID_EMPLEADO` int NOT NULL AUTO_INCREMENT,
  `NRO_DOCUMENTO` varchar(20) DEFAULT NULL,
  `NOMBRES` varchar(100) DEFAULT NULL,
  `APELLIDOS` varchar(100) DEFAULT NULL,
  `NACIMIENTO` date DEFAULT NULL,
  `ID_SEXO` int DEFAULT NULL,
  `ID_TIPOSANGRE` int DEFAULT NULL,
  `ID_ESTADOCIVIL` int DEFAULT NULL,
  `ID_UBIGEO` int DEFAULT NULL,
  `FECHA_CONTRATO` date DEFAULT NULL,
  `FOTO` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID_EMPLEADO`),
  UNIQUE KEY `NRO_DOCUMENTO` (`NRO_DOCUMENTO`),
  KEY `ID_SEXO` (`ID_SEXO`),
  KEY `ID_TIPOSANGRE` (`ID_TIPOSANGRE`),
  KEY `ID_ESTADOCIVIL` (`ID_ESTADOCIVIL`),
  KEY `ID_UBIGEO` (`ID_UBIGEO`),
  CONSTRAINT `empleado_ibfk_1` FOREIGN KEY (`ID_SEXO`) REFERENCES `sexo` (`ID_SEXO`),
  CONSTRAINT `empleado_ibfk_2` FOREIGN KEY (`ID_TIPOSANGRE`) REFERENCES `tiposangre` (`ID_TIPOSANGRE`),
  CONSTRAINT `empleado_ibfk_3` FOREIGN KEY (`ID_ESTADOCIVIL`) REFERENCES `estadocivil` (`ID_ESTADOCIVIL`),
  CONSTRAINT `empleado_ibfk_4` FOREIGN KEY (`ID_UBIGEO`) REFERENCES `ubigeo` (`ID_UBIGEO`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (1,'0801199001234','Juan','Pérez','1990-05-12',1,1,1,1,'2020-01-15','juan.jpg'),(2,'0801199505678','María','López ggg','1995-08-20',2,2,2,2,'2021-03-10','maria.jpg'),(5,'080119950003','Carlos','Ramírez','1995-09-08',1,3,1,3,'2019-11-01','carlos.jpg'),(6,'080119930004','Ana','Martínez','1993-02-14',2,4,3,4,'2022-06-25','ana.jpg'),(7,'080119910005','José','Hernández','1991-12-30',1,1,2,5,'2018-09-17','jose.jpg'),(12,NULL,'ggyg','xasdada',NULL,1,NULL,NULL,NULL,'2026-08-07',NULL),(13,NULL,'María','López',NULL,2,NULL,NULL,NULL,'2021-03-10',NULL),(14,NULL,'CARLOSdiaz','LOPEZ ',NULL,5,NULL,NULL,NULL,'2026-08-13',NULL),(15,NULL,'Carlso','PRuebas',NULL,1,NULL,NULL,NULL,'2026-08-12',NULL),(16,'12345678','Carlos','Gomez',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especialidad`
--

DROP TABLE IF EXISTS `especialidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `especialidad` (
  `ID_ESPECIALIDAD` int NOT NULL AUTO_INCREMENT,
  `ESPECIALIDAD` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID_ESPECIALIDAD`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especialidad`
--

LOCK TABLES `especialidad` WRITE;
/*!40000 ALTER TABLE `especialidad` DISABLE KEYS */;
INSERT INTO `especialidad` VALUES (1,'Medicina General'),(2,'Pediatría'),(3,'Cardiología'),(4,'Dermatología'),(5,'Ginecología'),(6,'Traumatología'),(7,'Neurología'),(8,'Oftalmología'),(9,'Psicología');
/*!40000 ALTER TABLE `especialidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadocivil`
--

DROP TABLE IF EXISTS `estadocivil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadocivil` (
  `ID_ESTADOCIVIL` int NOT NULL AUTO_INCREMENT,
  `ESTADOCIVIL` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID_ESTADOCIVIL`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadocivil`
--

LOCK TABLES `estadocivil` WRITE;
/*!40000 ALTER TABLE `estadocivil` DISABLE KEYS */;
INSERT INTO `estadocivil` VALUES (1,'Soltero'),(2,'Casado'),(3,'Soltero'),(4,'Casado'),(5,'Divorciado'),(6,'Viudo'),(7,'Unión Libre'),(8,'Separado'),(9,'Comprometido'),(10,'Soltero'),(11,'Casado'),(12,'Divorciado'),(13,'Viudo'),(14,'Unión Libre'),(15,'Separado'),(16,'Comprometido'),(17,'Soltero'),(18,'Casado'),(19,'Divorciado'),(20,'Viudo'),(21,'Unión Libre'),(22,'Separado'),(23,'Comprometido'),(24,'Soltero'),(25,'Casado'),(26,'Divorciado'),(27,'Viudo'),(28,'Unión Libre'),(29,'Separado'),(30,'Comprometido'),(31,'Soltero'),(32,'Casado'),(33,'Divorciado'),(34,'Viudo'),(35,'Unión Libre'),(36,'Separado'),(37,'Comprometido'),(38,'Soltero'),(39,'Casado'),(40,'Divorciado'),(41,'Viudo'),(42,'Unión Libre'),(43,'Separado'),(44,'Comprometido'),(45,'Soltero'),(46,'Casado'),(47,'Divorciado'),(48,'Viudo'),(49,'Unión Libre'),(50,'Separado'),(51,'Comprometido'),(52,'Soltero'),(53,'Soltero'),(54,'Casado'),(55,'Divorciado'),(56,'Viudo'),(57,'Unión Libre'),(58,'Separado'),(59,'Comprometido'),(60,'Soltero'),(61,'Casado'),(62,'Divorciado'),(63,'Viudo'),(64,'Unión Libre'),(65,'Separado'),(66,'Comprometido'),(67,'Soltero'),(68,'Casado'),(69,'Divorciado'),(70,'Viudo'),(71,'Unión Libre'),(72,'Separado'),(73,'Comprometido'),(74,'Soltero'),(75,'Casado'),(76,'Divorciado'),(77,'Viudo'),(78,'Unión Libre'),(79,'Separado'),(80,'Comprometido'),(81,'Soltero'),(82,'Casado'),(83,'Divorciado'),(84,'Viudo'),(85,'Unión Libre'),(86,'Separado'),(87,'Comprometido'),(88,'Soltero'),(89,'Casado'),(90,'Divorciado'),(91,'Viudo'),(92,'Unión Libre'),(93,'Separado'),(94,'Comprometido'),(95,'Soltero'),(96,'Casado'),(97,'Divorciado'),(98,'Viudo'),(99,'Unión Libre'),(100,'Separado'),(101,'Comprometido'),(102,'Soltero');
/*!40000 ALTER TABLE `estadocivil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historial_paciente`
--

DROP TABLE IF EXISTS `historial_paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historial_paciente` (
  `ID_HISTORIAL` int NOT NULL AUTO_INCREMENT,
  `ID_PACIENTE` int NOT NULL,
  `FECHA_CONSULTA` datetime DEFAULT CURRENT_TIMESTAMP,
  `MOTIVO_CONSULTA` varchar(500) DEFAULT NULL,
  `DIAGNOSTICO` text,
  `TRATAMIENTO` text,
  `MEDICAMENTOS` text,
  `PRESION_ARTERIAL` varchar(50) DEFAULT NULL,
  `TEMPERATURA` decimal(5,2) DEFAULT NULL,
  `FRECUENCIA_CARDIACA` int DEFAULT NULL,
  `PESO` decimal(10,2) DEFAULT NULL,
  `ESTATURA` decimal(10,2) DEFAULT NULL,
  `OBSERVACIONES` text,
  `ESTADO` varchar(20) DEFAULT 'ACTIVO',
  `ID_MEDICO` int DEFAULT NULL,
  PRIMARY KEY (`ID_HISTORIAL`),
  KEY `ID_PACIENTE` (`ID_PACIENTE`),
  CONSTRAINT `historial_paciente_ibfk_1` FOREIGN KEY (`ID_PACIENTE`) REFERENCES `paciente` (`ID_PACIENTE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historial_paciente`
--

LOCK TABLES `historial_paciente` WRITE;
/*!40000 ALTER TABLE `historial_paciente` DISABLE KEYS */;
/*!40000 ALTER TABLE `historial_paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `licencia_conduc`
--

DROP TABLE IF EXISTS `licencia_conduc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `licencia_conduc` (
  `ID_LICENCIA_CONDUCIR` int NOT NULL AUTO_INCREMENT,
  `LICENCIA` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID_LICENCIA_CONDUCIR`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `licencia_conduc`
--

LOCK TABLES `licencia_conduc` WRITE;
/*!40000 ALTER TABLE `licencia_conduc` DISABLE KEYS */;
INSERT INTO `licencia_conduc` VALUES (1,'Tipo A'),(2,'Tipo B'),(3,'LC001-A'),(4,'LC002-B'),(5,'LC003-C'),(6,'LC004-A'),(7,'LC005-B'),(8,'LC050-C');
/*!40000 ALTER TABLE `licencia_conduc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `ID_LOGIN` int NOT NULL AUTO_INCREMENT,
  `LOGIN` varchar(50) DEFAULT NULL,
  `CLAVE` varchar(255) DEFAULT NULL,
  `TIPO` varchar(20) DEFAULT NULL,
  `ACTUALIZADO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_LOGIN`),
  UNIQUE KEY `LOGIN` (`LOGIN`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'juanp','clave123','admin','2026-07-23 00:56:43'),(2,'marial','clave456','user','2026-07-23 00:56:43'),(3,'user1','pass1','admin','2026-07-23 02:39:27'),(4,'user2','pass2','empleado','2026-07-23 02:39:27'),(5,'user3','pass3','empleado','2026-07-23 02:39:27'),(6,'user4','pass4','admin','2026-07-23 02:39:27'),(7,'user50','pass50','empleado','2026-07-23 02:39:27');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medico`
--

DROP TABLE IF EXISTS `medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medico` (
  `ID_MEDICO` int NOT NULL AUTO_INCREMENT,
  `NOMBRES` varchar(100) DEFAULT NULL,
  `APELLIDOS` varchar(100) DEFAULT NULL,
  `CODIGO_MEDICO` varchar(50) DEFAULT NULL,
  `ID_ESPECIALIDAD` int DEFAULT NULL,
  `TELEFONO` varchar(50) DEFAULT NULL,
  `CORREO` varchar(100) DEFAULT NULL,
  `ESTADO` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID_MEDICO`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medico`
--

LOCK TABLES `medico` WRITE;
/*!40000 ALTER TABLE `medico` DISABLE KEYS */;
INSERT INTO `medico` VALUES (1,'Juan Carlos','Martinez','MED001',2,'99999999','juan@hospital.com','ACTIVO'),(2,'Maria Elena','Lopez','MED002',2,'98888888','maria@hospital.com','ACTIVO'),(3,'Ana','Frank','MED0003',1,'000000','111@11.com','ACTIVO');
/*!40000 ALTER TABLE `medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente` (
  `ID_PACIENTE` int NOT NULL AUTO_INCREMENT,
  `NRO_DOCUMENTO` varchar(20) DEFAULT NULL,
  `NOMBRES` varchar(100) DEFAULT NULL,
  `APELLIDOS` varchar(100) DEFAULT NULL,
  `FECHA_NACIMIENTO` date DEFAULT NULL,
  `ID_SEXO` int DEFAULT NULL,
  `ID_ESTADOCIVIL` int DEFAULT NULL,
  `ID_TIPOSANGRE` int DEFAULT NULL,
  `TELEFONO` varchar(20) DEFAULT NULL,
  `CELULAR` varchar(20) DEFAULT NULL,
  `CORREO` varchar(100) DEFAULT NULL,
  `DIRECCION` varchar(250) DEFAULT NULL,
  `PESO` decimal(10,2) DEFAULT NULL,
  `ESTATURA` decimal(10,2) DEFAULT NULL,
  `ALERGIAS` text,
  `ENFERMEDADES` text,
  `MEDICAMENTOS` text,
  `OBSERVACIONES` text,
  `FECHA_REGISTRO` datetime DEFAULT CURRENT_TIMESTAMP,
  `ESTADO` varchar(20) DEFAULT 'ACTIVO',
  PRIMARY KEY (`ID_PACIENTE`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
INSERT INTO `paciente` VALUES (2,'00000000000000','CARLOS','LOPEZ','2025-01-09',19,14,14,'97852211','97852211','1140259@usap.edu','san pedro sula',88.00,1.78,'ninguna','tos','panadol','ninguna','2026-08-02 12:04:43','ACTIVO'),(3,'0512198801377','ana','diaz','2023-01-02',18,19,15,'97852211','97852211','1140259@usap.edu','san pedro sula',78.00,1.77,'ninguna','tos','acetaminofen','ninguna','2026-08-02 12:07:01','ACTIVO'),(4,'00512198801678','ana','diaz','2026-07-27',20,17,7,'97852222','97852222','1140257@usap.edu','la lima',88.00,1.60,'nada','tos','acetominofen','ninguna','2026-08-02 12:08:21','ACTIVO'),(6,'05100101100','Maria','Lopez','1997-01-03',2,2,15,'','','','',100.00,1.80,'ninguna','hipertensa','','','2026-08-03 16:07:59','ACTIVO'),(7,'123434234','Francis','Mejia','1960-01-01',2,2,9,'','','','',70.00,1.80,'ninguno','ninguno','','','2026-08-03 17:36:17','ACTIVO'),(8,'987','jose','paz','2026-08-03',1,1,2,'','','','',100.00,1.70,'','','','','2026-08-03 19:40:25','ACTIVO');
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta_detalle`
--

DROP TABLE IF EXISTS `receta_detalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta_detalle` (
  `ID_DETALLE` int NOT NULL AUTO_INCREMENT,
  `ID_RECETA` int DEFAULT NULL,
  `MEDICAMENTO` varchar(200) DEFAULT NULL,
  `DOSIS` varchar(100) DEFAULT NULL,
  `FRECUENCIA` varchar(100) DEFAULT NULL,
  `DIAS` int DEFAULT NULL,
  PRIMARY KEY (`ID_DETALLE`),
  KEY `ID_RECETA` (`ID_RECETA`),
  CONSTRAINT `receta_detalle_ibfk_1` FOREIGN KEY (`ID_RECETA`) REFERENCES `receta_medica` (`ID_RECETA`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta_detalle`
--

LOCK TABLES `receta_detalle` WRITE;
/*!40000 ALTER TABLE `receta_detalle` DISABLE KEYS */;
INSERT INTO `receta_detalle` VALUES (1,1,'panadol','1 tableta','6 hora',5),(2,2,'panadol','2 tabletas','cada 6 horas',8),(3,3,'suero','1','diario',10),(4,4,'acetaminofen','1 tableta','cada 6 horas',4),(5,5,'acetaminofen','1 tableta','cada 6 horas',4),(6,6,'tt','tt','tt',1),(7,7,'tt','tt','tt',1),(8,8,'panadol','1','tableta',11);
/*!40000 ALTER TABLE `receta_detalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta_medica`
--

DROP TABLE IF EXISTS `receta_medica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta_medica` (
  `ID_RECETA` int NOT NULL AUTO_INCREMENT,
  `ID_CONSULTA` int DEFAULT NULL,
  `FECHA_RECETA` datetime DEFAULT CURRENT_TIMESTAMP,
  `INDICACIONES` text,
  PRIMARY KEY (`ID_RECETA`),
  KEY `ID_CONSULTA` (`ID_CONSULTA`),
  CONSTRAINT `receta_medica_consulta_fk` FOREIGN KEY (`ID_CONSULTA`) REFERENCES `consulta_medica` (`ID_CONSULTA`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta_medica`
--

LOCK TABLES `receta_medica` WRITE;
/*!40000 ALTER TABLE `receta_medica` DISABLE KEYS */;
INSERT INTO `receta_medica` VALUES (1,1,'2026-08-02 18:16:27',''),(2,1,'2026-08-02 18:32:09',''),(3,4,'2026-08-03 16:09:09',''),(4,5,'2026-08-03 17:38:21',''),(5,5,'2026-08-03 17:39:17',''),(6,5,'2026-08-03 17:42:35','qwasa'),(7,5,'2026-08-03 17:42:39','qwasa'),(8,1,'2026-08-03 21:19:36','');
/*!40000 ALTER TABLE `receta_medica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sexo`
--

DROP TABLE IF EXISTS `sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sexo` (
  `ID_SEXO` int NOT NULL AUTO_INCREMENT,
  `SEXO` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID_SEXO`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sexo`
--

LOCK TABLES `sexo` WRITE;
/*!40000 ALTER TABLE `sexo` DISABLE KEYS */;
INSERT INTO `sexo` VALUES (1,'Masculino'),(2,'Femenino'),(3,'Masculino'),(4,'Femenino'),(5,'Masculino'),(6,'Femenino'),(7,'Masculino'),(8,'Femenino'),(9,'Masculino'),(10,'Femenino'),(11,'Masculino'),(12,'Femenino'),(13,'Masculino'),(14,'Femenino'),(15,'Masculino'),(16,'Femenino'),(17,'Masculino'),(18,'Femenino'),(19,'Masculino'),(20,'Femenino'),(21,'Masculino'),(22,'Femenino'),(23,'Masculino'),(24,'Femenino'),(25,'Masculino'),(26,'Femenino'),(27,'Masculino'),(28,'Femenino'),(29,'Masculino'),(30,'Femenino'),(31,'Masculino'),(32,'Femenino'),(33,'Masculino'),(34,'Femenino'),(35,'Masculino'),(36,'Femenino'),(37,'Masculino'),(38,'Femenino'),(39,'Masculino'),(40,'Femenino'),(41,'Masculino'),(42,'Femenino'),(43,'Masculino'),(44,'Femenino'),(45,'Masculino'),(46,'Femenino'),(47,'Masculino'),(48,'Femenino'),(49,'Masculino'),(50,'Femenino'),(51,'Masculino'),(52,'Femenino');
/*!40000 ALTER TABLE `sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sueldo`
--

DROP TABLE IF EXISTS `sueldo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sueldo` (
  `ID_SUELDO` int NOT NULL AUTO_INCREMENT,
  `ID_CATEGORIA_PROFESIONAL` int DEFAULT NULL,
  `ID_CATEGORIA_EMPLEADO` int DEFAULT NULL,
  `HORAS_EXTRAS` int DEFAULT NULL,
  `HORAS_FALTAS` int DEFAULT NULL,
  `FECHA_SUELDO` date DEFAULT NULL,
  `NETO_PAGADO` decimal(10,2) DEFAULT NULL,
  `ACTUALIZADO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_SUELDO`),
  KEY `ID_CATEGORIA_PROFESIONAL` (`ID_CATEGORIA_PROFESIONAL`),
  KEY `ID_CATEGORIA_EMPLEADO` (`ID_CATEGORIA_EMPLEADO`),
  CONSTRAINT `sueldo_ibfk_1` FOREIGN KEY (`ID_CATEGORIA_PROFESIONAL`) REFERENCES `categoria_profe` (`ID_CATEGORIA_PROFESIONAL`),
  CONSTRAINT `sueldo_ibfk_2` FOREIGN KEY (`ID_CATEGORIA_EMPLEADO`) REFERENCES `categoriaemplea` (`ID_CATEGORIAEMPLEADO`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sueldo`
--

LOCK TABLES `sueldo` WRITE;
/*!40000 ALTER TABLE `sueldo` DISABLE KEYS */;
INSERT INTO `sueldo` VALUES (1,1,1,10,2,'2023-06-30',15000.00,'2026-07-23 00:56:07'),(2,2,2,5,0,'2023-06-30',25000.00,'2026-07-23 00:56:07');
/*!40000 ALTER TABLE `sueldo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiposangre`
--

DROP TABLE IF EXISTS `tiposangre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiposangre` (
  `ID_TIPOSANGRE` int NOT NULL AUTO_INCREMENT,
  `SANGRE` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ID_TIPOSANGRE`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiposangre`
--

LOCK TABLES `tiposangre` WRITE;
/*!40000 ALTER TABLE `tiposangre` DISABLE KEYS */;
INSERT INTO `tiposangre` VALUES (1,'O+'),(2,'A-'),(3,'A+'),(4,'A-'),(5,'B+'),(6,'B-'),(7,'O+'),(8,'O-'),(9,'AB+'),(10,'AB-'),(11,'A+'),(12,'A-'),(13,'B+'),(14,'B-'),(15,'O+'),(16,'O-'),(17,'AB+'),(18,'AB-'),(19,'A+'),(20,'A-'),(21,'B+'),(22,'B-'),(23,'O+'),(24,'O-'),(25,'AB+'),(26,'AB-'),(27,'A+'),(28,'A-'),(29,'B+'),(30,'B-'),(31,'O+'),(32,'O-'),(33,'AB+'),(34,'AB-'),(35,'A+'),(36,'A-'),(37,'B+'),(38,'B-'),(39,'O+'),(40,'O-'),(41,'AB+'),(42,'AB-'),(43,'A+'),(44,'A-'),(45,'B+'),(46,'B-'),(47,'O+'),(48,'O-'),(49,'AB+'),(50,'AB-');
/*!40000 ALTER TABLE `tiposangre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ubigeo`
--

DROP TABLE IF EXISTS `ubigeo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ubigeo` (
  `ID_UBIGEO` int NOT NULL AUTO_INCREMENT,
  `DEPARTAMENTO` varchar(100) DEFAULT NULL,
  `PROVINCIA` varchar(100) DEFAULT NULL,
  `DISTRITO` varchar(100) DEFAULT NULL,
  `ACTUALIZADO` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_UBIGEO`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ubigeo`
--

LOCK TABLES `ubigeo` WRITE;
/*!40000 ALTER TABLE `ubigeo` DISABLE KEYS */;
INSERT INTO `ubigeo` VALUES (1,'Cortés','San Pedro Sula','Centro','2026-07-23 00:55:29'),(2,'Atlántida','La Ceiba','Barrio Inglés','2026-07-23 00:55:29'),(3,'Cortés','San Pedro Sula','Chamelecón','2026-07-23 02:38:33'),(4,'Atlántida','La Ceiba','El Porvenir','2026-07-23 02:38:33'),(5,'Francisco Morazán','Tegucigalpa','Comayagüela','2026-07-23 02:38:33'),(6,'Yoro','El Progreso','Santa Rita','2026-07-23 02:38:33'),(7,'Colón','Trujillo','Balfate','2026-07-23 02:38:33'),(8,'Choluteca','Choluteca','El Corpus','2026-07-23 02:38:33'),(9,'Comayagua','Comayagua','Ajuterique','2026-07-23 02:38:33'),(10,'Copán','Santa Rosa','Cucuyagua','2026-07-23 02:38:33'),(11,'Intibucá','La Esperanza','Yamaranguila','2026-07-23 02:38:33'),(12,'La Paz','La Paz','Marcala','2026-07-23 02:38:33'),(13,'Valle','Nacaome','Langue','2026-07-23 02:38:33');
/*!40000 ALTER TABLE `ubigeo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `ID_USUARIO` int NOT NULL AUTO_INCREMENT,
  `USUARIO` varchar(50) DEFAULT NULL,
  `PASSWORD` varchar(255) DEFAULT NULL,
  `NOMBRE_COMPLETO` varchar(150) DEFAULT NULL,
  `ROL` varchar(50) DEFAULT NULL,
  `ESTADO` varchar(20) DEFAULT 'ACTIVO',
  PRIMARY KEY (`ID_USUARIO`),
  UNIQUE KEY `USUARIO` (`USUARIO`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (3,'admin','Admin123','Administrador General','ADMIN','ACTIVO'),(4,'doctor','Doctor123','Doctor General','MEDICO','ACTIVO');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-05 12:59:08
