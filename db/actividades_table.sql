SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "America/Costa_Rica";

--
-- Verificar si la base de datos eventosdb existe
--
CREATE DATABASE IF NOT EXISTS eventosdb;
USE eventosdb;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla actividad
--
CREATE TABLE IF NOT EXISTS actividad (
  id int(11) NOT NULL,
  nombre varchar(50) NOT NULL,
  fecha date NOT NULL,
  descripcion text DEFAULT NULL,
  cliente int(11) NOT NULL,
  FOREIGN KEY (cliente) REFERENCES cliente(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla cliente
--
CREATE TABLE IF NOT EXISTS cliente (
  id int(11) NOT NULL,
  nombre varchar(50) NOT NULL,
  apellido1 varchar(40) NOT NULL,
  apellido2 varchar(40) DEFAULT NULL,
  correo varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

ALTER TABLE actividad
  ADD PRIMARY KEY (id);

ALTER TABLE cliente
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY correo (correo);

ALTER TABLE actividad
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE cliente
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
