-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-03-2023 a las 04:27:26
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
-- Base de datos: `Zebrands`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiqueta`
--

CREATE TABLE `etiqueta` (
  `id_etiqueta` int(11) NOT NULL,
  `nombre_etiqueta` varchar(50) NOT NULL,
  `color_etiqueta` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `etiqueta`
--

INSERT INTO `etiqueta` (`id_etiqueta`, `nombre_etiqueta`, `color_etiqueta`) VALUES
(1, 'front-end', 'rojo'),
(2, 'back-end', 'verde'),
(3, 'base-de-datos', 'azul'),
(4, 'seguridad', 'naranja'),
(5, 'redes', 'rosa'),
(6, 'cloud', 'gris'),
(7, 'devops', 'amarillo'),
(8, 'python', 'verde'),
(9, 'javascript', 'amarillo'),
(10, 'java', 'azul'),
(11, 'c++', 'rojo'),
(12, 'php', 'morado'),
(13, 'ruby', 'rosa'),
(14, 'swift', 'naranja'),
(15, 'sql', 'azul'),
(16, 'docker', 'gris'),
(17, 'kubernetes', 'verde'),
(18, 'machine-learning', 'rojo'),
(19, 'big-data', 'azul'),
(20, 'blockchain', 'amarillo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `etiqueta`
--
ALTER TABLE `etiqueta`
  ADD PRIMARY KEY (`id_etiqueta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `etiqueta`
--
ALTER TABLE `etiqueta`
  MODIFY `id_etiqueta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
