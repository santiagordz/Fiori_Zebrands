-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-03-2023 a las 19:40:05
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
-- Estructura de tabla para la tabla `epic`
--

CREATE TABLE `epic` (
  `id_epic` int(11) NOT NULL,
  `nombre_epic` varchar(100) NOT NULL,
  `resumen_epic` varchar(500) NOT NULL,
  `color_epic` varchar(50) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_fin` timestamp NULL DEFAULT NULL,
  `id_reporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `epic`
--

INSERT INTO `epic` (`id_epic`, `nombre_epic`, `resumen_epic`, `color_epic`, `fecha_inicio`, `fecha_fin`, `id_reporte`) VALUES
(1, 'Epic1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Verde', '2023-03-10 23:56:32', '2023-03-10 23:28:03', 12),
(2, 'Epic epico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Cafe', '2023-03-10 23:56:32', '2023-03-27 23:29:42', 17),
(3, 'Epic super epico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Azul', '2023-03-10 23:56:32', '2023-03-01 23:29:42', 19),
(4, 'Epic5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Amarillo', '2023-03-10 23:56:32', '2023-03-31 23:29:42', 14),
(5, 'Epico sprint', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Morado', '2023-03-10 23:56:32', '2023-03-25 23:29:42', 5),
(6, 'Epic8', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Carmesi', '2023-03-10 23:56:32', '2023-03-27 23:29:42', 18),
(7, 'Epic10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Azul Rey', '2023-03-10 23:56:32', NULL, 9),
(8, 'Epic front 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Morado', '2023-03-10 23:56:32', NULL, 6),
(9, 'Epic SEMANA1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Marron', '2023-03-10 23:56:32', '2023-03-04 23:29:42', 8),
(10, 'Epics23', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'AzulClaro', '2023-03-10 23:56:32', '2023-03-19 23:29:42', 15),
(11, 'Epic 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Amarillo opaco', '2023-03-10 23:56:32', NULL, 11),
(12, 'Epic 123', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Gris', '2023-03-10 23:56:32', NULL, 16),
(13, 'Epic Tareas importantes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Gris oscuro', '2023-03-10 23:56:32', NULL, 12),
(14, 'EpicEstadisticas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Rojo ferrari', '2023-03-10 23:56:32', NULL, 8),
(15, 'Epic Materias', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Rojo marlboro', '2023-03-10 23:56:32', NULL, 4),
(16, 'Epic muy importante', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Negro', '2023-03-10 23:56:32', '2023-03-31 23:29:43', 18),
(17, 'Epic0002', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'AzulMarino', '2023-03-10 23:56:32', '2023-04-11 21:29:43', 18),
(18, 'Epica sin nombre', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Rosa', '2023-03-10 23:56:32', '2023-03-12 23:29:43', 7),
(19, 'Epic 9999', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Violeta', '2023-03-10 23:56:32', '2023-03-26 23:29:43', 4),
(20, 'Epic3812838', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Cafe clarito', '2023-03-10 23:56:32', '2023-03-31 23:29:43', 7),
(21, 'Epic1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Verde', '2023-03-10 23:58:04', '2023-03-10 23:28:03', 12),
(22, 'Epic epico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Cafe', '2023-03-10 23:58:04', '2023-03-27 23:29:42', 17),
(23, 'Epic super epico', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Azul', '2023-03-10 23:58:04', '2023-03-01 23:29:42', 19),
(24, 'Epic5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Amarillo', '2023-03-10 23:58:04', '2023-03-31 23:29:42', 14),
(25, 'Epico sprint', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Morado', '2023-03-10 23:58:04', '2023-03-25 23:29:42', 5),
(26, 'Epic8', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Carmesi', '2023-03-10 23:58:04', '2023-03-27 23:29:42', 18),
(27, 'Epic10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Azul Rey', '2023-03-10 23:58:04', NULL, 9),
(28, 'Epic front 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Morado', '2023-03-10 23:58:04', NULL, 6),
(29, 'Epic SEMANA1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Marron', '2023-03-10 23:58:04', '2023-03-04 23:29:42', 8),
(30, 'Epics23', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'AzulClaro', '2023-03-10 23:58:04', '2023-03-19 23:29:42', 15),
(31, 'Epic 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Amarillo opaco', '2023-03-10 23:58:04', NULL, 11),
(32, 'Epic 123', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Gris', '2023-03-10 23:58:04', NULL, 16),
(33, 'Epic Tareas importantes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Gris oscuro', '2023-03-10 23:58:04', NULL, 12),
(34, 'EpicEstadisticas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Rojo ferrari', '2023-03-10 23:58:04', NULL, 8),
(35, 'Epic Materias', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Rojo marlboro', '2023-03-10 23:58:04', NULL, 4),
(36, 'Epic muy importante', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Negro', '2023-03-10 23:58:04', '2023-03-31 23:29:43', 18),
(37, 'Epic0002', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'AzulMarino', '2023-03-10 23:58:04', '2023-04-11 21:29:43', 18),
(38, 'Epica sin nombre', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Rosa', '2023-03-10 23:58:04', '2023-03-12 23:29:43', 7),
(39, 'Epic 9999', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Violeta', '2023-03-10 23:58:04', '2023-03-26 23:29:43', 4),
(40, 'Epic3812838', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'Cafe clarito', '2023-03-10 23:58:04', '2023-03-31 23:29:43', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiqueta`
--

CREATE TABLE `etiqueta` (
  `id_etiqueta` int(11) NOT NULL,
  `nombre_etiqueta` varchar(50) NOT NULL,
  `color_etiqueta` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `etiqueta`
--

INSERT INTO `etiqueta` (`id_etiqueta`, `nombre_etiqueta`, `color_etiqueta`) VALUES
(21, 'front-end', 0),
(22, 'back-end', 0),
(23, 'base-de-datos', 0),
(24, 'seguridad', 0),
(25, 'redes', 0),
(26, 'cloud', 0),
(27, 'devops', 0),
(28, 'python', 0),
(29, 'javascript', 0),
(30, 'java', 0),
(31, 'c++', 0),
(32, 'php', 0),
(33, 'ruby', 0),
(34, 'swift', 0),
(35, 'sql', 0),
(36, 'docker', 0),
(37, 'kubernetes', 0),
(38, 'machine-learning', 0),
(39, 'big-data', 0),
(40, 'blockchain', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funcion`
--

CREATE TABLE `funcion` (
  `id_funcion` int(11) NOT NULL,
  `nombre_funcion` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `funcion`
--

INSERT INTO `funcion` (`id_funcion`, `nombre_funcion`) VALUES
(21, 'Crear Sprint Backlog'),
(22, 'Asignar Tareas'),
(23, 'Realizar Pruebas de Integración'),
(24, 'Escribir Documentación'),
(25, 'Realizar Pruebas de Aceptación'),
(26, 'Realizar Revisión de Código'),
(27, 'Estimar Tareas'),
(28, 'Planificar Iteraciones'),
(29, 'Definir Historias de Usuario'),
(30, 'Desplegar Aplicación'),
(31, 'Realizar Pruebas Unitarias'),
(32, 'Realizar Pruebas de Regresión'),
(33, 'Gestionar Requerimientos'),
(34, 'Realizar Reuniones de Equipo'),
(35, 'Gestionar Incidencias'),
(36, 'Configurar Ambiente de Desarrollo'),
(37, 'Realizar Capacitación del Equipo'),
(38, 'Realizar Estudios de Factibilidad'),
(39, 'Gestionar Cambios de Requerimientos'),
(40, 'Realizar Pruebas de Usabilidad');

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opcionrespuesta_pregunta`
--

CREATE TABLE `opcionrespuesta_pregunta` (
  `id_opcion_pregunta` int(11) NOT NULL,
  `id_opcion` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opcion_respuesta`
--

CREATE TABLE `opcion_respuesta` (
  `id_opcion_respuesta` int(11) NOT NULL,
  `opcion_respuesta` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `opcion_respuesta`
--

INSERT INTO `opcion_respuesta` (`id_opcion_respuesta`, `opcion_respuesta`) VALUES
(21, 'puede ser'),
(22, 'no'),
(23, 'feliz'),
(24, 'mas tiempo'),
(25, 'si'),
(26, 'mejor'),
(27, 'mas esfuerzo'),
(28, 'puede ser'),
(29, 'feliz'),
(30, 'no'),
(31, 'si'),
(32, 'mejor'),
(33, 'mas tiempo'),
(34, 'mas esfuerzo'),
(35, 'puede ser'),
(36, 'feliz'),
(37, 'no'),
(38, 'mejor'),
(39, 'mas tiempo'),
(40, 'mas esfuerzo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `id_pregunta` int(11) NOT NULL,
  `pregunta` varchar(500) NOT NULL,
  `predeterminada` tinyint(1) NOT NULL,
  `id_tipo_pregunta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`id_pregunta`, `pregunta`, `predeterminada`, `id_tipo_pregunta`) VALUES
(1, 'Como te sentiste en este sprint?', 1, 14),
(2, 'Te gustó este sprint?', 1, 15),
(3, 'Dime tu opinión del sprint', 1, 11),
(4, 'Crees que hubo mejora a comparacion con el pasado?', 1, 11),
(5, 'Selecciona lo que aplique:', 0, 14),
(6, 'Del 1 al 5, que tanto has disfrutado este epic', 1, 14),
(7, 'Como te sentiste en este epic?', 1, 14),
(8, 'Te gustó este epic?', 1, 15),
(9, 'Crees que hubo mejora a comparacion con el pasado?', 1, 11),
(10, 'Tienes buenos amigos en la empresa?', 0, 15),
(11, 'Consideras el epic adecuado?', 0, 11),
(12, 'Consideras alguna mejora en el avance?', 0, 11),
(13, 'Como sentiste el trabajo colaborativo?', 1, 14),
(14, 'Como sentiste la carga de trabajo?', 1, 14),
(15, 'Te sientes comodo en tu equipo?', 1, 14),
(16, 'Te sentiste enojado?', 0, 15),
(17, 'Te sentiste ansioso?', 0, 15),
(18, 'Te sentiste triste?', 0, 15),
(19, 'Te sentiste feliz?', 0, 15),
(20, 'Alguna cosa que quieras implementar?', 1, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte`
--

CREATE TABLE `reporte` (
  `id_reporte` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `archivo_texto` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reporte`
--

INSERT INTO `reporte` (`id_reporte`, `fecha`, `archivo_texto`) VALUES
(2, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(3, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(4, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(5, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(6, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(7, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(8, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(9, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(10, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(11, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(12, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(13, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(14, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(15, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(16, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(17, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(18, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(19, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(20, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"'),
(21, '2023-03-10 16:23:04', '\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta`
--

CREATE TABLE `respuesta` (
  `id_respuesta` int(11) NOT NULL,
  `respuesta` varchar(1000) NOT NULL,
  `anonimo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `respuesta`
--

INSERT INTO `respuesta` (`id_respuesta`, `respuesta`, `anonimo`) VALUES
(22, 'Me sentí muy satisfecho con el trabajo realizado durante este sprint.', 0),
(23, 'Me siento cansado después de este sprint, pero orgulloso de lo que hemos logrado.', 1),
(24, 'Estoy contento con los resultados de este sprint y me siento motivado para seguir trabajando.', 0),
(25, 'Realmente no me gusta trabajar en sprints tan cortos, me siento presionado y estresado.', 1),
(26, 'Me sentí un poco abrumado al principio, pero al final del sprint, me sentí satisfecho con lo que logramos.', 0),
(27, 'Siento que este sprint fue muy difícil y no estoy seguro de si pudimos cumplir con todas las tareas.', 1),
(28, 'Me siento feliz y emocionado por todo lo que hemos logrado durante este sprint.', 0),
(29, 'Estoy un poco decepcionado con los resultados de este sprint y siento que podríamos haber hecho más.', 1),
(30, 'Me sentí un poco agobiado durante este sprint, pero estoy contento con los resultados finales.', 0),
(31, 'Siento que este sprint fue demasiado fácil y me gustaría tener más desafíos en el futuro.', 1),
(32, 'Me siento muy motivado y entusiasmado después de este sprint.', 0),
(33, 'Realmente no me gusta trabajar en equipo durante los sprints y prefiero trabajar solo.', 1),
(34, 'Me siento muy orgulloso de mi equipo y de lo que hemos logrado durante este sprint.', 0),
(35, 'Siento que el sprint fue demasiado corto y no tuvimos suficiente tiempo para completar todas las tareas.', 1),
(36, 'Me sentí un poco abrumado al principio, pero al final del sprint, me sentí satisfecho con lo que logramos.', 0),
(37, 'Siento que hubo muchos obstáculos durante este sprint que nos impidieron lograr nuestras metas.', 1),
(38, 'Estoy contento con mi desempeño durante este sprint y siento que he aprendido mucho.', 0),
(39, 'Me siento frustrado porque no pudimos completar todas las tareas que nos propusimos para este sprint.', 1),
(40, 'Me siento muy motivado para mejorar en las áreas en las que no me fue tan bien durante este sprint.', 0),
(41, 'Siento que la comunicación en el equipo no fue buena durante este sprint y eso nos afectó negativamente.', 1),
(42, 'Me sentí muy cómodo trabajando con mi equipo durante este sprint y creo que hicimos un buen trabajo juntos.', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta_pregunta_retrospectiva`
--

CREATE TABLE `respuesta_pregunta_retrospectiva` (
  `id_rpr` int(11) NOT NULL,
  `id_respuesta` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `id_retrospectiva` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `respuesta_pregunta_retrospectiva`
--

INSERT INTO `respuesta_pregunta_retrospectiva` (`id_rpr`, `id_respuesta`, `id_pregunta`, `id_retrospectiva`) VALUES
(1, 24, 20, 1),
(2, 38, 13, 2),
(3, 29, 14, 3),
(4, 42, 7, 4),
(5, 26, 1, 5),
(6, 36, 12, 6),
(7, 36, 11, 7),
(8, 30, 4, 8),
(9, 28, 9, 9),
(10, 23, 6, 10),
(11, 39, 3, 11),
(12, 40, 5, 12),
(13, 32, 8, 13),
(14, 34, 2, 14),
(15, 33, 17, 15),
(16, 25, 16, 16),
(17, 31, 19, 17),
(18, 27, 18, 18),
(19, 37, 15, 19),
(20, 37, 10, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `retrospectiva`
--

CREATE TABLE `retrospectiva` (
  `id_retrospectiva` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_fin` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_reporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `retrospectiva`
--

INSERT INTO `retrospectiva` (`id_retrospectiva`, `titulo`, `fecha_inicio`, `fecha_fin`, `id_reporte`) VALUES
(1, 'Retro 1', '2022-01-01 17:09:28', '2022-01-15 17:09:28', 2),
(2, 'Retro 2', '2022-01-16 17:09:28', '2022-01-31 17:09:28', 3),
(3, 'Retro 3', '2022-02-01 17:10:24', '2022-02-15 17:10:24', 4),
(4, 'Retro 4', '2022-02-16 17:10:24', '2022-02-28 17:10:24', 5),
(5, 'Retro 5', '2022-03-01 17:10:24', '2022-03-15 17:10:24', 6),
(6, 'Retro 6', '2022-03-16 17:10:24', '2022-03-31 17:10:24', 7),
(7, 'Retro 7', '2022-04-01 17:10:24', '2022-04-15 16:10:24', 8),
(8, 'Retro 8', '2022-04-16 16:10:24', '2022-04-30 16:10:24', 9),
(9, 'Retro 9', '2022-05-01 16:10:24', '2022-05-15 16:10:24', 10),
(10, 'Retro 10', '2022-05-16 16:10:24', '2022-05-31 16:10:24', 11),
(11, 'Retro 11', '2022-06-01 16:10:24', '2022-06-15 16:10:24', 12),
(12, 'Retro 12', '2022-06-16 16:10:24', '2022-06-30 16:10:24', 13),
(13, 'Retro 13', '2022-07-01 16:10:24', '2022-07-15 16:10:24', 14),
(14, 'Retro 14', '2022-07-16 16:10:24', '2022-07-31 16:10:24', 15),
(15, 'Retro 15', '2022-08-01 16:10:24', '2022-08-15 16:10:24', 16),
(16, 'Retro 16', '2022-08-16 16:10:24', '2022-08-31 16:10:24', 17),
(17, 'Retro 17', '2022-09-01 16:10:24', '2022-09-15 16:10:24', 18),
(18, 'Retro 18', '2022-09-16 16:10:24', '2022-09-30 16:10:24', 19),
(19, 'Retro 19', '2022-10-01 16:10:24', '2022-10-15 16:10:24', 20),
(20, 'Retro 20', '2022-10-16 16:10:24', '2022-10-31 17:10:24', 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `nombre_rol`) VALUES
(11, 'admin'),
(12, 'responsable'),
(13, 'squad_member'),
(14, 'líder_de_proyecto'),
(15, 'desarrollador'),
(16, 'tester'),
(17, 'diseñador'),
(18, 'analista_de_datos'),
(19, 'product_owner'),
(20, 'consultor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_funcion`
--

CREATE TABLE `rol_funcion` (
  `id_rol_funcion` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `id_funcion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprint`
--

CREATE TABLE `sprint` (
  `id_sprint` int(11) NOT NULL,
  `nombre_sprint` varchar(100) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_fin` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_reporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sprint`
--

INSERT INTO `sprint` (`id_sprint`, `nombre_sprint`, `fecha_inicio`, `fecha_fin`, `id_reporte`) VALUES
(1, 'Sprint1', '2022-01-01 23:44:25', '2022-01-15 23:44:25', 2),
(2, 'Sprint1', '2022-01-01 23:44:25', '2022-01-15 23:44:25', 2),
(39, 'Sprint 2', '2022-01-15 23:45:50', '2023-03-30 23:45:50', 3),
(40, 'Sprint 3', '2022-01-30 23:45:50', '2022-02-15 23:45:50', 4),
(41, 'Sprint 4', '2022-02-15 23:49:51', '2022-03-01 23:49:51', 5),
(42, 'Sprint 5', '2022-03-01 23:50:57', '2023-03-15 23:50:57', 6),
(43, 'Sprint 6', '2022-04-15 21:52:32', '2022-04-30 21:52:32', 7),
(44, 'Sprint 7', '2022-05-01 21:53:59', '2022-05-15 21:53:59', 8),
(45, 'Sprint 8', '2023-05-16 22:54:38', '2022-06-30 21:54:38', 9),
(46, 'Sprint 9', '2022-07-15 21:55:12', '2022-07-30 21:55:12', 10),
(47, 'Sprint 10', '2022-08-01 21:56:11', '2022-08-15 21:56:11', 11),
(48, 'Sprint 11', '2022-08-15 21:56:38', '2022-08-30 21:56:38', 12),
(49, 'Sprint 12', '2022-09-01 21:57:47', '2022-08-15 21:57:47', 13),
(50, 'Sprint 13', '2022-09-15 21:58:13', '2022-09-30 21:58:13', 14),
(51, 'Sprint 14', '2022-10-01 21:58:55', '2022-10-15 21:58:55', 15),
(52, 'Sprint 15', '2022-10-15 21:59:31', '2022-10-30 23:59:31', 16),
(53, 'Sprint 16', '2022-11-02 00:01:03', '2022-11-16 00:01:03', 17),
(54, 'Sprint 18', '2022-11-16 00:01:30', '2022-12-01 00:01:30', 18),
(55, 'Sprint 19', '2022-12-02 00:01:55', '2022-12-16 00:01:55', 20),
(56, 'Sprint 20', '2022-12-16 00:02:38', '2022-12-31 00:02:38', 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprint_epic`
--

CREATE TABLE `sprint_epic` (
  `id_sprint_epic` int(11) NOT NULL,
  `id_sprint` int(11) NOT NULL,
  `id_epic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_pregunta`
--

CREATE TABLE `tipo_pregunta` (
  `id_tipo_pregunta` int(11) NOT NULL,
  `tipo_pregunta` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_pregunta`
--

INSERT INTO `tipo_pregunta` (`id_tipo_pregunta`, `tipo_pregunta`) VALUES
(11, 'abierta'),
(12, 'bool'),
(13, 'cerrada'),
(14, 'opcion_multiple'),
(15, 'verdadero_falso'),
(16, 'completar_oracion'),
(17, 'relacionar_columnas'),
(18, 'linea_temporal'),
(19, 'respuesta_corta'),
(20, 'ordenar_elementos'),
(21, 'abierta'),
(22, 'bool'),
(23, 'cerrada'),
(24, 'opcion_multiple'),
(25, 'verdadero_falso'),
(26, 'completar_oracion'),
(27, 'relacionar_columnas'),
(28, 'linea_temporal'),
(29, 'respuesta_corta'),
(30, 'ordenar_elementos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `correo` varchar(100) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `foto` varchar(1000) NOT NULL,
  `id_usuario_jira` varchar(100) NOT NULL,
  `id_usuario_google` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`correo`, `nombre`, `apellido`, `foto`, `id_usuario_jira`, `id_usuario_google`) VALUES
('ana.castillo@zeb.mx', 'Ana', 'Castillo', 'http://example.com/ana.jpg', '901', '234'),
('ana.gonzalez@zeb.mx', 'Ana', 'Gonzalez', 'http://example.com/ana.jpg', '789', '12'),
('ana.rojas@zeb.mx', 'Ana', 'Rojas', 'http://example.com/ana.jpg', '456', '789'),
('carlos.rodriguez@zeb.mx', 'Carlos', 'Rodriguez', 'http://example.com/carlos.jpg', '901', '234'),
('david.martinez@zeb.mx', 'David', 'Martinez', 'http://example.com/david.jpg', '678', '901'),
('emilio.gonzalez@zeb.mx', 'Emilio', 'Gonzalez', 'http://example.com/emilio.jpg', '789', '12'),
('fernando.lopez@zeb.mx', 'Fernando', 'Lopez', 'http://example.com/fernando.jpg', '567', '890'),
('jane.doe@zeb.mx', 'Jane', 'Doe', 'http://example.com/jane.jpg', '123', '456'),
('john.smith@zeb.mx', 'John', 'Smith', 'http://example.com/john.jpg', '234', '567'),
('jorge.lopez@zeb.mx', 'Jorge', 'Lopez', 'http://example.com/jorge.jpg', '456', '789'),
('juan.ramirez@zeb.mx', 'Juan', 'Ramirez', 'http://example.com/juan.jpg', '890', '123'),
('laura.sanchez@zeb.mx', 'Laura', 'Sanchez', 'http://example.com/laura.jpg', '12', '345'),
('liliana.perez@zeb.mx', 'Liliana', 'Perez', 'http://example.com/liliana.jpg', '890', '123'),
('luis.hernandez@zeb.mx', 'Luis', 'Hernandez', 'http://example.com/luis.jpg', '123', '456'),
('maria.garcia@zeb.mx', 'Maria', 'Garcia', 'http://example.com/maria.jpg', '345', '678'),
('mario.castillo@zeb.mx', 'Mario', 'Castillo', 'http://example.com/mario.jpg', '345', '678'),
('martha.ortiz@zeb.mx', 'Martha', 'Ortiz', 'http://example.com/martha.jpg', '234', '567'),
('sara.perez@zeb.mx', 'Sara', 'Perez', 'http://example.com/sara.jpg', '567', '890'),
('sofia.ramirez@zeb.mx', 'Sofia', 'Ramirez', 'http://example.com/sofia.jpg', '678', '901');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_etiqueta`
--

CREATE TABLE `usuario_etiqueta` (
  `id_usuario_etiqueta` int(11) NOT NULL,
  `id_usuario` varchar(100) NOT NULL,
  `id_etiqueta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_issue`
--

CREATE TABLE `usuario_issue` (
  `id_usuario_issue` int(11) NOT NULL,
  `id_usuario` varchar(100) NOT NULL,
  `id_issue` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario_issue`
--

INSERT INTO `usuario_issue` (`id_usuario_issue`, `id_usuario`, `id_issue`) VALUES
(1, 'ana.castillo@zeb.mx', '772347'),
(2, 'john.smith@zeb.mx', '772347'),
(3, 'juan.ramirez@zeb.mx', '4919v3mm3'),
(4, 'emilio.gonzalez@zeb.mx', 'ad5sf4a5ds4f'),
(5, 'juan.ramirez@zeb.mx', '8984753987H'),
(6, 'laura.sanchez@zeb.mx', 'CHESSE1234'),
(7, 'juan.ramirez@zeb.mx', '8984753987H'),
(8, 'liliana.perez@zeb.mx', 'Fadf2k3jj'),
(9, 'carlos.rodriguez@zeb.mx', '8984753987H'),
(10, 'carlos.rodriguez@zeb.mx', '8984753987H'),
(11, 'john.smith@zeb.mx', 'LOLOL2234'),
(12, 'john.smith@zeb.mx', 'CHESSE1234'),
(13, 'mario.castillo@zeb.mx', 'CHESSE1234'),
(14, 'mario.castillo@zeb.mx', 'kj5hk'),
(15, 'maria.garcia@zeb.mx', '234J2J11'),
(16, 'martha.ortiz@zeb.mx', 'HDXDXD'),
(17, 'laura.sanchez@zeb.mx', 'kj5hk'),
(18, 'liliana.perez@zeb.mx', '134hjh2h3'),
(19, 'mario.castillo@zeb.mx', '345jkf8'),
(20, 'david.martinez@zeb.mx', 'Fadf2k3jj');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_respuesta`
--

CREATE TABLE `usuario_respuesta` (
  `id_usuario_respuesta` int(11) NOT NULL,
  `id_usuario` varchar(100) NOT NULL,
  `id_respuesta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_rol`
--

CREATE TABLE `usuario_rol` (
  `id_usuario_rol` int(11) NOT NULL,
  `id_usuario` varchar(100) NOT NULL,
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`id_usuario_rol`, `id_usuario`, `id_rol`) VALUES
(3, 'ana.castillo@zeb.mx', 11),
(4, 'ana.gonzalez@zeb.mx', 18),
(5, 'ana.rojas@zeb.mx', 20),
(6, 'carlos.rodriguez@zeb.mx', 15),
(7, 'david.martinez@zeb.mx', 17),
(8, 'emilio.gonzalez@zeb.mx', 14),
(9, 'jane.doe@zeb.mx', 19),
(10, 'john.smith@zeb.mx', 12),
(11, 'jorge.lopez@zeb.mx', 13),
(12, 'juan.ramirez@zeb.mx', 16),
(13, 'laura.sanchez@zeb.mx', 20),
(14, 'liliana.perez@zeb.mx', 19),
(15, 'luis.hernandez@zeb.mx', 18),
(16, 'maria.garcia@zeb.mx', 11),
(17, 'mario.castillo@zeb.mx', 19),
(18, 'mario.castillo@zeb.mx', 16),
(19, 'martha.ortiz@zeb.mx', 15),
(20, 'sara.perez@zeb.mx', 15),
(21, 'sofia.ramirez@zeb.mx', 19);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `epic`
--
ALTER TABLE `epic`
  ADD PRIMARY KEY (`id_epic`),
  ADD KEY `id_reporte` (`id_reporte`);

--
-- Indices de la tabla `etiqueta`
--
ALTER TABLE `etiqueta`
  ADD PRIMARY KEY (`id_etiqueta`);

--
-- Indices de la tabla `funcion`
--
ALTER TABLE `funcion`
  ADD PRIMARY KEY (`id_funcion`);

--
-- Indices de la tabla `issue`
--
ALTER TABLE `issue`
  ADD PRIMARY KEY (`clave`),
  ADD KEY `id_epic` (`id_epic`);

--
-- Indices de la tabla `issue_sprint`
--
ALTER TABLE `issue_sprint`
  ADD PRIMARY KEY (`id_issue_sprint`),
  ADD KEY `id_issue` (`id_issue`),
  ADD KEY `id_sprint` (`id_sprint`);

--
-- Indices de la tabla `opcionrespuesta_pregunta`
--
ALTER TABLE `opcionrespuesta_pregunta`
  ADD PRIMARY KEY (`id_opcion_pregunta`),
  ADD KEY `id_opcion` (`id_opcion`),
  ADD KEY `id_pregunta` (`id_pregunta`);

--
-- Indices de la tabla `opcion_respuesta`
--
ALTER TABLE `opcion_respuesta`
  ADD PRIMARY KEY (`id_opcion_respuesta`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`id_pregunta`),
  ADD KEY `id_tipo_pregunta` (`id_tipo_pregunta`);

--
-- Indices de la tabla `reporte`
--
ALTER TABLE `reporte`
  ADD PRIMARY KEY (`id_reporte`);

--
-- Indices de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD PRIMARY KEY (`id_respuesta`);

--
-- Indices de la tabla `respuesta_pregunta_retrospectiva`
--
ALTER TABLE `respuesta_pregunta_retrospectiva`
  ADD PRIMARY KEY (`id_rpr`),
  ADD KEY `ic_respuesta` (`id_respuesta`),
  ADD KEY `id_pregunta` (`id_pregunta`),
  ADD KEY `id_retrospectiva` (`id_retrospectiva`);

--
-- Indices de la tabla `retrospectiva`
--
ALTER TABLE `retrospectiva`
  ADD PRIMARY KEY (`id_retrospectiva`),
  ADD KEY `id_reporte` (`id_reporte`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `rol_funcion`
--
ALTER TABLE `rol_funcion`
  ADD PRIMARY KEY (`id_rol_funcion`),
  ADD KEY `id_rol` (`id_rol`),
  ADD KEY `id_funcion` (`id_funcion`);

--
-- Indices de la tabla `sprint`
--
ALTER TABLE `sprint`
  ADD PRIMARY KEY (`id_sprint`),
  ADD KEY `id_reporte` (`id_reporte`);

--
-- Indices de la tabla `sprint_epic`
--
ALTER TABLE `sprint_epic`
  ADD PRIMARY KEY (`id_sprint_epic`),
  ADD KEY `id_sprint` (`id_sprint`),
  ADD KEY `id_epic` (`id_epic`);

--
-- Indices de la tabla `tipo_pregunta`
--
ALTER TABLE `tipo_pregunta`
  ADD PRIMARY KEY (`id_tipo_pregunta`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`correo`);

--
-- Indices de la tabla `usuario_etiqueta`
--
ALTER TABLE `usuario_etiqueta`
  ADD PRIMARY KEY (`id_usuario_etiqueta`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_etiqueta` (`id_etiqueta`);

--
-- Indices de la tabla `usuario_issue`
--
ALTER TABLE `usuario_issue`
  ADD PRIMARY KEY (`id_usuario_issue`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_issue` (`id_issue`);

--
-- Indices de la tabla `usuario_respuesta`
--
ALTER TABLE `usuario_respuesta`
  ADD PRIMARY KEY (`id_usuario_respuesta`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_respuesta` (`id_respuesta`);

--
-- Indices de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD PRIMARY KEY (`id_usuario_rol`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `epic`
--
ALTER TABLE `epic`
  MODIFY `id_epic` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `etiqueta`
--
ALTER TABLE `etiqueta`
  MODIFY `id_etiqueta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `funcion`
--
ALTER TABLE `funcion`
  MODIFY `id_funcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `issue_sprint`
--
ALTER TABLE `issue_sprint`
  MODIFY `id_issue_sprint` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `opcionrespuesta_pregunta`
--
ALTER TABLE `opcionrespuesta_pregunta`
  MODIFY `id_opcion_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `opcion_respuesta`
--
ALTER TABLE `opcion_respuesta`
  MODIFY `id_opcion_respuesta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `id_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `reporte`
--
ALTER TABLE `reporte`
  MODIFY `id_reporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  MODIFY `id_respuesta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `respuesta_pregunta_retrospectiva`
--
ALTER TABLE `respuesta_pregunta_retrospectiva`
  MODIFY `id_rpr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `retrospectiva`
--
ALTER TABLE `retrospectiva`
  MODIFY `id_retrospectiva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `rol_funcion`
--
ALTER TABLE `rol_funcion`
  MODIFY `id_rol_funcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `sprint`
--
ALTER TABLE `sprint`
  MODIFY `id_sprint` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `sprint_epic`
--
ALTER TABLE `sprint_epic`
  MODIFY `id_sprint_epic` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `tipo_pregunta`
--
ALTER TABLE `tipo_pregunta`
  MODIFY `id_tipo_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `usuario_etiqueta`
--
ALTER TABLE `usuario_etiqueta`
  MODIFY `id_usuario_etiqueta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `usuario_issue`
--
ALTER TABLE `usuario_issue`
  MODIFY `id_usuario_issue` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `usuario_respuesta`
--
ALTER TABLE `usuario_respuesta`
  MODIFY `id_usuario_respuesta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  MODIFY `id_usuario_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `epic`
--
ALTER TABLE `epic`
  ADD CONSTRAINT `epic_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reporte` (`id_reporte`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `issue`
--
ALTER TABLE `issue`
  ADD CONSTRAINT `issue_ibfk_1` FOREIGN KEY (`id_epic`) REFERENCES `epic` (`id_epic`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `issue_sprint`
--
ALTER TABLE `issue_sprint`
  ADD CONSTRAINT `issue_sprint_ibfk_1` FOREIGN KEY (`id_issue`) REFERENCES `issue` (`clave`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `issue_sprint_ibfk_2` FOREIGN KEY (`id_sprint`) REFERENCES `sprint` (`id_sprint`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `opcionrespuesta_pregunta`
--
ALTER TABLE `opcionrespuesta_pregunta`
  ADD CONSTRAINT `opcionRespuesta_pregunta_ibfk_1` FOREIGN KEY (`id_opcion`) REFERENCES `opcion_respuesta` (`id_opcion_respuesta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `opcionRespuesta_pregunta_ibfk_2` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id_pregunta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD CONSTRAINT `pregunta_ibfk_1` FOREIGN KEY (`id_tipo_pregunta`) REFERENCES `tipo_pregunta` (`id_tipo_pregunta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `respuesta_pregunta_retrospectiva`
--
ALTER TABLE `respuesta_pregunta_retrospectiva`
  ADD CONSTRAINT `rpr_ibfk_1` FOREIGN KEY (`id_respuesta`) REFERENCES `respuesta` (`id_respuesta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rpr_ibfk_2` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id_pregunta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rpr_ibfk_3` FOREIGN KEY (`id_retrospectiva`) REFERENCES `retrospectiva` (`id_retrospectiva`);

--
-- Filtros para la tabla `retrospectiva`
--
ALTER TABLE `retrospectiva`
  ADD CONSTRAINT `retrospectiva_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reporte` (`id_reporte`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rol_funcion`
--
ALTER TABLE `rol_funcion`
  ADD CONSTRAINT `rol_funcion_ibk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rol_funcion_ibk_2` FOREIGN KEY (`id_funcion`) REFERENCES `funcion` (`id_funcion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sprint`
--
ALTER TABLE `sprint`
  ADD CONSTRAINT `sprint_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reporte` (`id_reporte`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sprint_epic`
--
ALTER TABLE `sprint_epic`
  ADD CONSTRAINT `sprint_epic_ibfk_1` FOREIGN KEY (`id_sprint`) REFERENCES `sprint` (`id_sprint`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sprint_epic_ibfk_2` FOREIGN KEY (`id_epic`) REFERENCES `epic` (`id_epic`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario_etiqueta`
--
ALTER TABLE `usuario_etiqueta`
  ADD CONSTRAINT `usuario_etiqueta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`correo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_etiqueta_ibfk_2` FOREIGN KEY (`id_etiqueta`) REFERENCES `etiqueta` (`id_etiqueta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario_issue`
--
ALTER TABLE `usuario_issue`
  ADD CONSTRAINT `usuario_issue_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`correo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_issue_ibfk_2` FOREIGN KEY (`id_issue`) REFERENCES `issue` (`clave`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario_respuesta`
--
ALTER TABLE `usuario_respuesta`
  ADD CONSTRAINT `usuario_respuesta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`correo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_respuesta_ibfk_2` FOREIGN KEY (`id_respuesta`) REFERENCES `respuesta` (`id_respuesta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD CONSTRAINT `usuario_rol_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`correo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_rol_ibfk_2` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
