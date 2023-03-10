-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-03-2023 a las 05:12:42
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
  `color` varchar(100) NOT NULL,
  `resumen` varchar(1000) NOT NULL,
  `id_reporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `epic_sprint`
--

CREATE TABLE `epic_sprint` (
  `id_epic` int(11) NOT NULL,
  `id_sprint` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiqueta`
--

CREATE TABLE `etiqueta` (
  `id_etiqueta` int(11) NOT NULL,
  `nombre_etiqueta` varchar(50) NOT NULL,
  `color_etiqueta` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, 'Registrar Retrospectiva'),
(2, 'Crear Sprint Backlog'),
(3, 'Asignar Tareas'),
(4, 'Realizar Pruebas de Integración'),
(5, 'Escribir Documentación'),
(6, 'Realizar Pruebas de Aceptación'),
(7, 'Realizar Revisión de Código'),
(8, 'Estimar Tareas'),
(9, 'Planificar Iteraciones'),
(10, 'Definir Historias de Usuario'),
(11, 'Desplegar Aplicación'),
(12, 'Realizar Pruebas Unitarias'),
(13, 'Realizar Pruebas de Regresión'),
(14, 'Gestionar Requerimientos'),
(15, 'Realizar Reuniones de Equipo'),
(16, 'Gestionar Incidencias'),
(17, 'Configurar Ambiente de Desarrollo'),
(18, 'Realizar Capacitación del Equipo'),
(19, 'Realizar Estudios de Factibilidad'),
(20, 'Gestionar Cambios de Requerimientos'),
(21, 'Realizar Pruebas de Usabilidad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `issue`
--

CREATE TABLE `issue` (
  `clave` int(11) NOT NULL,
  `prioridad` varchar(50) NOT NULL,
  `resumen` varchar(1000) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `responsable` varchar(200) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `storyPoints` int(11) NOT NULL,
  `id_epic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `issue_sprint`
--

CREATE TABLE `issue_sprint` (
  `clave` int(11) NOT NULL,
  `id_sprint` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opcionrespuesta_pregunta`
--

CREATE TABLE `opcionrespuesta_pregunta` (
  `id_opcion_respuesta` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opcion_respuesta`
--

CREATE TABLE `opcion_respuesta` (
  `id_opcion_respuesta` int(11) NOT NULL,
  `opcion_respuesta` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `id_pregunta` int(11) NOT NULL,
  `predeterminada` tinyint(1) NOT NULL,
  `pregunta` varchar(4000) NOT NULL,
  `id_tipo_pregunta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte`
--

CREATE TABLE `reporte` (
  `id_reporte` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `archivo_texto` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta`
--

CREATE TABLE `respuesta` (
  `id_respuesta` int(11) NOT NULL,
  `esAnonimo` tinyint(1) NOT NULL,
  `respuesta` varchar(4000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta_pregunta_retrospectiva`
--

CREATE TABLE `respuesta_pregunta_retrospectiva` (
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
  `titulo_retrospectiva` varchar(200) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_fin` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_reporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_funcion`
--

CREATE TABLE `rol_funcion` (
  `id_rol` int(11) NOT NULL,
  `id_funcion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sprint`
--

CREATE TABLE `sprint` (
  `id_sprint` int(11) NOT NULL,
  `nombre_sprint` varchar(500) NOT NULL,
  `id_reporte` int(11) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_fin` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_pregunta`
--

CREATE TABLE `tipo_pregunta` (
  `id_tipo_pregunta` int(11) NOT NULL,
  `tipo_pregunta` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usario_etiqueta`
--

CREATE TABLE `usario_etiqueta` (
  `id_usuario` int(11) NOT NULL,
  `id_etiqueta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `foto` varchar(1000) NOT NULL,
  `id_usuario_jira` int(11) DEFAULT NULL,
  `id_usuario_google` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `correo`, `nombre`, `apellido`, `foto`, `id_usuario_jira`, `id_usuario_google`) VALUES
(20, 'ana.castillo@zeb.mx', 'Ana', 'Castillo', 'http://example.com/ana.jpg', 901, 234),
(8, 'ana.gonzalez@zeb.mx', 'Ana', 'Gonzalez', 'http://example.com/ana.jpg', 789, 12),
(15, 'ana.rojas@zeb.mx', 'Ana', 'Rojas', 'http://example.com/ana.jpg', 456, 789),
(10, 'carlos.rodriguez@zeb.mx', 'Carlos', 'Rodriguez', 'http://example.com/carlos.jpg', 901, 234),
(7, 'david.martinez@zeb.mx', 'David', 'Martinez', 'http://example.com/david.jpg', 678, 901),
(18, 'emilio.gonzalez@zeb.mx', 'Emilio', 'Gonzalez', 'http://example.com/emilio.jpg', 789, 12),
(16, 'fernando.lopez@zeb.mx', 'Fernando', 'Lopez', 'http://example.com/fernando.jpg', 567, 890),
(2, 'jane.doe@zeb.mx', 'Jane', 'Doe', 'http://example.com/jane.jpg', 123, 456),
(3, 'john.smith@zeb.mx', 'John', 'Smith', 'http://example.com/john.jpg', 234, 567),
(5, 'jorge.lopez@zeb.mx', 'Jorge', 'Lopez', 'http://example.com/jorge.jpg', 456, 789),
(9, 'juan.ramirez@zeb.mx', 'Juan', 'Ramirez', 'http://example.com/juan.jpg', 890, 123),
(11, 'laura.sanchez@zeb.mx', 'Laura', 'Sanchez', 'http://example.com/laura.jpg', 12, 345),
(19, 'liliana.perez@zeb.mx', 'Liliana', 'Perez', 'http://example.com/liliana.jpg', 890, 123),
(12, 'luis.hernandez@zeb.mx', 'Luis', 'Hernandez', 'http://example.com/luis.jpg', 123, 456),
(4, 'maria.garcia@zeb.mx', 'Maria', 'Garcia', 'http://example.com/maria.jpg', 345, 678),
(14, 'mario.castillo@zeb.mx', 'Mario', 'Castillo', 'http://example.com/mario.jpg', 345, 678),
(13, 'martha.ortiz@zeb.mx', 'Martha', 'Ortiz', 'http://example.com/martha.jpg', 234, 567),
(1, 'santi.rodriguez@zeb.mx', 'Santiago', 'Rodriguez', 'http://google.com', NULL, NULL),
(6, 'sara.perez@zeb.mx', 'Sara', 'Perez', 'http://example.com/sara.jpg', 567, 890),
(17, 'sofia.ramirez@zeb.mx', 'Sofia', 'Ramirez', 'http://example.com/sofia.jpg', 678, 901);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_issue`
--

CREATE TABLE `usuario_issue` (
  `id_usuario` int(11) NOT NULL,
  `clave` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_respuesta`
--

CREATE TABLE `usuario_respuesta` (
  `id_usuario` int(11) NOT NULL,
  `id_respuesta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_rol`
--

CREATE TABLE `usuario_rol` (
  `id_usuario` int(11) NOT NULL,
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
-- Indices de la tabla `epic_sprint`
--
ALTER TABLE `epic_sprint`
  ADD UNIQUE KEY `id_epic` (`id_epic`),
  ADD UNIQUE KEY `id_sprint` (`id_sprint`);

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
  ADD UNIQUE KEY `clave` (`clave`),
  ADD UNIQUE KEY `id_sprint` (`id_sprint`);

--
-- Indices de la tabla `opcionrespuesta_pregunta`
--
ALTER TABLE `opcionrespuesta_pregunta`
  ADD KEY `id_opcion_respuesta` (`id_opcion_respuesta`),
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
  ADD UNIQUE KEY `id_respuesta` (`id_respuesta`),
  ADD UNIQUE KEY `id_pregunta` (`id_pregunta`),
  ADD UNIQUE KEY `id_retrospectiva` (`id_retrospectiva`);

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
  ADD PRIMARY KEY (`id_rol`,`nombre_rol`);

--
-- Indices de la tabla `rol_funcion`
--
ALTER TABLE `rol_funcion`
  ADD UNIQUE KEY `id_rol` (`id_rol`),
  ADD UNIQUE KEY `id_funcion` (`id_funcion`);

--
-- Indices de la tabla `sprint`
--
ALTER TABLE `sprint`
  ADD PRIMARY KEY (`id_sprint`),
  ADD KEY `id_reporte` (`id_reporte`);

--
-- Indices de la tabla `tipo_pregunta`
--
ALTER TABLE `tipo_pregunta`
  ADD PRIMARY KEY (`id_tipo_pregunta`);

--
-- Indices de la tabla `usario_etiqueta`
--
ALTER TABLE `usario_etiqueta`
  ADD UNIQUE KEY `id_usuario` (`id_usuario`),
  ADD UNIQUE KEY `id_etiqueta` (`id_etiqueta`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`correo`,`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuario_issue`
--
ALTER TABLE `usuario_issue`
  ADD UNIQUE KEY `id_usuario` (`id_usuario`),
  ADD UNIQUE KEY `clave` (`clave`);

--
-- Indices de la tabla `usuario_respuesta`
--
ALTER TABLE `usuario_respuesta`
  ADD UNIQUE KEY `id_usuario` (`id_usuario`),
  ADD UNIQUE KEY `id_respuesta` (`id_respuesta`);

--
-- Indices de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD UNIQUE KEY `id_usuario` (`id_usuario`),
  ADD UNIQUE KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `etiqueta`
--
ALTER TABLE `etiqueta`
  MODIFY `id_etiqueta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `funcion`
--
ALTER TABLE `funcion`
  MODIFY `id_funcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `opcion_respuesta`
--
ALTER TABLE `opcion_respuesta`
  MODIFY `id_opcion_respuesta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `id_pregunta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reporte`
--
ALTER TABLE `reporte`
  MODIFY `id_reporte` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  MODIFY `id_respuesta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `retrospectiva`
--
ALTER TABLE `retrospectiva`
  MODIFY `id_retrospectiva` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_pregunta`
--
ALTER TABLE `tipo_pregunta`
  MODIFY `id_tipo_pregunta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `epic`
--
ALTER TABLE `epic`
  ADD CONSTRAINT `epic_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reporte` (`id_reporte`);

--
-- Filtros para la tabla `epic_sprint`
--
ALTER TABLE `epic_sprint`
  ADD CONSTRAINT `epic_sprint_ibfk_1` FOREIGN KEY (`id_epic`) REFERENCES `epic` (`id_epic`),
  ADD CONSTRAINT `epic_sprint_ibfk_2` FOREIGN KEY (`id_sprint`) REFERENCES `sprint` (`id_sprint`);

--
-- Filtros para la tabla `issue_sprint`
--
ALTER TABLE `issue_sprint`
  ADD CONSTRAINT `issue_sprint_ibfk_1` FOREIGN KEY (`clave`) REFERENCES `issue` (`clave`),
  ADD CONSTRAINT `issue_sprint_ibfk_2` FOREIGN KEY (`id_sprint`) REFERENCES `sprint` (`id_sprint`);

--
-- Filtros para la tabla `opcionrespuesta_pregunta`
--
ALTER TABLE `opcionrespuesta_pregunta`
  ADD CONSTRAINT `opcionrespuesta_pregunta_ibfk_1` FOREIGN KEY (`id_opcion_respuesta`) REFERENCES `opcion_respuesta` (`id_opcion_respuesta`),
  ADD CONSTRAINT `opcionrespuesta_pregunta_ibfk_2` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id_pregunta`);

--
-- Filtros para la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD CONSTRAINT `pregunta_ibfk_1` FOREIGN KEY (`id_tipo_pregunta`) REFERENCES `tipo_pregunta` (`id_tipo_pregunta`);

--
-- Filtros para la tabla `respuesta_pregunta_retrospectiva`
--
ALTER TABLE `respuesta_pregunta_retrospectiva`
  ADD CONSTRAINT `respuesta_pregunta_retrospectiva_ibfk_1` FOREIGN KEY (`id_respuesta`) REFERENCES `respuesta` (`id_respuesta`),
  ADD CONSTRAINT `respuesta_pregunta_retrospectiva_ibfk_2` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id_pregunta`),
  ADD CONSTRAINT `respuesta_pregunta_retrospectiva_ibfk_3` FOREIGN KEY (`id_retrospectiva`) REFERENCES `retrospectiva` (`id_retrospectiva`);

--
-- Filtros para la tabla `retrospectiva`
--
ALTER TABLE `retrospectiva`
  ADD CONSTRAINT `retrospectiva_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reporte` (`id_reporte`);

--
-- Filtros para la tabla `rol_funcion`
--
ALTER TABLE `rol_funcion`
  ADD CONSTRAINT `rol_funcion_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`),
  ADD CONSTRAINT `rol_funcion_ibfk_2` FOREIGN KEY (`id_funcion`) REFERENCES `funcion` (`id_funcion`);

--
-- Filtros para la tabla `sprint`
--
ALTER TABLE `sprint`
  ADD CONSTRAINT `sprint_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reporte` (`id_reporte`);

--
-- Filtros para la tabla `usario_etiqueta`
--
ALTER TABLE `usario_etiqueta`
  ADD CONSTRAINT `usario_etiqueta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `usario_etiqueta_ibfk_2` FOREIGN KEY (`id_etiqueta`) REFERENCES `etiqueta` (`id_etiqueta`);

--
-- Filtros para la tabla `usuario_issue`
--
ALTER TABLE `usuario_issue`
  ADD CONSTRAINT `usuario_issue_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `usuario_issue_ibfk_2` FOREIGN KEY (`clave`) REFERENCES `issue` (`clave`);

--
-- Filtros para la tabla `usuario_respuesta`
--
ALTER TABLE `usuario_respuesta`
  ADD CONSTRAINT `usuario_respuesta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `usuario_respuesta_ibfk_2` FOREIGN KEY (`id_respuesta`) REFERENCES `respuesta` (`id_respuesta`);

--
-- Filtros para la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD CONSTRAINT `usuario_rol_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `usuario_rol_ibfk_2` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
