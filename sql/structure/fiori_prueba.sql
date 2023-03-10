-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-03-2023 a las 18:24:46
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
  `responsable` int(100) NOT NULL,
  `stoty_points` int(11) NOT NULL,
  `id_epic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `issue_sprint`
--

CREATE TABLE `issue_sprint` (
  `id_issue_sprint` int(11) NOT NULL,
  `id_issue` varchar(50) NOT NULL,
  `id_sprint` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opcionrespuesta_pregunta`
--

CREATE TABLE `opcionrespuesta_pregunta` (
  `id_opcion_pregunta` int(11) NOT NULL,
  `id_opcion` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprint_epic`
--

CREATE TABLE `sprint_epic` (
  `id_sprint_epic` int(11) NOT NULL,
  `id_sprint` int(11) NOT NULL,
  `id_epic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(20, 'ordenar_elementos');

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_issue`
--

CREATE TABLE `usuario_issue` (
  `id_usuario_issue` int(11) NOT NULL,
  `id_usuario` varchar(100) NOT NULL,
  `id_issue` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_respuesta`
--

CREATE TABLE `usuario_respuesta` (
  `id_usuario_respuesta` int(11) NOT NULL,
  `id_usuario` varchar(100) NOT NULL,
  `id_respuesta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  MODIFY `id_epic` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id_issue_sprint` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `opcionrespuesta_pregunta`
--
ALTER TABLE `opcionrespuesta_pregunta`
  MODIFY `id_opcion_pregunta` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id_rpr` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id_rol_funcion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sprint`
--
ALTER TABLE `sprint`
  MODIFY `id_sprint` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sprint_epic`
--
ALTER TABLE `sprint_epic`
  MODIFY `id_sprint_epic` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_pregunta`
--
ALTER TABLE `tipo_pregunta`
  MODIFY `id_tipo_pregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `usuario_etiqueta`
--
ALTER TABLE `usuario_etiqueta`
  MODIFY `id_usuario_etiqueta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario_issue`
--
ALTER TABLE `usuario_issue`
  MODIFY `id_usuario_issue` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario_respuesta`
--
ALTER TABLE `usuario_respuesta`
  MODIFY `id_usuario_respuesta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  MODIFY `id_usuario_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
