-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 10-03-2023 a las 18:30:16
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Zebrands`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprint_epic`
--

CREATE TABLE `sprint_epic` (
  `id_sprint_epic` int(11) NOT NULL,
  `id_sprint` int(11) NOT NULL,
  `id_epic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sprint_epic`
--

INSERT INTO `sprint_epic` (`id_sprint_epic`, `id_sprint`, `id_epic`) VALUES
(1, 2, 1),
(2, 1, 2),
(3, 39, 3),
(4, 40, 4),
(5, 41, 5),
(6, 42, 6),
(7, 43, 7),
(8, 44, 8),
(9, 45, 9),
(10, 46, 10),
(11, 47, 11),
(12, 48, 12),
(13, 49, 13),
(14, 50, 14),
(15, 51, 15),
(16, 52, 16),
(17, 53, 17),
(18, 54, 18),
(19, 55, 19),
(20, 56, 20);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `sprint_epic`
--
ALTER TABLE `sprint_epic`
  ADD PRIMARY KEY (`id_sprint_epic`),
  ADD KEY `id_sprint` (`id_sprint`),
  ADD KEY `id_epic` (`id_epic`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `sprint_epic`
--
ALTER TABLE `sprint_epic`
  MODIFY `id_sprint_epic` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `sprint_epic`
--
ALTER TABLE `sprint_epic`
  ADD CONSTRAINT `sprint_epic_ibfk_1` FOREIGN KEY (`id_sprint`) REFERENCES `sprint` (`id_sprint`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sprint_epic_ibfk_2` FOREIGN KEY (`id_epic`) REFERENCES `epic` (`id_epic`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
