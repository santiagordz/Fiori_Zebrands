-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-03-2023 a las 18:44:50
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
-- Estructura de tabla para la tabla `usuario_respuesta`
--

CREATE TABLE `usuario_respuesta` (
  `id_usuario_respuesta` int(11) NOT NULL,
  `id_usuario` varchar(100) NOT NULL,
  `id_respuesta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_respuesta`
--

INSERT INTO `usuario_respuesta` (`id_usuario_respuesta`, `id_usuario`, `id_respuesta`) VALUES
(1, 'ana.castillo@zeb.mx', 24),
(2, 'ana.gonzalez@zeb.mx', 29),
(3, 'ana.rojas@zeb.mx', 29),
(4, 'carlos.rodriguez@zeb.mx', 42),
(5, 'david.martinez@zeb.mx', 26),
(6, 'emilio.gonzalez@zeb.mx', 36),
(7, 'fernando.lopez@zeb.mx', 30),
(8, 'jane.doe@zeb.mx', 23),
(9, 'john.smith@zeb.mx', 23),
(10, 'jorge.lopez@zeb.mx', 28),
(11, 'laura.sanchez@zeb.mx', 32),
(12, 'liliana.perez@zeb.mx', 33),
(13, 'luis.hernandez@zeb.mx', 31),
(14, 'luis.hernandez@zeb.mx', 40),
(15, 'maria.garcia@zeb.mx', 41),
(16, 'mario.castillo@zeb.mx', 25),
(17, 'sofia.ramirez@zeb.mx', 37),
(18, 'sara.perez@zeb.mx', 27),
(19, 'mario.castillo@zeb.mx', 40),
(20, 'martha.ortiz@zeb.mx', 23);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario_respuesta`
--
ALTER TABLE `usuario_respuesta`
  ADD PRIMARY KEY (`id_usuario_respuesta`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_respuesta` (`id_respuesta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario_respuesta`
--
ALTER TABLE `usuario_respuesta`
  MODIFY `id_usuario_respuesta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuario_respuesta`
--
ALTER TABLE `usuario_respuesta`
  ADD CONSTRAINT `usuario_respuesta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`correo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_respuesta_ibfk_2` FOREIGN KEY (`id_respuesta`) REFERENCES `respuesta` (`id_respuesta`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
