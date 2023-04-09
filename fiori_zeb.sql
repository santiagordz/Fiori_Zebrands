-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 09-04-2023 a las 16:08:03
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fiori`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colores`
--

DROP TABLE IF EXISTS `colores`;
CREATE TABLE IF NOT EXISTS `colores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `colores`
--

INSERT INTO `colores` (`id`, `color`, `createdAt`, `updatedAt`) VALUES
(1, 'greenLight', '2023-03-17 00:00:00', '2023-03-17 00:00:00'),
(2, 'tealLight', '2023-03-17 00:00:00', '2023-03-17 00:00:00'),
(3, 'blueLight', '2023-03-17 00:00:00', '2023-03-17 00:00:00'),
(4, 'purpleLight', '2023-03-17 00:00:00', '2023-03-17 00:00:00'),
(5, 'redLight', '2023-03-17 00:00:00', '2023-03-17 00:00:00'),
(6, 'yellowLight', '2023-03-17 00:00:00', '2023-03-17 00:00:00'),
(7, 'standard', '2023-03-18 00:00:00', '2023-03-18 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `epics`
--

DROP TABLE IF EXISTS `epics`;
CREATE TABLE IF NOT EXISTS `epics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `resumen` varchar(500) NOT NULL,
  `color` varchar(100) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_fin` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_reporte` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_reporte` (`id_reporte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiquetas`
--

DROP TABLE IF EXISTS `etiquetas`;
CREATE TABLE IF NOT EXISTS `etiquetas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `etiqueta` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_color` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_color` (`id_color`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `etiquetas`
--

INSERT INTO `etiquetas` (`id`, `etiqueta`, `createdAt`, `updatedAt`, `id_color`) VALUES
(2, 'Full-Stack', '2023-03-27 00:00:00', '2023-03-31 19:01:43', 3),
(3, 'Back-End', '2023-03-27 00:00:00', '2023-03-31 19:01:57', 6),
(6, 'UX/UI', '2023-03-30 18:15:26', '2023-03-31 19:01:33', 4),
(9, 'Front-End', '2023-03-31 19:02:14', '2023-03-31 19:02:14', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `issues`
--

DROP TABLE IF EXISTS `issues`;
CREATE TABLE IF NOT EXISTS `issues` (
  `id` int NOT NULL AUTO_INCREMENT,
  `clave` varchar(100) NOT NULL,
  `prioridad` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `story_points` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_epic` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `clave` (`clave`),
  KEY `id_epic` (`id_epic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opciones_respuestas`
--

DROP TABLE IF EXISTS `opciones_respuestas`;
CREATE TABLE IF NOT EXISTS `opciones_respuestas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `opcion_respuesta` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `opciones_respuestas`
--

INSERT INTO `opciones_respuestas` (`id`, `opcion_respuesta`, `createdAt`, `updatedAt`) VALUES
(1, 'Excelente', '2023-03-27 23:34:50', '2023-03-27 23:34:50'),
(2, 'Bueno', '2023-03-27 23:34:50', '2023-03-27 23:34:50'),
(3, 'Regular', '2023-03-27 23:34:50', '2023-03-27 23:34:50'),
(4, 'Malo', '2023-03-27 23:34:50', '2023-03-27 23:34:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
CREATE TABLE IF NOT EXISTS `preguntas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pregunta` varchar(1000) NOT NULL,
  `predeterminada` tinyint(1) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_tipo_pregunta` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_tipo_pregunta` (`id_tipo_pregunta`)
) ENGINE=InnoDB AUTO_INCREMENT=972260216 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `pregunta`, `predeterminada`, `createdAt`, `updatedAt`, `id_tipo_pregunta`) VALUES
(3, '¿Qué hicimos bien en el Sprint que vale la pena mencionar?', 0, '2023-03-27 23:33:11', '2023-04-07 05:27:07', 1),
(4, '¿Qué hicimos mal que debemos de hacer diferente en el siguiente sprint?', 1, '2023-03-27 23:33:11', '2023-04-07 05:31:15', 2),
(5, '¿Cómo calificarías la calidad de las reuniones del equipo durante el último sprint?', 1, '2023-03-27 23:35:03', '2023-04-07 05:27:07', 3),
(6, 'En una escala del 1 al 5 ¿Cómo calificas tu desempeño en el sprint?', 0, '2023-03-30 03:41:26', '2023-04-07 05:27:07', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas_opciones`
--

DROP TABLE IF EXISTS `preguntas_opciones`;
CREATE TABLE IF NOT EXISTS `preguntas_opciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_pregunta` int NOT NULL,
  `id_opcion` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_pregunta` (`id_pregunta`),
  KEY `id_opcion` (`id_opcion`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `preguntas_opciones`
--

INSERT INTO `preguntas_opciones` (`id`, `id_pregunta`, `id_opcion`) VALUES
(5, 5, 1),
(6, 5, 2),
(7, 5, 3),
(8, 5, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas_retrospectivas`
--

DROP TABLE IF EXISTS `preguntas_retrospectivas`;
CREATE TABLE IF NOT EXISTS `preguntas_retrospectivas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_pregunta` int NOT NULL,
  `id_retrospectiva` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_pregunta` (`id_pregunta`),
  KEY `id_retrospectiva` (`id_retrospectiva`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `preguntas_retrospectivas`
--

INSERT INTO `preguntas_retrospectivas` (`id`, `id_pregunta`, `id_retrospectiva`) VALUES
(4, 5, 5),
(5, 3, 5),
(6, 4, 5),
(7, 5, 6),
(8, 3, 6),
(9, 4, 6),
(10, 6, 6),
(28, 4, 8217670350),
(29, 5, 8217670350);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reportes`
--

DROP TABLE IF EXISTS `reportes`;
CREATE TABLE IF NOT EXISTS `reportes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `archivo` varchar(5000) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_retrospectiva` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_retrospectiva` (`id_retrospectiva`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

DROP TABLE IF EXISTS `respuestas`;
CREATE TABLE IF NOT EXISTS `respuestas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `respuesta` varchar(3000) NOT NULL,
  `anonimo` tinyint(1) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_usuario` int DEFAULT NULL,
  `id_retrospectiva` bigint NOT NULL,
  `id_pregunta` int NOT NULL,
  `id_sesionRespuesta` varchar(13) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_retrospectiva` (`id_retrospectiva`),
  KEY `id_pregunta` (`id_pregunta`),
  KEY `id_usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `respuestas`
--

INSERT INTO `respuestas` (`id`, `respuesta`, `anonimo`, `createdAt`, `updatedAt`, `id_usuario`, `id_retrospectiva`, `id_pregunta`, `id_sesionRespuesta`) VALUES
(20, 'a', 1, '2023-04-03 20:34:45', '2023-04-03 20:34:45', NULL, 6, 3, 'g932KDPvYBf-C');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `retrospectivas`
--

DROP TABLE IF EXISTS `retrospectivas`;
CREATE TABLE IF NOT EXISTS `retrospectivas` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(251) DEFAULT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_fin` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `en_curso` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_reporte` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_reporte` (`id_reporte`)
) ENGINE=InnoDB AUTO_INCREMENT=8740193308 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `retrospectivas`
--

INSERT INTO `retrospectivas` (`id`, `titulo`, `descripcion`, `fecha_inicio`, `fecha_fin`, `en_curso`, `createdAt`, `updatedAt`, `id_reporte`) VALUES
(5, 'Retro 1', 'Descripcion retro 1', '2023-04-04 21:08:45', '2023-04-04 21:10:30', 0, '2023-03-28 17:49:10', '2023-04-04 21:10:30', NULL),
(6, 'Retro 2', 'Descripcion retro 2', '2023-04-04 20:56:52', '2023-03-28 21:28:22', 1, '2023-03-28 21:28:22', '2023-03-28 21:28:22', NULL),
(8, 'Retro 4', 'Descripcion retro 4', '2023-04-04 20:56:52', '2023-03-29 21:53:18', 1, '2023-03-29 21:53:18', '2023-03-29 21:53:18', NULL),
(8217670350, '01-07-2023', NULL, '2023-04-07 05:46:52', '2023-04-07 05:46:52', 1, '2023-04-07 05:46:52', '2023-04-07 05:46:52', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `retrospectiva_etiquetas`
--

DROP TABLE IF EXISTS `retrospectiva_etiquetas`;
CREATE TABLE IF NOT EXISTS `retrospectiva_etiquetas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_retrospectiva` bigint NOT NULL,
  `id_etiqueta` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_retrospectiva` (`id_retrospectiva`) USING BTREE,
  KEY `id_etiqueta` (`id_etiqueta`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `retrospectiva_etiquetas`
--

INSERT INTO `retrospectiva_etiquetas` (`id`, `id_retrospectiva`, `id_etiqueta`, `createdAt`, `updatedAt`) VALUES
(9, 5, 3, '2023-03-28 18:34:51', '2023-03-28 18:34:51'),
(11, 6, 2, '2023-03-28 21:28:40', '2023-03-28 21:28:40'),
(14, 5, 6, '2023-04-02 18:08:46', '2023-04-02 18:08:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `rol`, `createdAt`, `updatedAt`) VALUES
(1, 'Administrador', '2023-03-27 00:00:00', '2023-03-27 00:00:00'),
(2, 'Responsable', '2023-03-27 00:00:00', '2023-03-27 00:00:00'),
(3, 'Squad Member', '2023-03-27 00:00:00', '2023-03-27 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles_funciones`
--

DROP TABLE IF EXISTS `roles_funciones`;
CREATE TABLE IF NOT EXISTS `roles_funciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_rol` int NOT NULL,
  `id_funcion` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_rol` (`id_rol`),
  KEY `id_funcion` (`id_funcion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprints`
--

DROP TABLE IF EXISTS `sprints`;
CREATE TABLE IF NOT EXISTS `sprints` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_fin` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_reporte` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_reporte` (`id_reporte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprints_epics`
--

DROP TABLE IF EXISTS `sprints_epics`;
CREATE TABLE IF NOT EXISTS `sprints_epics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_sprint` int NOT NULL,
  `id_epic` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_sprint` (`id_sprint`),
  KEY `id_epic` (`id_epic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprints_issues`
--

DROP TABLE IF EXISTS `sprints_issues`;
CREATE TABLE IF NOT EXISTS `sprints_issues` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_sprint` int NOT NULL,
  `id_issue` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_sprint` (`id_sprint`),
  KEY `id_issue` (`id_issue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_preguntas`
--

DROP TABLE IF EXISTS `tipos_preguntas`;
CREATE TABLE IF NOT EXISTS `tipos_preguntas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo_pregunta` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `tipos_preguntas`
--

INSERT INTO `tipos_preguntas` (`id`, `tipo_pregunta`, `createdAt`, `updatedAt`) VALUES
(1, 'Párrafo', '2023-03-27 23:32:09', '2023-03-27 23:32:09'),
(2, 'Respuesta corta', '2023-03-27 23:32:09', '2023-03-27 23:32:09'),
(3, 'Lista desplegable', '2023-03-27 23:32:09', '2023-03-27 23:32:09'),
(4, 'Escala numérica', '2023-03-27 23:32:09', '2023-03-27 23:32:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `correo` varchar(100) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `foto` varchar(1000) DEFAULT NULL,
  `id_google` varchar(100) DEFAULT NULL,
  `id_jira` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_rol` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo` (`correo`),
  KEY `id_rol` (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `correo`, `nombre`, `foto`, `id_google`, `id_jira`, `createdAt`, `updatedAt`, `id_rol`) VALUES
(7, 'david.langarica@gmail.com', 'David Langarica', 'https://lh3.googleusercontent.com/a/AGNmyxa2A5REtTSrIzJcZ_zXz5PXZ_jMCS2G_dK3wrZZ8g=s96-c', '111190257590566899519', NULL, '2023-03-27 21:04:28', '2023-04-07 02:32:24', 1),
(23, 'juanpablocabrera045@gmail.com', NULL, NULL, NULL, NULL, '2023-04-04 18:01:52', '2023-04-04 19:44:03', 2),
(24, 'bailleres.frida@gmail.com', NULL, NULL, NULL, NULL, '2023-04-04 18:02:06', '2023-04-04 18:02:06', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_etiquetas`
--

DROP TABLE IF EXISTS `usuarios_etiquetas`;
CREATE TABLE IF NOT EXISTS `usuarios_etiquetas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_etiqueta` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_etiqueta` (`id_etiqueta`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `usuarios_etiquetas`
--

INSERT INTO `usuarios_etiquetas` (`id`, `id_usuario`, `id_etiqueta`) VALUES
(1, 7, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_issues`
--

DROP TABLE IF EXISTS `usuarios_issues`;
CREATE TABLE IF NOT EXISTS `usuarios_issues` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_issues` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_issues` (`id_issues`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_retrospectivas`
--

DROP TABLE IF EXISTS `usuarios_retrospectivas`;
CREATE TABLE IF NOT EXISTS `usuarios_retrospectivas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_retrospectiva` bigint NOT NULL,
  `completada` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_retrospectiva` (`id_retrospectiva`) USING BTREE,
  KEY `id_usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;;

--
-- Volcado de datos para la tabla `usuarios_retrospectivas`
--

INSERT INTO `usuarios_retrospectivas` (`id`, `id_usuario`, `id_retrospectiva`, `completada`, `createdAt`, `updatedAt`) VALUES
(3, 7, 5, 1, '2023-03-28 17:49:20', '2023-03-28 17:57:49'),
(5, 7, 6, 0, '2023-03-28 22:40:21', '2023-04-03 20:34:45'),
(16, 23, 8217670350, 0, '2023-04-07 05:46:52', '2023-04-07 05:46:52');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `epics`
--
ALTER TABLE `epics`
  ADD CONSTRAINT `epics_reporte_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reportes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  ADD CONSTRAINT `etiquetas_colores_ibfk_1` FOREIGN KEY (`id_color`) REFERENCES `colores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `issues`
--
ALTER TABLE `issues`
  ADD CONSTRAINT `issues_epic_ibfk_1` FOREIGN KEY (`id_epic`) REFERENCES `epics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `pregunta_tipo_pregunta_ibfk_1` FOREIGN KEY (`id_tipo_pregunta`) REFERENCES `tipos_preguntas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `preguntas_opciones`
--
ALTER TABLE `preguntas_opciones`
  ADD CONSTRAINT `pregunta_opc_res_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pregunta_opc_res_ibfk_2` FOREIGN KEY (`id_opcion`) REFERENCES `opciones_respuestas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `preguntas_retrospectivas`
--
ALTER TABLE `preguntas_retrospectivas`
  ADD CONSTRAINT `pregunta_retrospectiva_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pregunta_retrospectiva_ibfk_2` FOREIGN KEY (`id_retrospectiva`) REFERENCES `retrospectivas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reportes`
--
ALTER TABLE `reportes`
  ADD CONSTRAINT `reportes_retrospectiva_ibfk_1` FOREIGN KEY (`id_retrospectiva`) REFERENCES `retrospectivas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD CONSTRAINT `respuestas_preguntas_ibfk_3` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `respuestas_retrospectivas_ibfk_2` FOREIGN KEY (`id_retrospectiva`) REFERENCES `retrospectivas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `respuestas_usuario_ibfk1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `retrospectivas`
--
ALTER TABLE `retrospectivas`
  ADD CONSTRAINT `retrospectiva_reporte_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reportes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `retrospectiva_etiquetas`
--
ALTER TABLE `retrospectiva_etiquetas`
  ADD CONSTRAINT `retrospectiva_etiquetas_ibfk_1` FOREIGN KEY (`id_retrospectiva`) REFERENCES `retrospectivas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `retrospectiva_etiquetas_ibfk_2` FOREIGN KEY (`id_etiqueta`) REFERENCES `etiquetas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sprints`
--
ALTER TABLE `sprints`
  ADD CONSTRAINT `sprint_reporte` FOREIGN KEY (`id_reporte`) REFERENCES `reportes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sprints_epics`
--
ALTER TABLE `sprints_epics`
  ADD CONSTRAINT `sprint_epic_ibfk_1` FOREIGN KEY (`id_sprint`) REFERENCES `sprints` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sprint_epic_ibfk_2` FOREIGN KEY (`id_epic`) REFERENCES `epics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sprints_issues`
--
ALTER TABLE `sprints_issues`
  ADD CONSTRAINT `sprint_issue_ibfk_1` FOREIGN KEY (`id_issue`) REFERENCES `issues` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sprint_issue_ibfk_2` FOREIGN KEY (`id_sprint`) REFERENCES `sprints` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuario_rol_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios_etiquetas`
--
ALTER TABLE `usuarios_etiquetas`
  ADD CONSTRAINT `usuario_etiqueta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_etiqueta_ibfk_2` FOREIGN KEY (`id_etiqueta`) REFERENCES `etiquetas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios_issues`
--
ALTER TABLE `usuarios_issues`
  ADD CONSTRAINT `usuario_issue_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_issue_ibfk_2` FOREIGN KEY (`id_issues`) REFERENCES `issues` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios_retrospectivas`
--
ALTER TABLE `usuarios_retrospectivas`
  ADD CONSTRAINT `usuarios_retrospectivas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarios_retrospectivas_ibfk_2` FOREIGN KEY (`id_retrospectiva`) REFERENCES `retrospectivas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
