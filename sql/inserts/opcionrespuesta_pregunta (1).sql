-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-03-2023 a las 18:59:22
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `testcasifinal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opcionrespuesta_pregunta`
--

CREATE TABLE `opcionrespuesta_pregunta` (
  `id_opcion_pregunta` int(11) NOT NULL,
  `id_opcion` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `opcionrespuesta_pregunta`
--

INSERT INTO `opcionrespuesta_pregunta` (`id_opcion_pregunta`, `id_opcion`, `id_pregunta`) VALUES
(1, 23, 20),
(2, 40, 13),
(3, 24, 14),
(4, 32, 12),
(5, 30, 1),
(6, 28, 12),
(7, 25, 11),
(8, 35, 4),
(9, 28, 3),
(10, 32, 2),
(11, 25, 10),
(12, 33, 15),
(13, 38, 16),
(14, 31, 5),
(15, 26, 8),
(16, 40, 1),
(17, 24, 8),
(18, 34, 18),
(19, 37, 18),
(20, 26, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `opcionrespuesta_pregunta`
--
ALTER TABLE `opcionrespuesta_pregunta`
  ADD PRIMARY KEY (`id_opcion_pregunta`),
  ADD KEY `id_opcion` (`id_opcion`),
  ADD KEY `id_pregunta` (`id_pregunta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `opcionrespuesta_pregunta`
--
ALTER TABLE `opcionrespuesta_pregunta`
  MODIFY `id_opcion_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `opcionrespuesta_pregunta`
--
ALTER TABLE `opcionrespuesta_pregunta`
  ADD CONSTRAINT `opcionRespuesta_pregunta_ibfk_1` FOREIGN KEY (`id_opcion`) REFERENCES `opcion_respuesta` (`id_opcion_respuesta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `opcionRespuesta_pregunta_ibfk_2` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id_pregunta`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
