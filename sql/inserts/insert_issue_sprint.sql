-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-03-2023 a las 19:34:31
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
-- Estructura de tabla para la tabla `issue_sprint`
--

CREATE TABLE `issue_sprint` (
  `id_issue_sprint` int(11) NOT NULL,
  `id_issue` varchar(50) NOT NULL,
  `id_sprint` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `issue_sprint`
--

INSERT INTO `issue_sprint` (`id_issue_sprint`, `id_issue`, `id_sprint`) VALUES
(1, '543fk4l1k5', 44),
(2, '772347', 41),
(3, 'kj5hk', 47),
(4, 'kj5hk', 53),
(5, 'HDXDXD', 41),
(6, '4919v3mm3', 42),
(7, 'CHESSE1234', 39),
(8, '123jjsd23', 46),
(9, 'kj5hk', 40),
(10, '234J1JJTK4', 1),
(11, '232345JJJJ', 46),
(12, 'Fadf2k3jj', 53),
(13, '234J2J11', 40),
(14, 'CHESSE1234', 46),
(15, '2134JH1JJ34', 51),
(16, '234J2J11', 50),
(17, '234J2J11', 54),
(18, '98243jkk', 40),
(19, '777hd13', 43),
(20, '232345JJJJ', 53),
(21, '543fk4l1k5', 44),
(22, '772347', 41),
(23, 'kj5hk', 47),
(24, 'kj5hk', 53),
(25, 'HDXDXD', 41),
(26, '4919v3mm3', 42),
(27, 'CHESSE1234', 39),
(28, '123jjsd23', 46),
(29, 'kj5hk', 40),
(30, '234J1JJTK4', 1),
(31, '232345JJJJ', 46),
(32, 'Fadf2k3jj', 53),
(33, '234J2J11', 40),
(34, 'CHESSE1234', 46),
(35, '2134JH1JJ34', 51),
(36, '234J2J11', 50),
(37, '234J2J11', 54),
(38, '98243jkk', 40),
(39, '777hd13', 43),
(40, '232345JJJJ', 53);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `issue_sprint`
--
ALTER TABLE `issue_sprint`
  ADD PRIMARY KEY (`id_issue_sprint`),
  ADD KEY `id_issue` (`id_issue`),
  ADD KEY `id_sprint` (`id_sprint`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `issue_sprint`
--
ALTER TABLE `issue_sprint`
  MODIFY `id_issue_sprint` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `issue_sprint`
--
ALTER TABLE `issue_sprint`
  ADD CONSTRAINT `issue_sprint_ibfk_1` FOREIGN KEY (`id_issue`) REFERENCES `issue` (`clave`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `issue_sprint_ibfk_2` FOREIGN KEY (`id_sprint`) REFERENCES `sprint` (`id_sprint`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
