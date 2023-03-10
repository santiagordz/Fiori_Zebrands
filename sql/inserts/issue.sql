-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-03-2023 a las 19:25:58
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fiori_prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `issue`
--

CREATE TABLE `issue` (
  `clave` varchar(50) NOT NULL,
  `prioridad` varchar(50) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `responsable` varchar(100) NOT NULL,
  `stoty_points` int(11) NOT NULL,
  `id_epic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `issue`
--

INSERT INTO `issue` (`clave`, `prioridad`, `tipo`, `responsable`, `stoty_points`, `id_epic`) VALUES
('123jjsd23', 'Baja', 'Story', 'Frida', 1, 7),
('134hjh2h3', 'Baja', 'Story', 'Azul', 3, 12),
('2134JH1JJ34', 'Alta', 'Bug', 'Ian', 2, 14),
('232345JJJJ', 'Alta', 'Bug', 'Santiago', 2, 28),
('234J1JJTK4', 'Baja', 'Story', 'Sebastian', 3, 40),
('234J2J11', 'Baja', 'Story', 'Frida Bailleres', 6, 3),
('345jkf8', 'Media', 'Story', 'Olga', 3, 12),
('4919v3mm3', 'Media', 'Story', 'David', 2, 40),
('543fk4l1k5', 'Alta', 'Epic', 'Marco', 3, 12),
('772347', 'Baja', 'Epic', 'China', 2, 19),
('777hd13', 'Media', 'Bug', 'Carlos', 2, 39),
('8984753987H', 'Media', 'Bug', 'Dante', 4, 32),
('98243jkk', 'Media', 'Bug', 'Juan Pablo', 2, 22),
('ad5sf4a5ds4f', 'Alta', 'Epic', 'Martha', 5, 2),
('CHESSE1234', 'Alta', 'Story', 'Flores', 3, 40),
('Fadf2k3jj', 'Baja', 'Epic', 'Juanito', 3, 18),
('HDXDXD', 'Baja', 'Spring', 'Juan Pablo', 1, 19),
('kj5hk', 'Media', 'Spring', 'Bauer', 2, 19),
('LOLOL2234', 'Alta', 'Bug', 'Frix', 3, 33),
('SAD2H34H', 'Baja', 'Bug', 'Alan', 2, 34);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `issue`
--
ALTER TABLE `issue`
  ADD PRIMARY KEY (`clave`),
  ADD KEY `id_epic` (`id_epic`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `issue`
--
ALTER TABLE `issue`
  ADD CONSTRAINT `issue_ibfk_1` FOREIGN KEY (`id_epic`) REFERENCES `epic` (`id_epic`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
