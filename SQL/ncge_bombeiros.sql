-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27-Out-2023 às 14:39
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
  `id_anamnese` int(11) NOT NULL,
  `AcAnamnese` varchar(45) NOT NULL,
  `QsAnamnese` varchar(45) NOT NULL,
  `HuAnamnese` varchar(45) NOT NULL,
  `QisAnamnese` varchar(45) NOT NULL,
  `EqAnamnese` varchar(45) NOT NULL,
  `QrAnamnese` varchar(45) NOT NULL,
  `OaAnamnese` varchar(1) NOT NULL,
  `PsAnamnese` varchar(1) NOT NULL,
  `FmAnamnese` varchar(1) NOT NULL,
  `AlAnamnese` varchar(1) NOT NULL,
  `IlAnamnese` varchar(1) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `anamnese_gestacional`
--

CREATE TABLE `anamnese_gestacional` (
  `id_anamnese_gestacional` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `PeriodoDeGestacao` varchar(45) NOT NULL,
  `NomeDoMedico` varchar(45) NOT NULL,
  `Quantos` varchar(45) NOT NULL,
  `Duracao` varchar(45) NOT NULL,
  `Intervalo` varchar(45) NOT NULL,
  `HoraDoNascimento` varchar(45) NOT NULL,
  `NomeDoBebe` varchar(45) NOT NULL,
  `FpAnamneseGestacional` varchar(1) NOT NULL,
  `EfAnamneseGestacional` varchar(1) NOT NULL,
  `SqAnamneseGestacional` varchar(1) NOT NULL,
  `JbAnamneseGestacional` varchar(1) NOT NULL,
  `FvAnamneseGestacional` varchar(1) NOT NULL,
  `PrAnamneseGestacional` varchar(1) NOT NULL,
  `SexoAnamneseGestacional` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_cinematica`
--

CREATE TABLE `avaliacao_cinematica` (
  `avaliacao_cinematica` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `DisturbioDeComportamento` varchar(45) NOT NULL,
  `EncontradoDeCapacete` varchar(45) NOT NULL,
  `EncontradoDeCinto` varchar(45) NOT NULL,
  `ParaBrisasAvariado` varchar(45) NOT NULL,
  `VolanteTorcido` varchar(45) NOT NULL,
  `CaminhandoNaCena` varchar(45) NOT NULL,
  `PainelAvariado` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_paciente_maior`
--

CREATE TABLE `avaliacao_paciente_maior` (
  `id_avaliacao_paciente_maior` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `AberturaOcular` varchar(45) NOT NULL,
  `RespostaVerbal` varchar(45) NOT NULL,
  `RespostaMotora` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_paciente_menor`
--

CREATE TABLE `avaliacao_paciente_menor` (
  `id_avaliacao_paciente_menor` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `AberturaOcularMe` int(45) NOT NULL,
  `RespostaVerbalMe` int(45) NOT NULL,
  `RespostaMotoraMe` int(45) NOT NULL
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
(123456, 'batata', 'Nylton', 's'),
(234567, '123', 'Gabriel', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `decisao_transporte`
--

CREATE TABLE `decisao_transporte` (
  `id_decisao_transporte` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `MDT` varchar(45) NOT NULL,
  `S1DT` varchar(45) NOT NULL,
  `S2DT` varchar(45) NOT NULL,
  `S3DT` varchar(45) NOT NULL,
  `DemanteDT` varchar(45) NOT NULL,
  `DecisaoDeTransporteDt` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `decisao_transporte`
--

INSERT INTO `decisao_transporte` (`id_decisao_transporte`, `cpf_paciente`, `bombeiro`, `MDT`, `S1DT`, `S2DT`, `S3DT`, `DemanteDT`, `DecisaoDeTransporteDt`) VALUES
(7, 0, 123456, 'nda', 'nda', 'nda', 'nda', 'nda', 'nda');

-- --------------------------------------------------------

--
-- Estrutura da tabela `emergencias`
--

CREATE TABLE `emergencias` (
  `id_emergencias` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `tipo_emergencia` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `emergencias`
--

INSERT INTO `emergencias` (`id_emergencias`, `bombeiro`, `cpf_paciente`, `tipo_emergencia`) VALUES
(30, 123456, 1, 'Queda de bicicleta, '),
(36, 123456, 0, 'nda');

-- --------------------------------------------------------

--
-- Estrutura da tabela `forma_conducao`
--

CREATE TABLE `forma_conducao` (
  `id_forma_conducao` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `conducao` varchar(45) NOT NULL,
  `forma_conducao` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `forma_conducao`
--

INSERT INTO `forma_conducao` (`id_forma_conducao`, `bombeiro`, `cpf_paciente`, `conducao`, `forma_conducao`) VALUES
(3, 123456, 1, 'deitada', 'ciclista, '),
(9, 123456, 0, 'nda', 'nda');

-- --------------------------------------------------------

--
-- Estrutura da tabela `localizacao_traumas`
--

CREATE TABLE `localizacao_traumas` (
  `id_localizacao_traumas` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `texto_trauma` varchar(45) NOT NULL,
  `queimadura` varchar(45) NOT NULL,
  `trauma_img` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `material_utilizados_a`
--

CREATE TABLE `material_utilizados_a` (
  `material_utilizados_a` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `OutroText` varchar(45) NOT NULL,
  `CateterTpOculos` varchar(45) NOT NULL,
  `CompressaComum` varchar(45) NOT NULL,
  `LuvasDescartaveis` varchar(45) NOT NULL,
  `MascarasDesc` varchar(45) NOT NULL,
  `MantaAlumiada` varchar(45) NOT NULL,
  `PasDoDea` varchar(45) NOT NULL,
  `SondaDeAspiracao` varchar(45) NOT NULL,
  `SoroFisiologico` varchar(45) NOT NULL,
  `Atadura1` varchar(45) NOT NULL,
  `Kit1` varchar(45) NOT NULL,
  `Tala1` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `material_utilizados_b`
--

CREATE TABLE `material_utilizados_b` (
  `material_utilizados_b` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `BaseEstabilizador` varchar(45) NOT NULL,
  `Colar1` varchar(45) NOT NULL,
  `Colar2` varchar(45) NOT NULL,
  `CoxinsStab` varchar(45) NOT NULL,
  `KED` varchar(45) NOT NULL,
  `MacaRigida` varchar(45) NOT NULL,
  `TiranteAranha` varchar(45) NOT NULL,
  `TiranteCabeca` varchar(45) NOT NULL,
  `SondaAspiracao` varchar(45) NOT NULL,
  `Canula` varchar(45) NOT NULL,
  `OutroMUB` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `objetos_recolhidos`
--

CREATE TABLE `objetos_recolhidos` (
  `id_objetos_recolhidos` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `TextoDentroObj` varchar(45) NOT NULL,
  `Foto_ocorrido` mediumblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `paciente`
--

CREATE TABLE `paciente` (
  `cpf_paciente` int(11) NOT NULL,
  `nome_paciente` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `paciente`
--

INSERT INTO `paciente` (`cpf_paciente`, `nome_paciente`) VALUES
(0, ''),
(1, ''),
(20, '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `problemas_suspeitos`
--

CREATE TABLE `problemas_suspeitos` (
  `id_problemas_suspeitos` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `Psiquiatrico` varchar(45) NOT NULL,
  `Respiratorio` varchar(45) NOT NULL,
  `Diabete` varchar(45) NOT NULL,
  `Obsterico` varchar(45) NOT NULL,
  `Transporte` varchar(45) NOT NULL,
  `Outro` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `problemas_suspeitos`
--

INSERT INTO `problemas_suspeitos` (`id_problemas_suspeitos`, `cpf_paciente`, `bombeiro`, `Psiquiatrico`, `Respiratorio`, `Diabete`, `Obsterico`, `Transporte`, `Outro`) VALUES
(5, 0, 123456, 'nda', 'nda', 'nda', 'nda', 'nda', 'nda');

-- --------------------------------------------------------

--
-- Estrutura da tabela `procedimentos_efetuados`
--

CREATE TABLE `procedimentos_efetuados` (
  `id_procedimentos_efetuados` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `TodosOsValoresPef` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `sinais_e_sintomas`
--

CREATE TABLE `sinais_e_sintomas` (
  `id_sinais_e_sintomas` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `TodosOsValoresSeS` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `sinais_e_sintomas`
--

INSERT INTO `sinais_e_sintomas` (`id_sinais_e_sintomas`, `bombeiro`, `cpf_paciente`, `TodosOsValoresSeS`) VALUES
(1, 123456, 1, 'batata, ');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sinais_vitais`
--

CREATE TABLE `sinais_vitais` (
  `id_sinais_vitais` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `PressaoArterial` varchar(45) NOT NULL,
  `Pulso` varchar(45) NOT NULL,
  `SegSv` varchar(45) NOT NULL,
  `Respiracao` varchar(45) NOT NULL,
  `Temperatura` varchar(45) NOT NULL,
  `Anormal` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `sinais_vitais`
--

INSERT INTO `sinais_vitais` (`id_sinais_vitais`, `cpf_paciente`, `bombeiro`, `PressaoArterial`, `Pulso`, `SegSv`, `Respiracao`, `Temperatura`, `Anormal`) VALUES
(1, 1, 123456, '0 x 0 mmhg', '0', 'Normal', '0', '0', 'n'),
(6, 0, 123456, '0 x 0 mmhg', '0', 'Normal', '0', '0', 'n');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tabela_paciente`
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

--
-- Extraindo dados da tabela `tabela_paciente`
--

INSERT INTO `tabela_paciente` (`id_paciente`, `bombeiro`, `cpf_paciente`, `nome_hospital_paciente`, `data_paciente`, `sexo_paciente`, `nome_paciente`, `idade_paciente`, `rg_cpf_paciente`, `fone_paciente`, `acompanhante_paciente`, `idade_acompanhante_paciente`, `local_ocorrencia_paciente`, `n_usb_paciente`, `cod_ur_paciente`, `n_ocorr_paciente`, `cod_ps_paciente`, `desp_paciente`, `h_ch_paciente`, `km_final_paciente`, `cod_sia_sus_paciente`) VALUES
(38, 123456, 1, 'nda', '0000-00-00', 'n', 'Astolfo', 0, '1', 'nda', 'nda', 0, 'nda', 'nda', 'n', 'nda', 'n', 'nda', 'nda', 'nda', 0),
(40, 123456, 1, 'nda', '0000-00-00', 'n', 'nda', 10, 'nda', 'nda', 'nda', 0, 'nda', 'nda', 'n', 'nda', 'n', 'nda', 'nda', 'nda', 0),
(45, 123456, 0, 'nda', '0000-00-00', 'n', 'nda', 0, 'nda', 'nda', 'nda', 0, 'nda', 'nda', 'n', 'nda', 'n', 'nda', 'nda', 'nda', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `termo_recusa`
--

CREATE TABLE `termo_recusa` (
  `id_termo_recusa` int(11) NOT NULL,
  `bombeiro` int(11) NOT NULL,
  `cpf_paciente` int(11) NOT NULL,
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
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `anamnese`
--
ALTER TABLE `anamnese`
  ADD PRIMARY KEY (`id_anamnese`);

--
-- Índices para tabela `anamnese_gestacional`
--
ALTER TABLE `anamnese_gestacional`
  ADD PRIMARY KEY (`id_anamnese_gestacional`);

--
-- Índices para tabela `avaliacao_cinematica`
--
ALTER TABLE `avaliacao_cinematica`
  ADD PRIMARY KEY (`avaliacao_cinematica`);

--
-- Índices para tabela `avaliacao_paciente_maior`
--
ALTER TABLE `avaliacao_paciente_maior`
  ADD PRIMARY KEY (`id_avaliacao_paciente_maior`);

--
-- Índices para tabela `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`cod_cadastro`);

--
-- Índices para tabela `decisao_transporte`
--
ALTER TABLE `decisao_transporte`
  ADD PRIMARY KEY (`id_decisao_transporte`),
  ADD KEY `fk_decisao_transporte_cpf_paciente` (`cpf_paciente`),
  ADD KEY `fk_decisao_transporte_bombeiro` (`bombeiro`);

--
-- Índices para tabela `emergencias`
--
ALTER TABLE `emergencias`
  ADD PRIMARY KEY (`id_emergencias`),
  ADD KEY `fk_emergencias_cpf_paciente` (`cpf_paciente`),
  ADD KEY `fk_emergencias_bombeiro` (`bombeiro`);

--
-- Índices para tabela `forma_conducao`
--
ALTER TABLE `forma_conducao`
  ADD PRIMARY KEY (`id_forma_conducao`),
  ADD KEY `fk_conducao_cpf_paciente` (`cpf_paciente`),
  ADD KEY `fk_conducao_bombeiro` (`bombeiro`);

--
-- Índices para tabela `material_utilizados_a`
--
ALTER TABLE `material_utilizados_a`
  ADD PRIMARY KEY (`material_utilizados_a`);

--
-- Índices para tabela `material_utilizados_b`
--
ALTER TABLE `material_utilizados_b`
  ADD PRIMARY KEY (`material_utilizados_b`);

--
-- Índices para tabela `objetos_recolhidos`
--
ALTER TABLE `objetos_recolhidos`
  ADD PRIMARY KEY (`id_objetos_recolhidos`);

--
-- Índices para tabela `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`cpf_paciente`);

--
-- Índices para tabela `problemas_suspeitos`
--
ALTER TABLE `problemas_suspeitos`
  ADD PRIMARY KEY (`id_problemas_suspeitos`),
  ADD KEY `fk_problemas_suspeitos_cpf_paciente` (`cpf_paciente`),
  ADD KEY `fk_problemas_suspeitos_bombeiro` (`bombeiro`);

--
-- Índices para tabela `procedimentos_efetuados`
--
ALTER TABLE `procedimentos_efetuados`
  ADD PRIMARY KEY (`id_procedimentos_efetuados`);

--
-- Índices para tabela `sinais_e_sintomas`
--
ALTER TABLE `sinais_e_sintomas`
  ADD PRIMARY KEY (`id_sinais_e_sintomas`);

--
-- Índices para tabela `sinais_vitais`
--
ALTER TABLE `sinais_vitais`
  ADD PRIMARY KEY (`id_sinais_vitais`),
  ADD KEY `fk_sinais_e_sintomas_cpf_paciente` (`cpf_paciente`),
  ADD KEY `fk_sinais_e_sintomas_bombeiro` (`bombeiro`);

--
-- Índices para tabela `tabela_paciente`
--
ALTER TABLE `tabela_paciente`
  ADD PRIMARY KEY (`id_paciente`),
  ADD KEY `fk_bombeiro` (`bombeiro`),
  ADD KEY `fk_cpf_paciente` (`cpf_paciente`);

--
-- Índices para tabela `termo_recusa`
--
ALTER TABLE `termo_recusa`
  ADD PRIMARY KEY (`id_termo_recusa`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `decisao_transporte`
--
ALTER TABLE `decisao_transporte`
  MODIFY `id_decisao_transporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `emergencias`
--
ALTER TABLE `emergencias`
  MODIFY `id_emergencias` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de tabela `forma_conducao`
--
ALTER TABLE `forma_conducao`
  MODIFY `id_forma_conducao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `problemas_suspeitos`
--
ALTER TABLE `problemas_suspeitos`
  MODIFY `id_problemas_suspeitos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `sinais_e_sintomas`
--
ALTER TABLE `sinais_e_sintomas`
  MODIFY `id_sinais_e_sintomas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `sinais_vitais`
--
ALTER TABLE `sinais_vitais`
  MODIFY `id_sinais_vitais` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `tabela_paciente`
--
ALTER TABLE `tabela_paciente`
  MODIFY `id_paciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de tabela `termo_recusa`
--
ALTER TABLE `termo_recusa`
  MODIFY `id_termo_recusa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `decisao_transporte`
--
ALTER TABLE `decisao_transporte`
  ADD CONSTRAINT `fk_decisao_transporte_bombeiro` FOREIGN KEY (`bombeiro`) REFERENCES `cadastro` (`cod_cadastro`),
  ADD CONSTRAINT `fk_decisao_transporte_cpf_paciente` FOREIGN KEY (`cpf_paciente`) REFERENCES `paciente` (`cpf_paciente`);

--
-- Limitadores para a tabela `forma_conducao`
--
ALTER TABLE `forma_conducao`
  ADD CONSTRAINT `fk_conducao_bombeiro` FOREIGN KEY (`bombeiro`) REFERENCES `cadastro` (`cod_cadastro`),
  ADD CONSTRAINT `fk_conducao_cpf_paciente` FOREIGN KEY (`cpf_paciente`) REFERENCES `paciente` (`cpf_paciente`);

--
-- Limitadores para a tabela `problemas_suspeitos`
--
ALTER TABLE `problemas_suspeitos`
  ADD CONSTRAINT `fk_problemas_suspeitos_bombeiro` FOREIGN KEY (`bombeiro`) REFERENCES `cadastro` (`cod_cadastro`),
  ADD CONSTRAINT `fk_problemas_suspeitos_cpf_paciente` FOREIGN KEY (`cpf_paciente`) REFERENCES `paciente` (`cpf_paciente`);

--
-- Limitadores para a tabela `sinais_vitais`
--
ALTER TABLE `sinais_vitais`
  ADD CONSTRAINT `fk_sinais_e_sintomas_bombeiro` FOREIGN KEY (`bombeiro`) REFERENCES `cadastro` (`cod_cadastro`),
  ADD CONSTRAINT `fk_sinais_vitais_bombeiro` FOREIGN KEY (`bombeiro`) REFERENCES `cadastro` (`cod_cadastro`),
  ADD CONSTRAINT `fk_sinais_vitais_cpf_paciente` FOREIGN KEY (`cpf_paciente`) REFERENCES `paciente` (`cpf_paciente`);

--
-- Limitadores para a tabela `tabela_paciente`
--
ALTER TABLE `tabela_paciente`
  ADD CONSTRAINT `fk_bombeiro` FOREIGN KEY (`bombeiro`) REFERENCES `cadastro` (`cod_cadastro`),
  ADD CONSTRAINT `fk_cpf_paciente` FOREIGN KEY (`cpf_paciente`) REFERENCES `paciente` (`cpf_paciente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
