-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21/10/2023 às 01:47
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
-- Estrutura para tabela `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `anamnese`
--

CREATE TABLE `anamnese` (
  `id_anamnese` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `anamnese_gestacional`
--

CREATE TABLE `anamnese_gestacional` (
  `id_anamnese_gestacional` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `avaliacao_paciente_maior`
--

CREATE TABLE `avaliacao_paciente_maior` (
  `id_avaliacao_paciente_maior` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `avaliacao_paciente_menor`
--

CREATE TABLE `avaliacao_paciente_menor` (
  `id_avaliacao_paciente_menor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cadastro`
--

CREATE TABLE `cadastro` (
  `cod_cadastro` int(11) NOT NULL,
  `senha_cadastro` varchar(45) NOT NULL,
  `nome_cadastro` varchar(45) NOT NULL,
  `Acesso_cadastro` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cadastro`
--

INSERT INTO `cadastro` (`cod_cadastro`, `senha_cadastro`, `nome_cadastro`, `Acesso_cadastro`) VALUES
(123456, 'batata', 'Nylton', 's');

-- --------------------------------------------------------

--
-- Estrutura para tabela `decisao_transporte`
--

CREATE TABLE `decisao_transporte` (
  `id_decisao_transporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `emergencias`
--

CREATE TABLE `emergencias` (
  `id_emergencias` int(11) NOT NULL,
  `tipo_emergencia` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `emergencias`
--

INSERT INTO `emergencias` (`id_emergencias`, `tipo_emergencia`) VALUES
(1, 'Emergencia medica,,,,,,,,,,,,,,,,,,,,,');

-- --------------------------------------------------------

--
-- Estrutura para tabela `forma_conducao`
--

CREATE TABLE `forma_conducao` (
  `id_forma_conducao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `localizacao_traumas_maior`
--

CREATE TABLE `localizacao_traumas_maior` (
  `id_localizacao_traumas_maior` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `localizacao_traumas_menor`
--

CREATE TABLE `localizacao_traumas_menor` (
  `id_localizacao_traumas_menor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `materiais_utilizados`
--

CREATE TABLE `materiais_utilizados` (
  `id_materiais_utilizados` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `objetos_recolhidos`
--

CREATE TABLE `objetos_recolhidos` (
  `id_objetos_recolhidos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `paciente`
--

CREATE TABLE `paciente` (
  `cpf_paciente` int(11) NOT NULL,
  `nome_paciente` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `paciente`
--

INSERT INTO `paciente` (`cpf_paciente`, `nome_paciente`) VALUES
(1, 'Wesley'),
(4, ''),
(123, ''),
(2222222, '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `problemas_suspeitos`
--

CREATE TABLE `problemas_suspeitos` (
  `id_problemas_suspeitos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `procedimentos_efetuados`
--

CREATE TABLE `procedimentos_efetuados` (
  `id_procedimentos_efetuados` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `sinais_e_sintomas`
--

CREATE TABLE `sinais_e_sintomas` (
  `id_sinais_e_sintomas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `sinais_vitais`
--

CREATE TABLE `sinais_vitais` (
  `id_sinais_vitais` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tabela_paciente`
--

CREATE TABLE `tabela_paciente` (
  `id_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `nome_hospital_paciente` varchar(45) NOT NULL,
  `data_paciente` date NOT NULL,
  `sexo_paciente` varchar(1) NOT NULL,
  `nome_paciente` varchar(45) NOT NULL,
  `idade_paciente` int(11) NOT NULL,
  `rg_cpf_paciente` varchar(45) NOT NULL,
  `fone_paciente` varchar(45) NOT NULL,
  `acompanhante_paciente` varchar(45) NOT NULL,
  `idade_acompanhante_paciente` int(11) NOT NULL,
  `local_ocorrencia_paciente` varchar(45) NOT NULL,
  `n_usb_paciente` varchar(45) NOT NULL,
  `cod_ur_paciente` varchar(45) NOT NULL,
  `n_ocorr_paciente` varchar(45) NOT NULL,
  `cod_ps_paciente` varchar(1) NOT NULL,
  `desp_paciente` varchar(45) NOT NULL,
  `h_ch_paciente` varchar(45) NOT NULL,
  `km_final_paciente` varchar(45) NOT NULL,
  `cod_sia_sus_paciente` int(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `termo_recusa`
--

CREATE TABLE `termo_recusa` (
  `id_termo_recusa` int(11) NOT NULL,
  `nome_recusa` varchar(120) NOT NULL,
  `identidade_recusa` int(20) NOT NULL,
  `cpf_recusa` int(20) NOT NULL,
  `assinatura_recusa` int(120) NOT NULL,
  `testemunha_recusa` int(120) NOT NULL,
  `doc_recusa` int(120) NOT NULL,
  `testemunha_recusa2` int(120) NOT NULL,
  `doc_recusa2` int(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `termo_recusa`
--

INSERT INTO `termo_recusa` (`id_termo_recusa`, `nome_recusa`, `identidade_recusa`, `cpf_recusa`, `assinatura_recusa`, `testemunha_recusa`, `doc_recusa`, `testemunha_recusa2`, `doc_recusa2`) VALUES
(1, '12321', 323214, 2147483647, 1231231241, 4343, 2234, 54353, 24234);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`cod_cadastro`);

--
-- Índices de tabela `emergencias`
--
ALTER TABLE `emergencias`
  ADD PRIMARY KEY (`id_emergencias`);

--
-- Índices de tabela `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`cpf_paciente`);

--
-- Índices de tabela `tabela_paciente`
--
ALTER TABLE `tabela_paciente`
  ADD PRIMARY KEY (`id_paciente`),
  ADD KEY `fk_bombeiro` (`bombeiro`),
  ADD KEY `fk_cpf_paciente` (`cpf_paciente`);

--
-- Índices de tabela `termo_recusa`
--
ALTER TABLE `termo_recusa`
  ADD PRIMARY KEY (`id_termo_recusa`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `emergencias`
--
ALTER TABLE `emergencias`
  MODIFY `id_emergencias` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tabela_paciente`
--
ALTER TABLE `tabela_paciente`
  MODIFY `id_paciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de tabela `termo_recusa`
--
ALTER TABLE `termo_recusa`
  MODIFY `id_termo_recusa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `tabela_paciente`
--
ALTER TABLE `tabela_paciente`
  ADD CONSTRAINT `fk_bombeiro` FOREIGN KEY (`bombeiro`) REFERENCES `cadastro` (`cod_cadastro`),
  ADD CONSTRAINT `fk_cpf_paciente` FOREIGN KEY (`cpf_paciente`) REFERENCES `paciente` (`cpf_paciente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
