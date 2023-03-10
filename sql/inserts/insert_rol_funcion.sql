-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-03-2023 a las 19:21:53
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
-- Estructura de tabla para la tabla `rol_funcion`
--

CREATE TABLE `rol_funcion` (
  `id_rol_funcion` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `id_funcion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol_funcion`
--

INSERT INTO `rol_funcion` (`id_rol_funcion`, `id_rol`, `id_funcion`) VALUES
(1, 11, 22),
(2, 18, 21),
(3, 20, 21),
(4, 15, 29),
(5, 17, 30),
(6, 14, 24),
(7, 19, 27),
(8, 12, 39),
(9, 16, 35),
(10, 13, 33),
(11, 14, 28),
(12, 12, 37),
(13, 13, 37),
(14, 14, 25),
(15, 19, 25),
(16, 14, 23),
(17, 18, 40),
(18, 11, 31),
(19, 20, 26),
(20, 15, 34);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `rol_funcion`
--
ALTER TABLE `rol_funcion`
  ADD PRIMARY KEY (`id_rol_funcion`),
  ADD KEY `id_rol` (`id_rol`),
  ADD KEY `id_funcion` (`id_funcion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `rol_funcion`
--
ALTER TABLE `rol_funcion`
  MODIFY `id_rol_funcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `rol_funcion`
--
ALTER TABLE `rol_funcion`
  ADD CONSTRAINT `rol_funcion_ibk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rol_funcion_ibk_2` FOREIGN KEY (`id_funcion`) REFERENCES `funcion` (`id_funcion`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
