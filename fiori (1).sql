-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 30, 2023 at 05:30 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fiori`
--

-- --------------------------------------------------------

--
-- Table structure for table `colores`
--

CREATE TABLE `colores` (
  `id` int(11) NOT NULL,
  `color` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `colores`
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
-- Table structure for table `epics`
--

CREATE TABLE `epics` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `resumen` varchar(500) NOT NULL,
  `color` varchar(100) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fecha_fin` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_reporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `etiquetas`
--

CREATE TABLE `etiquetas` (
  `id` int(11) NOT NULL,
  `etiqueta` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_color` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `etiquetas`
--

INSERT INTO `etiquetas` (`id`, `etiqueta`, `createdAt`, `updatedAt`, `id_color`) VALUES
(1, 'Full-Stack', '2023-03-27 00:00:00', '2023-03-29 20:13:21', 2),
(2, 'Front-End', '2023-03-27 00:00:00', '2023-03-27 00:00:00', 3),
(3, 'Back-End', '2023-03-27 00:00:00', '2023-03-27 00:00:00', 6);

-- --------------------------------------------------------

--
-- Table structure for table `funciones`
--

CREATE TABLE `funciones` (
  `id` int(11) NOT NULL,
  `funcion` varchar(200) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `issues`
--

CREATE TABLE `issues` (
  `id` int(11) NOT NULL,
  `clave` varchar(100) NOT NULL,
  `prioridad` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `story_points` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_epic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `opciones_respuestas`
--

CREATE TABLE `opciones_respuestas` (
  `id` int(11) NOT NULL,
  `opcion_respuesta` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `opciones_respuestas`
--

INSERT INTO `opciones_respuestas` (`id`, `opcion_respuesta`, `createdAt`, `updatedAt`) VALUES
(1, 'Excelente', '2023-03-27 23:34:50', '2023-03-27 23:34:50'),
(2, 'Bueno', '2023-03-27 23:34:50', '2023-03-27 23:34:50'),
(3, 'Regular', '2023-03-27 23:34:50', '2023-03-27 23:34:50'),
(4, 'Malo', '2023-03-27 23:34:50', '2023-03-27 23:34:50');

-- --------------------------------------------------------

--
-- Table structure for table `preguntas`
--

CREATE TABLE `preguntas` (
  `id` int(11) NOT NULL,
  `pregunta` varchar(1000) NOT NULL,
  `predeterminada` tinyint(1) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_tipo_pregunta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `preguntas`
--

INSERT INTO `preguntas` (`id`, `pregunta`, `predeterminada`, `createdAt`, `updatedAt`, `id_tipo_pregunta`) VALUES
(3, '¿Qué hicimos bien en el Sprint que vale la pena mencionar?', 0, '2023-03-27 23:33:11', '2023-03-27 23:33:11', 1),
(4, '¿Qué hicimos mal que debemos de hacer diferente en el siguiente sprint?', 0, '2023-03-27 23:33:11', '2023-03-27 23:33:11', 2),
(5, '¿Cómo calificarías la calidad de las reuniones del equipo durante el último sprint?', 0, '2023-03-27 23:35:03', '2023-03-27 23:35:03', 3),
(6, 'En una escala del 1 al 5 ¿Cómo calificas tu desempeño en el sprint?', 0, '2023-03-30 03:41:26', '2023-03-30 03:41:26', 4);

-- --------------------------------------------------------

--
-- Table structure for table `preguntas_opciones`
--

CREATE TABLE `preguntas_opciones` (
  `id` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `id_opcion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `preguntas_opciones`
--

INSERT INTO `preguntas_opciones` (`id`, `id_pregunta`, `id_opcion`) VALUES
(5, 5, 1),
(6, 5, 2),
(7, 5, 3),
(8, 5, 4);

-- --------------------------------------------------------

--
-- Table structure for table `preguntas_retrospectivas`
--

CREATE TABLE `preguntas_retrospectivas` (
  `id` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `id_retrospectiva` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `preguntas_retrospectivas`
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
-- Table structure for table `reportes`
--

CREATE TABLE `reportes` (
  `id` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `archivo` varchar(5000) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_retrospectiva` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `respuestas`
--

CREATE TABLE `respuestas` (
  `id` int(11) NOT NULL,
  `respuesta` varchar(3000) NOT NULL,
  `anonimo` tinyint(1) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_usuario` int(11) DEFAULT NULL,
  `id_retrospectiva` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `id_sesionRespuesta` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `retrospectivas`
--

CREATE TABLE `retrospectivas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fecha_fin` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_reporte` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `retrospectivas`
--

INSERT INTO `retrospectivas` (`id`, `titulo`, `descripcion`, `fecha_inicio`, `fecha_fin`, `createdAt`, `updatedAt`, `id_reporte`) VALUES
(5, 'Retro 1', 'Descripcion retro 1', '2023-03-29 21:54:24', '2023-03-28 17:49:10', '2023-03-28 17:49:10', '2023-03-28 17:49:10', NULL),
(6, 'Retro 2', 'Descripcion retro 2', '2023-03-28 21:28:22', '2023-03-28 21:28:22', '2023-03-28 21:28:22', '2023-03-28 21:28:22', NULL),
(7, 'Retro 3', 'Descripcion retro 3', '2023-03-29 20:56:47', '2023-03-29 20:56:47', '2023-03-29 20:56:47', '2023-03-29 20:56:47', NULL),
(8, 'Retro 4', 'Descripcion retro 4', '2023-03-29 21:54:38', '2023-03-29 21:53:18', '2023-03-29 21:53:18', '2023-03-29 21:53:18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `retrospectiva_etiquetas`
--

CREATE TABLE `retrospectiva_etiquetas` (
  `id` int(11) NOT NULL,
  `id_retrospectiva` int(11) NOT NULL,
  `id_etiqueta` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `retrospectiva_etiquetas`
--

INSERT INTO `retrospectiva_etiquetas` (`id`, `id_retrospectiva`, `id_etiqueta`, `createdAt`, `updatedAt`) VALUES
(9, 5, 3, '2023-03-28 18:34:51', '2023-03-28 18:34:51'),
(10, 6, 1, '2023-03-28 21:28:40', '2023-03-28 21:28:40'),
(11, 6, 2, '2023-03-28 21:28:40', '2023-03-28 21:28:40'),
(12, 7, 1, '2023-03-29 21:21:15', '2023-03-29 21:21:15'),
(13, 7, 3, '2023-03-29 21:24:49', '2023-03-29 21:24:49');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `rol`, `createdAt`, `updatedAt`) VALUES
(1, 'Administrador', '2023-03-27 00:00:00', '2023-03-27 00:00:00'),
(2, 'Responsable', '2023-03-27 00:00:00', '2023-03-27 00:00:00'),
(3, 'Squad Member', '2023-03-27 00:00:00', '2023-03-27 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `roles_funciones`
--

CREATE TABLE `roles_funciones` (
  `id` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `id_funcion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sprints`
--

CREATE TABLE `sprints` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `fecha_inicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fecha_fin` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_reporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sprints_epics`
--

CREATE TABLE `sprints_epics` (
  `id` int(11) NOT NULL,
  `id_sprint` int(11) NOT NULL,
  `id_epic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sprints_issues`
--

CREATE TABLE `sprints_issues` (
  `id` int(11) NOT NULL,
  `id_sprint` int(11) NOT NULL,
  `id_issue` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tipos_preguntas`
--

CREATE TABLE `tipos_preguntas` (
  `id` int(11) NOT NULL,
  `tipo_pregunta` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tipos_preguntas`
--

INSERT INTO `tipos_preguntas` (`id`, `tipo_pregunta`, `createdAt`, `updatedAt`) VALUES
(1, 'Párrafo', '2023-03-27 23:32:09', '2023-03-27 23:32:09'),
(2, 'Respuesta corta', '2023-03-27 23:32:09', '2023-03-27 23:32:09'),
(3, 'Lista desplegable', '2023-03-27 23:32:09', '2023-03-27 23:32:09'),
(4, 'Escala numérica', '2023-03-27 23:32:09', '2023-03-27 23:32:09');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `foto` varchar(1000) DEFAULT NULL,
  `id_google` varchar(100) DEFAULT NULL,
  `id_jira` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `correo`, `nombre`, `foto`, `id_google`, `id_jira`, `createdAt`, `updatedAt`, `id_rol`) VALUES
(7, 'correo@zeb.mx', '', NULL, NULL, NULL, '2023-03-29 22:40:26', '2023-03-30 03:23:24', 1);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_etiquetas`
--

CREATE TABLE `usuarios_etiquetas` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_etiqueta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios_etiquetas`
--

INSERT INTO `usuarios_etiquetas` (`id`, `id_usuario`, `id_etiqueta`) VALUES
(35, 7, 1),
(41, 19, 2);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_issues`
--

CREATE TABLE `usuarios_issues` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_issues` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios_retrospectivas`
--

CREATE TABLE `usuarios_retrospectivas` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_retrospectiva` int(11) NOT NULL,
  `completada` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios_retrospectivas`
--

INSERT INTO `usuarios_retrospectivas` (`id`, `id_usuario`, `id_retrospectiva`, `completada`, `createdAt`, `updatedAt`) VALUES
(3, 7, 5, 1, '2023-03-28 17:49:20', '2023-03-28 17:57:49'),
(5, 7, 6, 0, '2023-03-28 22:40:21', '2023-03-30 04:15:31'),
(6, 7, 7, 0, '2023-03-29 20:57:00', '2023-03-29 20:57:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `epics`
--
ALTER TABLE `epics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_reporte` (`id_reporte`);

--
-- Indexes for table `etiquetas`
--
ALTER TABLE `etiquetas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_color` (`id_color`);

--
-- Indexes for table `funciones`
--
ALTER TABLE `funciones`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `issues`
--
ALTER TABLE `issues`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `clave` (`clave`),
  ADD KEY `id_epic` (`id_epic`);

--
-- Indexes for table `opciones_respuestas`
--
ALTER TABLE `opciones_respuestas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tipo_pregunta` (`id_tipo_pregunta`);

--
-- Indexes for table `preguntas_opciones`
--
ALTER TABLE `preguntas_opciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pregunta` (`id_pregunta`),
  ADD KEY `id_opcion` (`id_opcion`);

--
-- Indexes for table `preguntas_retrospectivas`
--
ALTER TABLE `preguntas_retrospectivas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pregunta` (`id_pregunta`),
  ADD KEY `id_retrospectiva` (`id_retrospectiva`);

--
-- Indexes for table `reportes`
--
ALTER TABLE `reportes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_retrospectiva` (`id_retrospectiva`);

--
-- Indexes for table `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_retrospectiva` (`id_retrospectiva`),
  ADD KEY `id_pregunta` (`id_pregunta`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indexes for table `retrospectivas`
--
ALTER TABLE `retrospectivas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_reporte` (`id_reporte`);

--
-- Indexes for table `retrospectiva_etiquetas`
--
ALTER TABLE `retrospectiva_etiquetas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_retrospectiva` (`id_retrospectiva`) USING BTREE,
  ADD KEY `id_etiqueta` (`id_etiqueta`) USING BTREE;

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles_funciones`
--
ALTER TABLE `roles_funciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_rol` (`id_rol`),
  ADD KEY `id_funcion` (`id_funcion`);

--
-- Indexes for table `sprints`
--
ALTER TABLE `sprints`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_reporte` (`id_reporte`);

--
-- Indexes for table `sprints_epics`
--
ALTER TABLE `sprints_epics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sprint` (`id_sprint`),
  ADD KEY `id_epic` (`id_epic`);

--
-- Indexes for table `sprints_issues`
--
ALTER TABLE `sprints_issues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sprint` (`id_sprint`),
  ADD KEY `id_issue` (`id_issue`);

--
-- Indexes for table `tipos_preguntas`
--
ALTER TABLE `tipos_preguntas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD KEY `id_rol` (`id_rol`);

--
-- Indexes for table `usuarios_etiquetas`
--
ALTER TABLE `usuarios_etiquetas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_etiqueta` (`id_etiqueta`);

--
-- Indexes for table `usuarios_issues`
--
ALTER TABLE `usuarios_issues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_issues` (`id_issues`);

--
-- Indexes for table `usuarios_retrospectivas`
--
ALTER TABLE `usuarios_retrospectivas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_retrospectiva` (`id_retrospectiva`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `colores`
--
ALTER TABLE `colores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `epics`
--
ALTER TABLE `epics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `etiquetas`
--
ALTER TABLE `etiquetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `funciones`
--
ALTER TABLE `funciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `issues`
--
ALTER TABLE `issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `opciones_respuestas`
--
ALTER TABLE `opciones_respuestas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `preguntas_opciones`
--
ALTER TABLE `preguntas_opciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `preguntas_retrospectivas`
--
ALTER TABLE `preguntas_retrospectivas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `reportes`
--
ALTER TABLE `reportes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `respuestas`
--
ALTER TABLE `respuestas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `retrospectivas`
--
ALTER TABLE `retrospectivas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `retrospectiva_etiquetas`
--
ALTER TABLE `retrospectiva_etiquetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roles_funciones`
--
ALTER TABLE `roles_funciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sprints`
--
ALTER TABLE `sprints`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sprints_epics`
--
ALTER TABLE `sprints_epics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sprints_issues`
--
ALTER TABLE `sprints_issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tipos_preguntas`
--
ALTER TABLE `tipos_preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `usuarios_etiquetas`
--
ALTER TABLE `usuarios_etiquetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `usuarios_issues`
--
ALTER TABLE `usuarios_issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuarios_retrospectivas`
--
ALTER TABLE `usuarios_retrospectivas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `epics`
--
ALTER TABLE `epics`
  ADD CONSTRAINT `epics_reporte_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reportes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `etiquetas`
--
ALTER TABLE `etiquetas`
  ADD CONSTRAINT `etiquetas_colores_ibfk_1` FOREIGN KEY (`id_color`) REFERENCES `colores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `issues`
--
ALTER TABLE `issues`
  ADD CONSTRAINT `issues_epic_ibfk_1` FOREIGN KEY (`id_epic`) REFERENCES `epics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `pregunta_tipo_pregunta_ibfk_1` FOREIGN KEY (`id_tipo_pregunta`) REFERENCES `tipos_preguntas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `preguntas_opciones`
--
ALTER TABLE `preguntas_opciones`
  ADD CONSTRAINT `pregunta_opc_res_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pregunta_opc_res_ibfk_2` FOREIGN KEY (`id_opcion`) REFERENCES `opciones_respuestas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `preguntas_retrospectivas`
--
ALTER TABLE `preguntas_retrospectivas`
  ADD CONSTRAINT `pregunta_retrospectiva_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pregunta_retrospectiva_ibfk_2` FOREIGN KEY (`id_retrospectiva`) REFERENCES `retrospectivas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reportes`
--
ALTER TABLE `reportes`
  ADD CONSTRAINT `reportes_retrospectiva_ibfk_1` FOREIGN KEY (`id_retrospectiva`) REFERENCES `retrospectivas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `respuestas`
--
ALTER TABLE `respuestas`
  ADD CONSTRAINT `respuestas_preguntas_ibfk_3` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `respuestas_retrospectivas_ibfk_2` FOREIGN KEY (`id_retrospectiva`) REFERENCES `retrospectivas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `respuestas_usuario_ibfk1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `retrospectivas`
--
ALTER TABLE `retrospectivas`
  ADD CONSTRAINT `retrospectiva_reporte_ibfk_1` FOREIGN KEY (`id_reporte`) REFERENCES `reportes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `retrospectiva_etiquetas`
--
ALTER TABLE `retrospectiva_etiquetas`
  ADD CONSTRAINT `retrospectiva_etiquetas_ibfk_1` FOREIGN KEY (`id_retrospectiva`) REFERENCES `retrospectivas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `retrospectiva_etiquetas_ibfk_2` FOREIGN KEY (`id_etiqueta`) REFERENCES `etiquetas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sprints`
--
ALTER TABLE `sprints`
  ADD CONSTRAINT `sprint_reporte` FOREIGN KEY (`id_reporte`) REFERENCES `reportes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sprints_epics`
--
ALTER TABLE `sprints_epics`
  ADD CONSTRAINT `sprint_epic_ibfk_1` FOREIGN KEY (`id_sprint`) REFERENCES `sprints` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sprint_epic_ibfk_2` FOREIGN KEY (`id_epic`) REFERENCES `epics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sprints_issues`
--
ALTER TABLE `sprints_issues`
  ADD CONSTRAINT `sprint_issue_ibfk_1` FOREIGN KEY (`id_issue`) REFERENCES `issues` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sprint_issue_ibfk_2` FOREIGN KEY (`id_sprint`) REFERENCES `sprints` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuario_rol_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `usuarios_etiquetas`
--
ALTER TABLE `usuarios_etiquetas`
  ADD CONSTRAINT `usuario_etiqueta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_etiqueta_ibfk_2` FOREIGN KEY (`id_etiqueta`) REFERENCES `etiquetas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `usuarios_issues`
--
ALTER TABLE `usuarios_issues`
  ADD CONSTRAINT `usuario_issue_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_issue_ibfk_2` FOREIGN KEY (`id_issues`) REFERENCES `issues` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `usuarios_retrospectivas`
--
ALTER TABLE `usuarios_retrospectivas`
  ADD CONSTRAINT `usuarios_retrospectivas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarios_retrospectivas_ibfk_2` FOREIGN KEY (`id_retrospectiva`) REFERENCES `retrospectivas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
