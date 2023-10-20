-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 20-Out-2023 às 14:42
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ncge_bombeiros`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `decisao_transporte`
--

CREATE TABLE `decisao_transporte` (
  `id_decisao_transporte` int(11) NOT NULL,
  `MDT` varchar(45) NOT NULL,
  `S1DT` varchar(45) NOT NULL,
  `S2DT` varchar(45) NOT NULL,
  `S3DT` varchar(45) NOT NULL,
  `DemanteDT` varchar(45) NOT NULL,
  `DecisaoDeTransporteDt` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `decisao_transporte`
--
ALTER TABLE `decisao_transporte`
  ADD PRIMARY KEY (`id_decisao_transporte`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
