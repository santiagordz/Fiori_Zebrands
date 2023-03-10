-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 10-03-2023 a las 17:32:17
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
  `nombre_sprint` int(11) NOT NULL,
  `id_reporte` int(11) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_fin` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sprint`
--

INSERT INTO `sprint` (`id_sprint`, `nombre_sprint`, `id_reporte`, `fecha_inicio`, `fecha_fin`) VALUES
(1, 2147483647, 1, '2023-03-01 17:14:24', '2023-03-02 17:14:24'),
(2, 2147483645, 2, '2023-03-05 15:00:00', '2023-03-07 23:00:00'),
(3, 214748361, 3, '2023-03-10 19:00:00', '2023-03-13 00:00:00'),
(4, 214748333, 4, '2023-03-15 16:00:00', '2023-03-17 22:00:00'),
(5, 2137483647, 5, '2023-03-24 17:23:31', '2023-03-31 17:23:31'),
(6, 2137473647, 6, '2023-03-21 17:24:15', '2023-03-24 17:24:15'),
(7, 2147223647, 7, '2023-03-21 17:24:15', '2023-04-20 17:24:15'),
(9, 214748361, 8, '2023-03-10 19:00:00', '2023-03-13 00:00:00'),
(10, 237483147, 10, '2023-03-18 17:25:37', '2023-05-27 17:25:37'),
(11, 47483647, 11, '2023-04-19 17:26:03', '2023-05-05 17:26:03'),
(12, 21474, 12, '2023-03-11 17:26:03', '2023-03-19 17:26:03'),
(13, 2147113647, 13, '2023-04-01 17:26:03', '2023-04-02 17:26:03'),
(14, 147489647, 14, '2023-04-02 17:27:59', '2023-04-03 17:27:59'),
(15, 2142283647, 15, '2023-03-17 17:27:59', '2023-03-18 17:27:59'),
(16, 213647, 16, '2023-06-01 17:28:51', '2023-06-02 17:28:51'),
(17, 2147481111, 17, '2023-03-28 17:29:11', '2023-03-29 17:29:11'),
(18, 2122483647, 18, '2023-03-25 17:29:27', '2023-03-31 17:29:27'),
(19, 2117411647, 19, '2023-03-19 17:30:53', '2023-03-20 17:30:53'),
(20, 1111483647, 20, '2023-04-11 17:31:31', '2023-04-13 17:31:31'),
(23, 214748361, 10, '2023-03-10 19:00:00', '2023-03-13 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `sprint`
--
ALTER TABLE `sprint`
  ADD PRIMARY KEY (`id_sprint`),
  ADD KEY `id_reporte` (`id_reporte`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
