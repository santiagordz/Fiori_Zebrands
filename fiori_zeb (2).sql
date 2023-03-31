-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-03-2023 a las 04:27:41
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fiori_zeb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colores`
--

CREATE TABLE `colores` (
  `id` int(11) NOT NULL,
  `color` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `epics` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `resumen` varchar(500) NOT NULL,
  `color` varchar(100) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fecha_fin` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_reporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiquetas`
--

CREATE TABLE `etiquetas` (
  `id` int(11) NOT NULL,
  `etiqueta` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_color` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `etiquetas`
--

INSERT INTO `etiquetas` (`id`, `etiqueta`, `createdAt`, `updatedAt`, `id_color`) VALUES
(1, 'Full-Stack', '2023-03-27 00:00:00', '2023-03-29 20:13:21', 2),
(2, 'Front-End', '2023-03-27 00:00:00', '2023-03-27 00:00:00', 3),
(3, 'Back-End', '2023-03-27 00:00:00', '2023-03-27 00:00:00', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funciones`
--

CREATE TABLE `funciones` (
  `id` int(11) NOT NULL,
  `funcion` varchar(200) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `issues`
--

CREATE TABLE `issues` (
  `id` int(11) NOT NULL,
  `clave` varchar(100) NOT NULL,
  `prioridad` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `story_points` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_epic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opciones_respuestas`
--

CREATE TABLE `opciones_respuestas` (
  `id` int(11) NOT NULL,
  `opcion_respuesta` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `preguntas` (
  `id` int(11) NOT NULL,
  `pregunta` varchar(1000) NOT NULL,
  `predeterminada` tinyint(1) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_tipo_pregunta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `pregunta`, `predeterminada`, `createdAt`, `updatedAt`, `id_tipo_pregunta`) VALUES
(3, '¿Qué hicimos bien en el Sprint que vale la pena mencionar?', 0, '2023-03-27 23:33:11', '2023-03-27 23:33:11', 1),
(4, '¿Qué hicimos mal que debemos de hacer diferente en el siguiente sprint?', 0, '2023-03-27 23:33:11', '2023-03-27 23:33:11', 2),
(5, '¿Cómo calificarías la calidad de las reuniones del equipo durante el último sprint?', 0, '2023-03-27 23:35:03', '2023-03-27 23:35:03', 3),
(6, 'En una escala del 1 al 5 ¿Cómo calificas tu desempeño en el sprint?', 0, '2023-03-30 03:41:26', '2023-03-30 03:41:26', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas_opciones`
--

CREATE TABLE `preguntas_opciones` (
  `id` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `id_opcion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `preguntas_retrospectivas` (
  `id` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `id_retrospectiva` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(10, 6, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reportes`
--

CREATE TABLE `reportes` (
  `id` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `archivo` varchar(5000) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_retrospectiva` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

CREATE TABLE `respuestas` (
  `id` int(11) NOT NULL,
  `respuesta` varchar(3000) NOT NULL,
  `anonimo` tinyint(1) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_usuario` int(11) DEFAULT NULL,
  `id_retrospectiva` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `id_sesionRespuesta` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `respuestas`
--

INSERT INTO `respuestas` (`id`, `respuesta`, `anonimo`, `createdAt`, `updatedAt`, `id_usuario`, `id_retrospectiva`, `id_pregunta`, `id_sesionRespuesta`) VALUES
(10, 'asdfasdfasdf', 0, '2023-03-30 15:39:16', '2023-03-30 15:39:16', 21, 5, 3, 'KBGDlBrX5iCob'),
(11, 'as.dkflakjsdfassdfklasmdfknqweuir13y40981239uhflkjsadnc,asdfasdf', 1, '2023-03-30 15:39:16', '2023-03-30 15:39:16', NULL, 5, 4, 'KBGDlBrX5iCob'),
(12, 'Malo', 1, '2023-03-30 15:39:16', '2023-03-30 15:39:16', NULL, 5, 5, 'KBGDlBrX5iCob');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `retrospectivas`
--

CREATE TABLE `retrospectivas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fecha_fin` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_reporte` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `retrospectivas`
--

INSERT INTO `retrospectivas` (`id`, `titulo`, `descripcion`, `fecha_inicio`, `fecha_fin`, `createdAt`, `updatedAt`, `id_reporte`) VALUES
(5, 'Retro 1', 'Descripcion retro 1', '2023-03-29 21:54:24', '2023-03-28 17:49:10', '2023-03-28 17:49:10', '2023-03-28 17:49:10', NULL),
(6, 'Retro 2', 'Descripcion retro 2', '2023-03-28 21:28:22', '2023-03-28 21:28:22', '2023-03-28 21:28:22', '2023-03-28 21:28:22', NULL),
(7, 'Retro 3', 'Descripcion retro 3', '2023-03-29 20:56:47', '2023-03-29 20:56:47', '2023-03-29 20:56:47', '2023-03-29 20:56:47', NULL),
(8, 'Retro 4', 'Descripcion retro 4', '2023-03-29 21:54:38', '2023-03-29 21:53:18', '2023-03-29 21:53:18', '2023-03-29 21:53:18', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `retrospectiva_etiquetas`
--

CREATE TABLE `retrospectiva_etiquetas` (
  `id` int(11) NOT NULL,
  `id_retrospectiva` int(11) NOT NULL,
  `id_etiqueta` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `retrospectiva_etiquetas`
--

INSERT INTO `retrospectiva_etiquetas` (`id`, `id_retrospectiva`, `id_etiqueta`, `createdAt`, `updatedAt`) VALUES
(9, 5, 3, '2023-03-28 18:34:51', '2023-03-28 18:34:51'),
(10, 6, 1, '2023-03-28 21:28:40', '2023-03-28 21:28:40'),
(11, 6, 2, '2023-03-28 21:28:40', '2023-03-28 21:28:40'),
(12, 7, 1, '2023-03-29 21:21:15', '2023-03-29 21:21:15'),
(13, 7, 3, '2023-03-29 21:24:49', '2023-03-29 21:24:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `roles_funciones` (
  `id` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `id_funcion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprints`
--

CREATE TABLE `sprints` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fecha_fin` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_reporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprints_epics`
--

CREATE TABLE `sprints_epics` (
  `id` int(11) NOT NULL,
  `id_sprint` int(11) NOT NULL,
  `id_epic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprints_issues`
--

CREATE TABLE `sprints_issues` (
  `id` int(11) NOT NULL,
  `id_sprint` int(11) NOT NULL,
  `id_issue` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_preguntas`
--

CREATE TABLE `tipos_preguntas` (
  `id` int(11) NOT NULL,
  `tipo_pregunta` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `foto` varchar(1000) DEFAULT NULL,
  `id_google` varchar(100) DEFAULT NULL,
  `id_jira` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `correo`, `nombre`, `foto`, `id_google`, `id_jira`, `createdAt`, `updatedAt`, `id_rol`) VALUES
(7, 'correo@zeb.mx', '', NULL, NULL, NULL, '2023-03-29 22:40:26', '2023-03-30 03:23:24', 1),
(21, 'a01708830@tec.mx', 'Sebastián Jiménez Bauer', 'https://lh3.googleusercontent.com/a/AGNmyxarmtORM68RE43eVftM4vdd86KWZme9XJY9C_62=s96-c', '110334041169444958529', NULL, '2023-03-30 15:31:44', '2023-03-30 15:36:28', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_etiquetas`
--

CREATE TABLE `usuarios_etiquetas` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_etiqueta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios_etiquetas`
--

INSERT INTO `usuarios_etiquetas` (`id`, `id_usuario`, `id_etiqueta`) VALUES
(35, 7, 1),
(41, 19, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_issues`
--

CREATE TABLE `usuarios_issues` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_issues` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_jira`
--

CREATE TABLE `usuarios_jira` (
  `id` int(11) NOT NULL,
  `id_jira` varchar(200) NOT NULL,
  `nombre_jira` varchar(100) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp(),
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_retrospectivas`
--

CREATE TABLE `usuarios_retrospectivas` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_retrospectiva` int(11) NOT NULL,
  `completada` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios_retrospectivas`
--

INSERT INTO `usuarios_retrospectivas` (`id`, `id_usuario`, `id_retrospectiva`, `completada`, `createdAt`, `updatedAt`) VALUES
(3, 7, 5, 1, '2023-03-28 17:49:20', '2023-03-28 17:57:49'),
(5, 7, 6, 0, '2023-03-28 22:40:21', '2023-03-30 04:15:31'),
(6, 7, 7, 0, '2023-03-29 20:57:00', '2023-03-29 20:57:00'),
(7, 21, 5, 1, '2023-03-30 15:36:23', '2023-03-30 15:39:16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `epics`
--
ALTER TABLE `epics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_reporte` (`id_reporte`);

--
-- Indices de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_color` (`id_color`);

--
-- Indices de la tabla `funciones`
--
ALTER TABLE `funciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `issues`
--
ALTER TABLE `issues`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `clave` (`clave`),
  ADD KEY `id_epic` (`id_epic`);

--
-- Indices de la tabla `opciones_respuestas`
--
ALTER TABLE `opciones_respuestas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tipo_pregunta` (`id_tipo_pregunta`);

--
-- Indices de la tabla `preguntas_opciones`
--
ALTER TABLE `preguntas_opciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pregunta` (`id_pregunta`),
  ADD KEY `id_opcion` (`id_opcion`);

--
-- Indices de la tabla `preguntas_retrospectivas`
--
ALTER TABLE `preguntas_retrospectivas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pregunta` (`id_pregunta`),
  ADD KEY `id_retrospectiva` (`id_retrospectiva`);

--
-- Indices de la tabla `reportes`
--
ALTER TABLE `reportes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_retrospectiva` (`id_retrospectiva`);

--
-- Indices de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_retrospectiva` (`id_retrospectiva`),
  ADD KEY `id_pregunta` (`id_pregunta`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `retrospectivas`
--
ALTER TABLE `retrospectivas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_reporte` (`id_reporte`);

--
-- Indices de la tabla `retrospectiva_etiquetas`
--
ALTER TABLE `retrospectiva_etiquetas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_retrospectiva` (`id_retrospectiva`) USING BTREE,
  ADD KEY `id_etiqueta` (`id_etiqueta`) USING BTREE;

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles_funciones`
--
ALTER TABLE `roles_funciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_rol` (`id_rol`),
  ADD KEY `id_funcion` (`id_funcion`);

--
-- Indices de la tabla `sprints`
--
ALTER TABLE `sprints`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_reporte` (`id_reporte`);

--
-- Indices de la tabla `sprints_epics`
--
ALTER TABLE `sprints_epics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sprint` (`id_sprint`),
  ADD KEY `id_epic` (`id_epic`);

--
-- Indices de la tabla `sprints_issues`
--
ALTER TABLE `sprints_issues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sprint` (`id_sprint`),
  ADD KEY `id_issue` (`id_issue`);

--
-- Indices de la tabla `tipos_preguntas`
--
ALTER TABLE `tipos_preguntas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD KEY `id_rol` (`id_rol`);

--
-- Indices de la tabla `usuarios_etiquetas`
--
ALTER TABLE `usuarios_etiquetas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_etiqueta` (`id_etiqueta`);

--
-- Indices de la tabla `usuarios_issues`
--
ALTER TABLE `usuarios_issues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_issues` (`id_issues`);

--
-- Indices de la tabla `usuarios_jira`
--
ALTER TABLE `usuarios_jira`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_jira` (`id_jira`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios_retrospectivas`
--
ALTER TABLE `usuarios_retrospectivas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_retrospectiva` (`id_retrospectiva`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `colores`
--
ALTER TABLE `colores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `epics`
--
ALTER TABLE `epics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `funciones`
--
ALTER TABLE `funciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `issues`
--
ALTER TABLE `issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `opciones_respuestas`
--
ALTER TABLE `opciones_respuestas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `preguntas_opciones`
--
ALTER TABLE `preguntas_opciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `preguntas_retrospectivas`
--
ALTER TABLE `preguntas_retrospectivas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `reportes`
--
ALTER TABLE `reportes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `retrospectivas`
--
ALTER TABLE `retrospectivas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `retrospectiva_etiquetas`
--
ALTER TABLE `retrospectiva_etiquetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `roles_funciones`
--
ALTER TABLE `roles_funciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sprints`
--
ALTER TABLE `sprints`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sprints_epics`
--
ALTER TABLE `sprints_epics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sprints_issues`
--
ALTER TABLE `sprints_issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipos_preguntas`
--
ALTER TABLE `tipos_preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `usuarios_etiquetas`
--
ALTER TABLE `usuarios_etiquetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `usuarios_issues`
--
ALTER TABLE `usuarios_issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios_jira`
--
ALTER TABLE `usuarios_jira`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios_retrospectivas`
--
ALTER TABLE `usuarios_retrospectivas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
