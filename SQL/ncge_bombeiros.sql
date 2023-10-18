-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Out-2023 às 17:18
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
-- Estrutura da tabela `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `anamnese`
--

CREATE TABLE `anamnese` (
  `id_anamnese` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `anamnese_gestacional`
--

CREATE TABLE `anamnese_gestacional` (
  `id_anamnese_gestacional` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_paciente_maior`
--

CREATE TABLE `avaliacao_paciente_maior` (
  `id_avaliacao_paciente_maior` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_paciente_menor`
--

CREATE TABLE `avaliacao_paciente_menor` (
  `id_avaliacao_paciente_menor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastro`
--

CREATE TABLE `cadastro` (
  `cod_cadastro` int(11) NOT NULL,
  `senha_cadastro` varchar(45) NOT NULL,
  `nome_cadastro` varchar(45) NOT NULL,
  `Acesso_cadastro` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `cadastro`
--

INSERT INTO `cadastro` (`cod_cadastro`, `senha_cadastro`, `nome_cadastro`, `Acesso_cadastro`) VALUES
(1, '123', '', ' '),
(2, '123', '', 's');

-- --------------------------------------------------------

--
-- Estrutura da tabela `decisao_transporte`
--

CREATE TABLE `decisao_transporte` (
  `id_decisao_transporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `emergencias`
--

CREATE TABLE `emergencias` (
  `id_emergencias` int(11) NOT NULL,
  `tipo_emergencia` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `emergencias`
--

INSERT INTO `emergencias` (`id_emergencias`, `tipo_emergencia`) VALUES
(1, 'Emergencia medica,,,,,,,,,,,,,,,,,,,,,'),
(2, ',,,,,,,,,,,,,,,,,,,,Transferencia,'),
(3, ',,,,,,,,,,,,,,,,,,,,Transferencia,'),
(4, ',,,,,,,,,,,,,,,,,,Queda,Trabalho,Transferencia,Outro'),
(5, ',,,,,,,,,,,,,,,,,,Queda,Trabalho,Transferencia,Outro'),
(6, ',,,,,,,,,,,,,,,,,,Queda,Trabalho,Transferencia,Outro'),
(7, ',,,,,,,,,,,,,,,,,,Queda,Trabalho,Transferencia,Outro'),
(8, ',,,,,,,,,,,,,,,,Queda de bicicleta,Queda de Moto,Queda,Trabalho,Transferencia,Outro'),
(9, ',,,,,,,,,,,,,,,,Queda de bicicleta,Queda de Moto,Queda,Trabalho,Transferencia,Outro'),
(10, ',,,,,,,,,,,,,,,,Queda de bicicleta,Queda de Moto,Queda,Trabalho,Transferencia,Outro'),
(11, ',,,,,,,,,,,,,,,,Queda de bicicleta,Queda de Moto,Queda,Trabalho,Transferencia,Outro'),
(12, ',,,,,,,,,,,,,,,,Queda de bicicleta,Queda de Moto,Queda,Trabalho,Transferencia,Outro'),
(13, ',,,,,,,,,,,,,,,,Queda de bicicleta,Queda de Moto,Queda,Trabalho,Transferencia,Outro'),
(14, ',,,,,,,,,,,,,,,,Queda de bicicleta,Queda de Moto,Queda,Trabalho,Transferencia,Outro'),
(15, ',,,,,,,,,,,,,,,,Queda de bicicleta,Queda de Moto,Queda,Trabalho,Transferencia,Outro');

-- --------------------------------------------------------

--
-- Estrutura da tabela `forma_conducao`
--

CREATE TABLE `forma_conducao` (
  `id_forma_conducao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `localizacao_traumas_maior`
--

CREATE TABLE `localizacao_traumas_maior` (
  `id_localizacao_traumas_maior` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `localizacao_traumas_menor`
--

CREATE TABLE `localizacao_traumas_menor` (
  `id_localizacao_traumas_menor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `materiais_utilizados`
--

CREATE TABLE `materiais_utilizados` (
  `id_materiais_utilizados` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `objetos_recolhidos`
--

CREATE TABLE `objetos_recolhidos` (
  `id_objetos_recolhidos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `paciente`
--

CREATE TABLE `paciente` (
  `id_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
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

--
-- Extraindo dados da tabela `paciente`
--

INSERT INTO `paciente` (`id_paciente`, `bombeiro`, `nome_hospital_paciente`, `data_paciente`, `sexo_paciente`, `nome_paciente`, `idade_paciente`, `rg_cpf_paciente`, `fone_paciente`, `acompanhante_paciente`, `idade_acompanhante_paciente`, `local_ocorrencia_paciente`, `n_usb_paciente`, `cod_ur_paciente`, `n_ocorr_paciente`, `cod_ps_paciente`, `desp_paciente`, `h_ch_paciente`, `km_final_paciente`, `cod_sia_sus_paciente`) VALUES
(43, 0, 'nda', '0000-00-00', 'n', 'nda', 0, 'nda', 'nda', 'nda', 0, 'nda', 'nda', 'n', 'nda', 'n', 'nda', 'nda', 'nda', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `problemas_suspeitos`
--

CREATE TABLE `problemas_suspeitos` (
  `id_problemas_suspeitos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `procedimentos_efetuados`
--

CREATE TABLE `procedimentos_efetuados` (
  `id_procedimentos_efetuados` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `sinais_e_sintomas`
--

CREATE TABLE `sinais_e_sintomas` (
  `id_sinais_e_sintomas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `sinais_vitais`
--

CREATE TABLE `sinais_vitais` (
  `id_sinais_vitais` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `termo_recusa`
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
-- Extraindo dados da tabela `termo_recusa`
--

INSERT INTO `termo_recusa` (`id_termo_recusa`, `nome_recusa`, `identidade_recusa`, `cpf_recusa`, `assinatura_recusa`, `testemunha_recusa`, `doc_recusa`, `testemunha_recusa2`, `doc_recusa2`) VALUES
(1, '12321', 323214, 2147483647, 1231231241, 4343, 2234, 54353, 24234);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`cod_cadastro`);

--
-- Índices para tabela `emergencias`
--
ALTER TABLE `emergencias`
  ADD PRIMARY KEY (`id_emergencias`);

--
-- Índices para tabela `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id_paciente`);

--
-- Índices para tabela `termo_recusa`
--
ALTER TABLE `termo_recusa`
  ADD PRIMARY KEY (`id_termo_recusa`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `emergencias`
--
ALTER TABLE `emergencias`
  MODIFY `id_emergencias` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id_paciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de tabela `termo_recusa`
--
ALTER TABLE `termo_recusa`
  MODIFY `id_termo_recusa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
