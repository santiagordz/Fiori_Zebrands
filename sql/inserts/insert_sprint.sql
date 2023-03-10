-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 10-03-2023 a las 18:06:07
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
-- Estructura de tabla para la tabla `sprint`
--

CREATE TABLE `sprint` (
  `id_sprint` int(11) NOT NULL,
  `nombre_sprint` varchar(100) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_fin` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_reporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sprint`
--

INSERT INTO `sprint` (`id_sprint`, `nombre_sprint`, `fecha_inicio`, `fecha_fin`, `id_reporte`) VALUES
(1, 'Sprint1', '2022-01-01 17:44:25', '2022-01-15 17:44:25', 2),
(2, 'Sprint1', '2022-01-01 17:44:25', '2022-01-15 17:44:25', 2),
(39, 'Sprint 2', '2022-01-15 17:45:50', '2023-03-30 17:45:50', 3),
(40, 'Sprint 3', '2022-01-30 17:45:50', '2022-02-15 17:45:50', 4),
(41, 'Sprint 4', '2022-02-15 17:49:51', '2022-03-01 17:49:51', 5),
(42, 'Sprint 5', '2022-03-01 17:50:57', '2023-03-15 17:50:57', 6),
(43, 'Sprint 6', '2022-04-15 16:52:32', '2022-04-30 16:52:32', 7),
(44, 'Sprint 7', '2022-05-01 16:53:59', '2022-05-15 16:53:59', 8),
(45, 'Sprint 8', '2023-05-16 17:54:38', '2022-06-30 16:54:38', 9),
(46, 'Sprint 9', '2022-07-15 16:55:12', '2022-07-30 16:55:12', 10),
(47, 'Sprint 10', '2022-08-01 16:56:11', '2022-08-15 16:56:11', 11),
(48, 'Sprint 11', '2022-08-15 16:56:38', '2022-08-30 16:56:38', 12),
(49, 'Sprint 12', '2022-09-01 16:57:47', '2022-08-15 16:57:47', 13),
(50, 'Sprint 13', '2022-09-15 16:58:13', '2022-09-30 16:58:13', 14),
(51, 'Sprint 14', '2022-10-01 16:58:55', '2022-10-15 16:58:55', 15),
(52, 'Sprint 15', '2022-10-15 16:59:31', '2022-10-30 17:59:31', 16),
(53, 'Sprint 16', '2022-11-01 18:01:03', '2022-11-15 18:01:03', 17),
(54, 'Sprint 18', '2022-11-15 18:01:30', '2022-11-30 18:01:30', 18),
(55, 'Sprint 19', '2022-12-01 18:01:55', '2022-12-15 18:01:55', 20),
(56, 'Sprint 20', '2022-12-15 18:02:38', '2022-12-30 18:02:38', 21);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `sprint`
--
ALTER TABLE `sprint`
  ADD PRIMARY KEY (`id_sprint`),
  ADD KEY `id_reporte` (`id_reporte`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `sprint`
--
ALTER TABLE `sprint`
  MODIFY `id_sprint` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `sprint`
--
ALTER TABLE `sprint`
  ADD CONSTRAINT `sprint_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reporte` (`id_reporte`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
