-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-03-2023 a las 18:34:02
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
-- Estructura de tabla para la tabla `usuario_etiqueta`
--

CREATE TABLE `usuario_etiqueta` (
  `id_usuario_etiqueta` int(11) NOT NULL,
  `id_usuario` varchar(100) NOT NULL,
  `id_etiqueta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_etiqueta`
--

INSERT INTO `usuario_etiqueta` (`id_usuario_etiqueta`, `id_usuario`, `id_etiqueta`) VALUES
(3, 'ana.castillo@zeb.mx', 22),
(4, 'ana.gonzalez@zeb.mx', 23),
(5, 'ana.rojas@zeb.mx', 39),
(6, 'carlos.rodriguez@zeb.mx', 40),
(7, 'david.martinez@zeb.mx', 26),
(8, 'emilio.gonzalez@zeb.mx', 31),
(9, 'fernando.lopez@zeb.mx', 27),
(10, 'jane.doe@zeb.mx', 36),
(11, 'john.smith@zeb.mx', 21),
(12, 'jorge.lopez@zeb.mx', 30),
(13, 'juan.ramirez@zeb.mx', 37),
(14, 'laura.sanchez@zeb.mx', 29),
(15, 'liliana.perez@zeb.mx', 38),
(16, 'luis.hernandez@zeb.mx', 32),
(18, 'maria.garcia@zeb.mx', 25),
(19, 'martha.ortiz@zeb.mx', 24),
(20, 'sara.perez@zeb.mx', 35),
(21, 'sofia.ramirez@zeb.mx', 34);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario_etiqueta`
--
ALTER TABLE `usuario_etiqueta`
  ADD PRIMARY KEY (`id_usuario_etiqueta`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_etiqueta` (`id_etiqueta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario_etiqueta`
--
ALTER TABLE `usuario_etiqueta`
  MODIFY `id_usuario_etiqueta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuario_etiqueta`
--
ALTER TABLE `usuario_etiqueta`
  ADD CONSTRAINT `usuario_etiqueta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`correo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_etiqueta_ibfk_2` FOREIGN KEY (`id_etiqueta`) REFERENCES `etiqueta` (`id_etiqueta`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
