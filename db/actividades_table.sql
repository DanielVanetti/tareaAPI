SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "America/Costa_Rica";

CREATE DATABASE IF NOT EXISTS eventosdb;
USE eventosdb;

CREATE TABLE IF NOT EXISTS cliente (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(50) NOT NULL,
  apellido1 varchar(40) NOT NULL,
  apellido2 varchar(40) DEFAULT NULL,
  correo varchar(80) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY correo (correo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS actividad (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(50) NOT NULL,
  fecha date NOT NULL,
  descripcion text DEFAULT NULL,
  cupo int(11) NOT NULL,
  cliente int(11) NOT NULL,
  FOREIGN KEY (cliente) REFERENCES cliente(id),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO cliente (nombre, apellido1, apellido2, correo)
VALUES
  ('Juan', 'Pérez', 'Gómez', 'juan.perez@example.com'),
  ('Ana', 'Martínez', 'López', 'ana.martinez@example.com'),
  ('Carlos', 'Gómez', 'Sánchez', 'carlos.gomez@example.com'),
  ('Lucía', 'Rodríguez', NULL, 'lucia.rodriguez@example.com'),
  ('Marta', 'Hernández', 'Pérez', 'marta.hernandez@example.com');

INSERT INTO actividad (nombre, fecha, descripcion, cupo, cliente)
VALUES
   ('Concierto de Rock', '2025-03-15', 'Un concierto de rock en vivo.', 500, 1), 
  ('Conferencia de Tecnología', '2025-04-01', 'Conferencia sobre el futuro de la tecnología.', 200, 2), 
  ('Maratón Solidario', '2025-05-20', 'Un maratón para recaudar fondos para la caridad.', 300, 1),
  ('Exposición de Arte', '2025-06-10', 'Exposición de artistas locales.', 100, 4),  
  ('Feria Gastronómica', '2025-07-25', 'Feria de comida típica regional.', 150, 2);   

COMMIT;
