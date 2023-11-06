-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06/11/2023 às 22:21
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

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
-- Estrutura para tabela `objetos_recolhidos_imagem`
--

CREATE TABLE `objetos_recolhidos_imagem` (
  `id_objetos_recolgidos-imagem` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `imagem` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `objetos_recolhidos_imagem`
--
ALTER TABLE `objetos_recolhidos_imagem`
  ADD PRIMARY KEY (`id_objetos_recolgidos-imagem`),
  ADD KEY `fk_objetos_recolhidos_imagem_cpf_paciente` (`cpf_paciente`),
  ADD KEY `fk_objetos_recolhidos_imagem_bombeiro` (`bombeiro`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `objetos_recolhidos_imagem`
--
ALTER TABLE `objetos_recolhidos_imagem`
  MODIFY `id_objetos_recolgidos-imagem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `objetos_recolhidos_imagem`
--
ALTER TABLE `objetos_recolhidos_imagem`
  ADD CONSTRAINT `fk_objetos_recolhidos_imagem_bombeiro` FOREIGN KEY (`bombeiro`) REFERENCES `cadastro` (`cod_cadastro`),
  ADD CONSTRAINT `fk_objetos_recolhidos_imagem_cpf_paciente` FOREIGN KEY (`cpf_paciente`) REFERENCES `paciente` (`cpf_paciente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
