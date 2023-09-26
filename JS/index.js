/*
    Paginas:
    PacienteRegistro()
    EmergenciaRegistro()
    AvaliacaoPacienteMa()
    AvaliacaoPacienteMe()
    TermoDeRecusa()
    FormaDeConducao()
    DecisaoDeTransporte()
    SinaisVitai()
    Anamnese()
    AnamneseGestacional()
*/

function PacienteRegistro(){    

    var Data = $('#data_paciente').val();/*Input type text*/
    var NomeHospitalPaciente = $('#nome_hospital_paciente').val();
    var NomePaciente = $('#nome_paciente').val();
    var IdadePaciente = $('#idade_paciente').val();
    var RgCpfPaciente = $('#rg_cpf_paciente').val();
    var FonePaciente = $('#fone_paciente').val();
    var AcompanhantePaciente = $('#acompanhante_paciente').val();
    var IdadeAcompanhantePaciente = $('#idade_acompanhante_paciente').val();
    var LocalOcorrenciaPaciente = $('#local_ocorrencia_paciente').val();
    var NUsbPaciente = $('#n_usab_paciente').val();
    var NOcorrPaciente = $('#n_ocorr_paciente').val();
    var DespPaciente = $('#desp_paciente').val();
    var HChPaciente = $('#h_ch_paciente').val();
    var KmFinalPaciente = $('#km_final_paciente').val();
    var CodSiaSusPaciente = $('#cod_sia_sus_paciente').val();

    var SexoPaciente = "";/*Input type radio*/
    if (document.getElementById("sexo_paciente_m").checked) {
        SexoPaciente = document.getElementById("sexo_paciente_m").value;
    } else if (document.getElementById("sexo_paciente_f").checked) {
        SexoPaciente = document.getElementById("sexo_paciente_f").value;
    }

    var CodUrCheckbox = document.getElementById("cod_ur");/*Input type Checkbox*/
    var CodUrChecked = CodUrCheckbox.checked;
    if (CodUrChecked) {
        var CodUr = 's';
    } else {
        var CodUr = 'n';
    }

    var CodPsCheckbox = document.getElementById("cod_ps");/*Input type Checkbox*/
    var CodPsChecked = CodPsCheckbox.checked;
    if (CodPsChecked) {
        var CodPs = 's';
    } else {
        var CodPs = 'n';
    }
    
     $.ajax({
        url: 'PHP/tabela-paciente.php',
        method: 'POST',
        data: {
            Data: Data,
            SexoPaciente: SexoPaciente,
            NomeHospitalPaciente: NomeHospitalPaciente,
            NomePaciente: NomePaciente,
            IdadePaciente: IdadePaciente,
            RgCpfPaciente: RgCpfPaciente,
            FonePaciente: FonePaciente,
            AcompanhantePaciente: AcompanhantePaciente,
            IdadeAcompanhantePaciente: IdadeAcompanhantePaciente,
            LocalOcorrenciaPaciente: LocalOcorrenciaPaciente,
            NUsbPaciente: NUsbPaciente,
            CodUr: CodUr,
            NOcorrPaciente: NOcorrPaciente,
            CodPs: CodPs,
            DespPaciente: DespPaciente,
            HChPaciente: HChPaciente,
            KmFinalPaciente: KmFinalPaciente,
            CodSiaSusPaciente: CodSiaSusPaciente
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    
};
function SexoMasculino() {/*Input type radio*/
    var sexo_paciente_f = document.getElementById("sexo_paciente_f"); 
    sexo_paciente_f.checked = false;
} 
function SexoFeminino() {/*Input type radio*/
    var sexo_paciente_m = document.getElementById("sexo_paciente_m"); 
    sexo_paciente_m.checked = false;
}
function EmergenciaRegistro(){

    if (document.getElementById("emergencia_medica_er").checked) {
        EmergenciaMedicaEr = document.getElementById("emergencia_medica_er").value;
    }else(EmergenciaMedicaEr = "")

    if (document.getElementById("com_meio_de_transporte_er").checked) {
        ComMeioTransporteEr = document.getElementById("com_meio_de_transporte_er").value;
    }else(ComMeioTransporteEr = "")

    if (document.getElementById("causado_por_animais_er").checked) {
        CausadoPorAnimaisEr = document.getElementById("causado_por_animais_er").value;
    }else(CausadoPorAnimaisEr = "")
    
    if (document.getElementById("incendio_er").checked) {
        IncendioEr = document.getElementById("incendio_er").value;
    }else(IncendioEr = "")

    if (document.getElementById("afogamento_er").checked) {
        AfogamentoEr = document.getElementById("afogamento_er").value;
    }else(AfogamentoEr = "")

    if (document.getElementById("deslizamento_desmoronamento_er").checked) {
        DeslizamentoDesmoronamentoEr = document.getElementById("deslizamento_desmoronamento_er").value;
    }else(DeslizamentoDesmoronamentoEr = "")

    if (document.getElementById("agressao_er").checked) {
        AgressaoEr = document.getElementById("agressao_er").value;
    }else(AgressaoEr = "")

    if (document.getElementById("queda_aluta_2m_er").checked) {
        QuedaAltura2mEr = document.getElementById("queda_aluta_2m_er").value;
    }else(QuedaAltura2mEr = "")

    if (document.getElementById("tentativa_suicidio_er").checked) {
        SuicidioEr = document.getElementById("tentativa_suicidio_er").value;
    }else(SuicidioEr = "")

    if (document.getElementById("queda_propria_altura_er").checked) {
        QuedaPropriaAlturaEr = document.getElementById("queda_propria_altura_er").value;
    }else(QuedaPropriaAlturaEr = "")

    if (document.getElementById("Atropelamento_er").checked) {
        AtropelamentoEr = document.getElementById("Atropelamento_er").value;
    }else(AtropelamentoEr = "")

    if (document.getElementById("choque_eletrico_er").checked) {
        ChoqueEletricoEr = document.getElementById("choque_eletrico_er").value;
    }else(ChoqueEletricoEr = "")

    if (document.getElementById("desabamento_er").checked) {
        DesabamentoEr = document.getElementById("desabamento_er").value;
    }else(DesabamentoEr = "")

    if (document.getElementById("domestico_er").checked) {
        DomesticoEr = document.getElementById("domestico_er").value;
    }else(DomesticoEr = "")

    if (document.getElementById("esportivo_er").checked) {
        EsportivoEr = document.getElementById("esportivo_er").value;
    }else(EsportivoEr = "")

    if (document.getElementById("intoxicacao_er").checked) {
        IntoxicacaoEr = document.getElementById("intoxicacao_er").value;
    }else(IntoxicacaoEr = "")

    if (document.getElementById("queda_bicicleta_er").checked) {
        QuedaBicicletaEr = document.getElementById("queda_bicicleta_er").value;
    }else(QuedaBicicletaEr = "")

    if (document.getElementById("queda_moto_er").checked) {
        QuedaMotoEr = document.getElementById("queda_moto_er").value;
    }else(QuedaMotoEr = "")

    if (document.getElementById("queda_er").checked) {
        QuedaEr = document.getElementById("queda_er").value;
    }else(QuedaEr = "")

    if (document.getElementById("trabalho_er").checked) {
        TrabalhoEr = document.getElementById("trabalho_er").value;
    }else(TrabalhoEr = "")

    if (document.getElementById("transferencia_er").checked) {
        TransferenciaEr = document.getElementById("transferencia_er").value;
    }else(TransferenciaEr = "")

    if (document.getElementById("outro_er").checked) {
        OutroEr = document.getElementById("outro_er").value;
    }else(OutroEr = "")

    var EmergenciaRegistro = EmergenciaMedicaEr + "," + ComMeioTransporteEr + "," + CausadoPorAnimaisEr + "," + IncendioEr + "," + AfogamentoEr
     + "," + DeslizamentoDesmoronamentoEr + "," + AgressaoEr + "," + QuedaAltura2mEr + "," + SuicidioEr + "," + QuedaPropriaAlturaEr 
     + "," + AtropelamentoEr + "," + ChoqueEletricoEr + "," + DesabamentoEr + "," + DomesticoEr + "," + EsportivoEr + "," + IntoxicacaoEr 
     + "," + QuedaBicicletaEr + "," + QuedaMotoEr + "," + QuedaEr + "," + TrabalhoEr + "," + TransferenciaEr + "," + OutroEr;


    $.ajax({
        url: 'PHP/tabela-emergencia.php',
        method: 'POST',
        data: {
            EmergenciaRegistro:EmergenciaRegistro
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
};
function TermoDeRecusa(){

    var NomeTermoRecusa = $('#nome_Recusa').val();
    var IdentidadeRecusa = $('#identidade_Recusa').val();
    var CpfRescusa = $('#cpf_Recusa').val();
    var AssinaturaRecusa = $('#assinatura_Recusa').val();
    var TestemunhaRecusa = $('#testemunha_Recusa').val();
    var DocRecusa = $('#doc_Recusa').val();
    var TestemunhaRecusa2 = $('#testemunha_Recusa_2').val();
    var DocRecusa2 = $('#doc_Recusa_2').val();

     $.ajax({
        url: 'PHP/Termo_de_recusa.php',
        method: 'POST',
        data: {
            NomeTermoRecusa: NomeTermoRecusa,
            IdentidadeRecusa: IdentidadeRecusa,
            CpfRescusa: CpfRescusa,
            AssinaturaRecusa: AssinaturaRecusa,
            TestemunhaRecusa: TestemunhaRecusa,
            DocRecusa: DocRecusa,
            TestemunhaRecusa2: TestemunhaRecusa2,
            DocRecusa2: DocRecusa2,
            
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    
};
function FormaDeConducao(){

    var Conducao = "";/*Input type radio*/
    if (document.getElementById("deitada_conducao").checked) {
        Conducao = document.getElementById("deitada_conducao").value;
    } else if (document.getElementById("semi_deitada_conducao").checked) {
        Conducao = document.getElementById("semi_deitada_conducao").value;
    }
    else if (document.getElementById("sentada_conducao").checked) {
        Conducao = document.getElementById("sentada_conducao").value;/*Input type radio*/
    }

    if (document.getElementById("fc_ciclista").checked) {
        FcCiclista = document.getElementById("fc_ciclista").value;
    }else(FcCiclista = "")

    if (document.getElementById("fc_condutor_moto").checked) {
        FcCondutor = document.getElementById("fc_condutor_moto").value;
    }else(FcCondutor = "")

    if (document.getElementById("fc_gestante").checked) {
        FcGestante = document.getElementById("fc_gestante").value;
    }else(FcGestante = "")

    if (document.getElementById("fc_pass_ban_frente").checked) {
        FcPassBanFrente = document.getElementById("fc_pass_ban_frente").value;
    }else(FcPassBanFrente = "")

    if (document.getElementById("fc_pass_moto").checked) {
        FcPassMoto = document.getElementById("fc_pass_moto").value;
    }else(FcPassMoto = "")

    if (document.getElementById("fc_condutor_carro").checked) {
        FcCondutorCarro = document.getElementById("fc_condutor_carro").value;
    }else(FcCondutorCarro = "")

    if (document.getElementById("fc_clinico").checked) {
        FcClinico = document.getElementById("fc_clinico").value;
    }else(FcClinico = "")

    if (document.getElementById("fc_trauma").checked) {
        FcTrauma = document.getElementById("fc_trauma").value;
    }else( FcTrauma = "")

    if (document.getElementById("fc_pass_ban_tras").checked) {
        FcPassBanTras = document.getElementById("fc_pass_ban_tras").value;
    }else(FcPassBanTras = "")

    if (document.getElementById("fc_pedestre").checked) {
        FcPedestre = document.getElementById("fc_pedestre").value;
    }else(FcPedestre = "")

    var FormaConducao = FcCiclista + " " + FcCondutor + " " + FcGestante + " " + FcPassBanFrente + " " + FcPassMoto + " " + FcCondutorCarro + " " + FcClinico + " " + FcTrauma + " " + FcPassBanTras + " " + FcPedestre;

    $.ajax({
        url: 'PHP/forma_de_conducao.php',
        method: 'POST',
        data: {
           Conducao: Conducao,
           FormaConducao: FormaConducao
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
}

function Deitada() {/*Input type radio*/
    var semi_deitada_conducao = document.getElementById("semi_deitada_conducao"); 
    semi_deitada_conducao.checked = false;

    var sentada_conducao = document.getElementById("sentada_conducao"); 
    sentada_conducao.checked = false;
} 
function Semi_Deitada() {/*Input type radio*/
    var deitada_conducao = document.getElementById("deitada_conducao"); 
    deitada_conducao.checked = false;

    var sentada_conduo = document.getElementById("sentada_conducao"); 
    sentada_conduo.checked = false;
} 
function Sentada() {/*Input type radio*/
    var deitada_conducao = document.getElementById("deitada_conducao"); 
    deitada_conducao.checked = false;

    var semi_deitada_conducao = document.getElementById("semi_deitada_conducao"); 
    semi_deitada_conducao.checked = false;
}
function AvaliacaoPacienteMa(){
    var AberturaOcular = "";/*Input type radio*/
    var ValorAberturaOcularMa = ""
    if (document.getElementById("espontanea_paciente_ma").checked) {
        AberturaOcular = document.getElementById("espontanea_paciente_ma").value;
        ValorAberturaOcularMa = 1
    }  else if (document.getElementById("comando_verbal_paciente_ma").checked) {
        AberturaOcular = document.getElementById("comando_verbal_paciente_ma").value;
        ValorAberturaOcularMa = 2
    } else if (document.getElementById("estimulo_doloroso_paciente_ma").checked) {
        AberturaOcular = document.getElementById("estimulo_doloroso_paciente_ma").value;
        ValorAberturaOcularMa = 3
    } else if (document.getElementById("nenhuma_paciente_ma_ao").checked) {
        AberturaOcular = document.getElementById("nenhuma_paciente_ma_ao").value;
        ValorAberturaOcularMa = 4
    }
    console.log(AberturaOcular)
    console.log(ValorAberturaOcularMa)
    
    /*RespostaVerbal*/
    var RespostaVerbal = "";/*Input type radio*/
    var ValorRespostaVerbalMa = "";
    if (document.getElementById("orientado_paciente_ma").checked) {
        RespostaVerbal = document.getElementById("orientado_paciente_ma").value;
        ValorRespostaVerbalMa = 1
    }  else if (document.getElementById("confuso_paciente_ma").checked) {
        RespostaVerbal = document.getElementById("confuso_paciente_ma").value;
        ValorRespostaVerbalMa = 2
    } else if (document.getElementById("palavras_inapropriadas_paciente_ma").checked) {
        RespostaVerbal = document.getElementById("palavras_inapropriadas_paciente_ma").value;
        ValorRespostaVerbalMa = 3
    } else if (document.getElementById("palavras_incompreensiveis_paciente_ma").checked) {
        RespostaVerbal = document.getElementById("palavras_incompreensiveis_paciente_ma").value;
        ValorRespostaVerbalMa = 4
    }else if (document.getElementById("nenhuma_paciente_ma_rv").checked) {
        RespostaVerbal = document.getElementById("nenhuma_paciente_ma_rv").value;
        ValorRespostaVerbalMa = 5
    }

    console.log(RespostaVerbal)
    console.log(ValorRespostaVerbalMa)

    var RespostaMotora = "";/*Input type radio*/
    var ValorRespostaMotoraMa = "";
    if (document.getElementById("obedece_comandos_paciente_ma").checked) {
        RespostaMotora = document.getElementById("obedece_comandos_paciente_ma").value;
        ValorRespostaMotoraMa = 1
    } else if (document.getElementById("localiza_dor_paciente_ma").checked) {
        RespostaMotora = document.getElementById("localiza_dor_paciente_ma").value;
        ValorRespostaMotoraMa = 2
    }  else if (document.getElementById("movimento_retirada_paciente_ma").checked) {
        RespostaMotora = document.getElementById("movimento_retirada_paciente_ma").value;
        ValorRespostaMotoraMa = 3
    } else if (document.getElementById("flexao_anormal_paciente_ma").checked) {
        RespostaMotora = document.getElementById("flexao_anormal_paciente_ma").value;
        ValorRespostaMotoraMa = 4
    } else if (document.getElementById("extensao_anormal_paciente_ma").checked) {
        RespostaMotora = document.getElementById("extensao_anormal_paciente_ma").value;
        ValorRespostaMotoraMa = 5
    }else if (document.getElementById("nenhuma_paciente_ma_rm").checked) {
        RespostaMotora = document.getElementById("nenhuma_paciente_ma_rm").value;
        ValorRespostaMotoraMa = 6
    } 
   
    console.log(RespostaMotora)
    console.log(ValorRespostaMotoraMa)

    //var SpanGCS = document.getElementById("total_gcs_paciente");
    var ValorGCS = ValorRespostaMotoraMa + ValorAberturaOcularMa + ValorRespostaVerbalMa;
    var SpanGCS = document.getElementById("total_gcs_paciente")
    SpanGCS.textContent = " " + ValorGCS;

console.log(ValorGCS);

    $.ajax({
        url: 'PHP/Avaliacao_paciente.php',
        method: 'POST',
        data: {
            AberturaOcular: AberturaOcular,
            RespostaVerbal: RespostaVerbal,
            RespostaMotora: RespostaMotora,
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
}

function Espontanea(){/*Input type radio*/
    var ComandoVerbalPacienteMa = document.getElementById("comando_verbal_paciente_ma"); 
    ComandoVerbalPacienteMa.checked = false;

    var EstimuloDolorosoPacienteMa = document.getElementById("estimulo_doloroso_paciente_ma"); 
    EstimuloDolorosoPacienteMa.checked = false;

    var NenhumaAoPacienteMa = document.getElementById("nenhuma_paciente_ma_ao"); 
    NenhumaAoPacienteMa.checked = false;
}
function  ComandoVerbal(){
    var EspontaneaPacienteMa = document.getElementById("espontanea_paciente_ma"); 
    EspontaneaPacienteMa.checked = false;

    var EstimuloDolorosoPacienteMa = document.getElementById("estimulo_doloroso_paciente_ma"); 
    EstimuloDolorosoPacienteMa.checked = false;

    var NenhumaAoPacienteMa = document.getElementById("nenhuma_paciente_ma_ao"); 
    NenhumaAoPacienteMa.checked = false; 
}

function  EstimuloDoloroso(){
    var EspontaneaPacienteMa = document.getElementById("espontanea_paciente_ma"); 
    EspontaneaPacienteMa.checked = false;

    var ComandoVerbalPacienteMa = document.getElementById("comando_verbal_paciente_ma"); 
    ComandoVerbalPacienteMa.checked = false;

    var NenhumaAoPacienteMa = document.getElementById("nenhuma_paciente_ma_ao"); 
    NenhumaAoPacienteMa.checked = false; 
}
function  NenhumaAo(){
    var EspontaneaPacienteMa = document.getElementById("espontanea_paciente_ma"); 
    EspontaneaPacienteMa.checked = false;

    var ComandoVerbalPacienteMa = document.getElementById("comando_verbal_paciente_ma"); 
    ComandoVerbalPacienteMa.checked = false;

    var EstimuloDolorosoPacienteMa = document.getElementById("estimulo_doloroso_paciente_ma"); 
    EstimuloDolorosoPacienteMa.checked = false;

}
function Orientado() {/*Input type radio*/
   
        var ConfusoPacienteMa = document.getElementById("confuso_paciente_ma"); 
        ConfusoPacienteMa.checked = false;

        var PalavrasInapropriadasPacienteMa = document.getElementById("palavras_inapropriadas_paciente_ma"); 
        PalavrasInapropriadasPacienteMa.checked = false;

        var PalavrasIncompreensiveisPacienteMa = document.getElementById("palavras_incompreensiveis_paciente_ma"); 
        PalavrasIncompreensiveisPacienteMa.checked = false;

        var NenhumaRvPacienteMa = document.getElementById("nenhuma_paciente_ma_rv"); 
        NenhumaRvPacienteMa.checked = false;
    
}
function Confuso() {/*Input type radio*/
   
        var PalavrasInapropriadasPacienteMa = document.getElementById("palavras_inapropriadas_paciente_ma"); 
        PalavrasInapropriadasPacienteMa.checked = false;

        var PalavrasIncompreensiveisPacienteMa = document.getElementById("palavras_incompreensiveis_paciente_ma"); 
        PalavrasIncompreensiveisPacienteMa.checked = false;

        var OrientadoPacienteMa = document.getElementById("orientado_paciente_ma"); 
        OrientadoPacienteMa.checked = false;  

        var NenhumaRvPacienteMa = document.getElementById("nenhuma_paciente_ma_rv"); 
        NenhumaRvPacienteMa.checked = false;
}

function PalavrasInapropriadas() {/*Input type radio*/
   
        var ConfusoPacienteMa = document.getElementById("confuso_paciente_ma"); 
        ConfusoPacienteMa.checked = false;

        var PalavrasIncompreensiveisPacienteMa = document.getElementById("palavras_incompreensiveis_paciente_ma"); 
        PalavrasIncompreensiveisPacienteMa.checked = false;

        var OrientadoPacienteMa = document.getElementById("orientado_paciente_ma"); 
        OrientadoPacienteMa.checked = false;  

        var NenhumaRvPacienteMa = document.getElementById("nenhuma_paciente_ma_rv"); 
        NenhumaRvPacienteMa.checked = false;
}

function PalavrasIncompreensiveis() {/*Input type radio*/

    var ConfusoPacienteMa = document.getElementById("confuso_paciente_ma"); 
        ConfusoPacienteMa.checked = false;
   
    var PalavrasInapropriadasPacienteMa = document.getElementById("palavras_inapropriadas_paciente_ma"); 
    PalavrasInapropriadasPacienteMa.checked = false;
    

    var OrientadoPacienteMa = document.getElementById("orientado_paciente_ma"); 
     OrientadoPacienteMa.checked = false;  

    var NenhumaRvPacienteMa = document.getElementById("nenhuma_paciente_ma_rv"); 
    NenhumaRvPacienteMa.checked = false;
}
function NenhumaRv() {/*Input type radio*/
   
        var ConfusoPacienteMa = document.getElementById("confuso_paciente_ma"); 
        ConfusoPacienteMa.checked = false;

        var PalavrasInapropriadasPacienteMa = document.getElementById("palavras_inapropriadas_paciente_ma"); 
        PalavrasInapropriadasPacienteMa.checked = false;

        var PalavrasIncompreensiveisPacienteMa = document.getElementById("palavras_incompreensiveis_paciente_ma"); 
        PalavrasIncompreensiveisPacienteMa.checked = false;

        var OrientadoPacienteMa = document.getElementById("orientado_paciente_ma"); 
        OrientadoPacienteMa.checked = false;  

}

function ObedeceComandosMa() {/*Input type radio*/
    var LocalizaDorPacienteMa = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPacienteMa.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;
}

function LocalizaDorMa() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;
    
}
function MovimentoDeRetiradaMa() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;

    var LocalizaDorPacienteMa = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPacienteMa.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;
    
}
function FlexaoAnormalMa() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;

    var LocalizaDorPacienteMa = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPacienteMa.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;
}
function ExtensaoAnormalMa() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;

    var LocalizaDorPacienteMa = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPacienteMa.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;
}
function NenhumaRmMa() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;

    var LocalizaDorPacienteMa = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPacienteMa.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;
    
}
function RespostaVerbalMe() {/*Input type radio*/
    var PalavrasEFrasesInapropriadasPacienteMe = document.getElementById("palavras_e_frases_inapropriadas_paciente_me"); 
    PalavrasEFrasesInapropriadasPacienteMe.checked = false;
    
    var PalavrasInapropriadasacienteMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
    PalavrasInapropriadasacienteMe.checked = false;

    var ChoroPersistentesOuGritosPacienteMe = document.getElementById("choro_persistentes_ou_gritos_paciente_me"); 
    ChoroPersistentesOuGritosPacienteMe.checked = false;
    
    var SonsIncompreensíveisPacienteMe = document.getElementById("palavras_incompreensiveis_paciente_ma"); 
    SonsIncompreensíveisPacienteMe.checked = false;

    var NenhumaRvPacienteMe = document.getElementById("nenhuma_paciente_me_rv"); 
    NenhumaRvPacienteMe.checked = false;
}

function RespostaMotoraMa() {/*Input type radio*/
    var ObedeceComandosPacienteMe = document.getElementById("obedece_comando_paciente_me"); 
   ObedeceComandosPacienteMe.checked = false;
    
    var LocalizaDorEstimuloTatilPaciente = document.getElementById("localiza_dor_estimulo_tatil_paciente_me"); 
    LocalizaDorEstimuloTatilPaciente.checked = false;

    var RetiradaDoSegmentoEstimuladoPaciente = document.getElementById("retirada_do_segmento_estimulado_paciente"); 
    RetiradaDoSegmentoEstimuladoPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_me"); 
    FlexaoAnormalPaciente.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_me"); 
    ExtensaoAnormalPaciente.checked = false;

    var AusenciaPacienteMa = document.getElementById("ausencia_paciente"); 
    AusenciaPacienteMa.checked = false;
}
/*Menor 5*/
function AvaliacaoPacienteMe() {/*Input type radio*/
var AberturaOcularMe = "";/*Input type radio*/
var ValorAberturaOcularMe = "";/*Valor numerico da avaliação*/
if (document.getElementById("espontanea_paciente_me").checked) {
    AberturaOcularMe = document.getElementById("espontanea_paciente_me").value;
    ValorAberturaOcularMe = 1
}  else if (document.getElementById("comando_verbal_paciente_me").checked) {
    AberturaOcularMe = document.getElementById("comando_verbal_paciente_me").value;
    ValorAberturaOcularMe = 2
} else if (document.getElementById("estimulo_doloroso_paciente_me").checked) {
    AberturaOcularMe = document.getElementById("estimulo_doloroso_paciente_me").value;
    ValorAberturaOcularMe = 3
} else if (document.getElementById("nenhuma_paciente_me_ao").checked) {
    AberturaOcularMe = document.getElementById("nenhuma_paciente_me_ao").value;
    ValorAberturaOcularMe = 4
} else {
    ValorAberturaOcularMe = 4
}
console.log(AberturaOcularMe);
console.log(ValorAberturaOcularMe);

/*RespostaVerbal*/
var RespostaVerbalMe = "";/*Input type radio*/
if (document.getElementById("palavras_e_frases_inapropriadas_paciente_me").checked) {
    RespostaVerbalMe = document.getElementById("palavras_e_frases_inapropriadas_paciente_me").value;
    ValorRespostaVerbalMe = 1
}  else if (document.getElementById("palavras_inapropriadas_paciente_me").checked) {
    RespostaVerbalMe = document.getElementById("palavras_inapropriadas_paciente_me").value;
    ValorRespostaVerbalMe = 2
} else if (document.getElementById("choro_persistentes_ou_gritos_paciente_me").checked) {
    RespostaVerbalMe = document.getElementById("choro_persistentes_ou_gritos_paciente_me").value;
    ValorRespostaVerbalMe = 3
} else if (document.getElementById("sons_incompreensíveis_paciente_me").checked) {
    RespostaVerbalMe = document.getElementById("sons_incompreensíveis_paciente_me").value;
    ValorRespostaVerbalMe = 4
}else if (document.getElementById("nenhuma_paciente_me_rv").checked) {
    RespostaVerbalMe = document.getElementById("nenhuma_paciente_me_rv").value;
    ValorRespostaVerbalMe = 5
}  else{
    ValorRespostaVerbalMe = 5
}
console.log(RespostaVerbalMe)
console.log(ValorRespostaVerbalMe)

var RespostaMotoraMe = "";/*Input type radio*/
if (document.getElementById("obedece_comando_paciente_me").checked) {
    RespostaMotoraMe = document.getElementById("obedece_comando_paciente_me").value;
    ValorRespostaMotoraMe = 1
} else if (document.getElementById("localiza_dor_estimulo_tatil_paciente_me").checked) {
    RespostaMotoraMe = document.getElementById("localiza_dor_estimulo_tatil_paciente_me").value;
    ValorRespostaMotoraMe = 2
}  else if (document.getElementById("retirada_do_segmento_estimulado_paciente").checked) {
    RespostaMotoraMe = document.getElementById("retirada_do_segmento_estimulado_paciente").value;
    ValorRespostaMotoraMe = 3
} else if (document.getElementById("flexao_anormal_paciente_me").checked) {
    RespostaMotoraMe = document.getElementById("flexao_anormal_paciente_me").value;
    ValorRespostaMotoraMe = 4
} else if (document.getElementById("extensao_anormal_paciente_me").checked) {
    RespostaMotoraMe = document.getElementById("extensao_anormal_paciente_me").value;
    ValorRespostaMotoraMe = 5
}else if (document.getElementById("ausencia_paciente").checked) {
    RespostaMotoraMe = document.getElementById("ausencia_paciente").value;
    ValorRespostaMotoraMe = 6
} else{
    ValorRespostaMotoraMe = 6
}
console.log(RespostaMotoraMe)
console.log(ValorRespostaMotoraMe)

var SpanGCS = document.getElementById("total_gcs_paciente");
var ValorGCS = ValorRespostaMotoraMe + ValorAberturaOcularMe + ValorRespostaVerbalMe;
SpanGCS.textContent = ValorGCS;

console.log("Total GCS:  " + ValorGCS);

$.ajax({
    url: 'PHP/Avaliacao_paciente.php',
    method: 'POST',
    data: {
        AberturaOcularMe: AberturaOcularMe,
        RespostaVerbalMe: RespostaVerbalMe,
        RespostaMotoraMe: RespostaMotoraMe,
    },
    dataType: 'json'
}).done(function() {
    alert("alguma coisa deu!!");
});
}
/*Abertura Ocular*/
function EspontaneaMe(){/*Input type radio*/
        var ComandoVerbalPacienteMe = document.getElementById("comando_verbal_paciente_me"); 
        ComandoVerbalPacienteMe.checked = false;

        var EstimuloDolorosoPacienteMe = document.getElementById("estimulo_doloroso_paciente_me"); 
        EstimuloDolorosoPacienteMe.checked = false;

        var NenhumaAoPacienteMe = document.getElementById("nenhuma_paciente_me_ao"); 
        NenhumaAoPacienteMe.checked = false;
    
}
function ComandoVerbalMe(){/*Input type radio*/
     var EspontaneaPacienteMe = document.getElementById("espontanea_paciente_me"); 
    EspontaneaPacienteMe.checked = false;
    

    var EstimuloDolorosoPacienteMe = document.getElementById("estimulo_doloroso_paciente_me"); 
    EstimuloDolorosoPacienteMe.checked = false;

    var NenhumaAoPacienteMe = document.getElementById("nenhuma_paciente_me_ao"); 
    NenhumaAoPacienteMe.checked = false;
}
function EstimuloDolorosoMe(){/*Input type radio*/
     var EspontaneaPacienteMe = document.getElementById("espontanea_paciente_me"); 
    EspontaneaPacienteMe.checked = false;
    
    var ComandoVerbalPacienteMe = document.getElementById("comando_verbal_paciente_me"); 
    ComandoVerbalPacienteMe.checked = false;

    var NenhumaAoPacienteMe = document.getElementById("nenhuma_paciente_me_ao"); 
    NenhumaAoPacienteMe.checked = false;
}
function NenhumaAoMe(){/*Input type radio*/
     var EspontaneaPacienteMe = document.getElementById("espontanea_paciente_me"); 
    EspontaneaPacienteMe.checked = false;
    
    var ComandoVerbalPacienteMe = document.getElementById("comando_verbal_paciente_me"); 
    ComandoVerbalPacienteMe.checked = false;

    var EstimuloDolorosoPacienteMe = document.getElementById("estimulo_doloroso_paciente_me"); 
    EstimuloDolorosoPacienteMe.checked = false;
}
/*Resposta Verbal*/
function PalavrasEFrasesInapropriadasMe(){

    var ChoroPersistentesOuGritosMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
    ChoroPersistentesOuGritosMe.checked = false;

    var EstimuloDolorosoPacienteMe = document.getElementById("choro_persistentes_ou_gritos_paciente_me"); 
    EstimuloDolorosoPacienteMe.checked = false;

    var SonsIncompreensiveisMe = document.getElementById("sons_incompreensíveis_paciente_me"); 
    SonsIncompreensiveisMe.checked = false;

    var NenhumaRvMe = document.getElementById("nenhuma_paciente_me_rv"); 
    NenhumaRvMe.checked = false;
}
function PalavrasInapropriadasMe(){
     
    var PalavrasEFrasesInapropriadasMe = document.getElementById("palavras_e_frases_inapropriadas_paciente_me"); 
    PalavrasEFrasesInapropriadasMe.checked = false; 

    var ChoroPersistentesOuGritosMe = document.getElementById("choro_persistentes_ou_gritos_paciente_me"); 
    ChoroPersistentesOuGritosMe.checked = false;

    var SonsIncompreensiveisMe = document.getElementById("sons_incompreensíveis_paciente_me"); 
    SonsIncompreensiveisMe.checked = false;

    var NenhumaRvMe = document.getElementById("nenhuma_paciente_me_rv"); 
    NenhumaRvMe.checked = false;
}
function ChoroPersistentesOuGritosMe(){
     var PalavrasEFrasesInapropriadasMe = document.getElementById("palavras_e_frases_inapropriadas_paciente_me"); 
    PalavrasEFrasesInapropriadasMe.checked = false;
    
    var PalavrasInapropriadasMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
    PalavrasInapropriadasMe.checked = false;

    var SonsIncompreensiveisMe = document.getElementById("sons_incompreensíveis_paciente_me"); 
    SonsIncompreensiveisMe.checked = false;

    var NenhumaRvMe = document.getElementById("nenhuma_paciente_me_rv"); 
    NenhumaRvMe.checked = false;
}
function SonsIncompreensiveisMe(){
    var PalavrasEFrasesInapropriadasMe = document.getElementById("palavras_e_frases_inapropriadas_paciente_me"); 
    PalavrasEFrasesInapropriadasMe.checked = false;
    
    var PalavrasInapropriadasMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
    PalavrasInapropriadasMe.checked = false;

    var ChoroPersistentesOuGritosMe = document.getElementById("choro_persistentes_ou_gritos_paciente_me"); 
    ChoroPersistentesOuGritosMe.checked = false;

    var NenhumaRvMe = document.getElementById("nenhuma_paciente_me_rv"); 
    NenhumaRvMe.checked = false;
}
function NenhumaRvMe(){
    var PalavrasEFrasesInapropriadasMe = document.getElementById("palavras_e_frases_inapropriadas_paciente_me"); 
    PalavrasEFrasesInapropriadasMe.checked = false;
    
    var PalavrasInapropriadasMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
    PalavrasInapropriadasMe.checked = false;

    var ChoroPersistentesOuGritosMe = document.getElementById("choro_persistentes_ou_gritos_paciente_me"); 
    ChoroPersistentesOuGritosMe.checked = false;

    var SonsIncompreensiveisMe = document.getElementById("sons_incompreensíveis_paciente_me"); 
    SonsIncompreensiveisMe.checked = false;

}
/*Resposta Motora*/

function ObedeceComandosMe(){
     
    var LocalizaDorEstimuloTatilMe = document.getElementById("localiza_dor_estimulo_tatil_paciente_me"); 
    LocalizaDorEstimuloTatilMe.checked = false;
 
     var RetiradaDoSegmentoEstimuladoMe = document.getElementById("retirada_do_segmento_estimulado_paciente"); 
     RetiradaDoSegmentoEstimuladoMe.checked = false;
 
     var FlexaoAnormal = document.getElementById("flexao_anormal_paciente_me"); 
     FlexaoAnormal.checked = false;
 
     var ExtensaoAnormal = document.getElementById("extensao_anormal_paciente_me"); 
     ExtensaoAnormal.checked = false;
 
     var AusenciaMe = document.getElementById("ausencia_paciente"); 
     AusenciaMe.checked = false;
 }

function LocalizaDorEstimuloTatilMe(){
     
    var ObedeceComandosMe = document.getElementById("obedece_comando_paciente_me"); 
    ObedeceComandosMe.checked = false;


    var RetiradaDoSegmentoEstimuladoMe = document.getElementById("retirada_do_segmento_estimulado_paciente"); 
    RetiradaDoSegmentoEstimuladoMe.checked = false;

    var FlexaoAnormal = document.getElementById("flexao_anormal_paciente_me"); 
    FlexaoAnormal.checked = false;

    var ExtensaoAnormal = document.getElementById("extensao_anormal_paciente_me"); 
    ExtensaoAnormal.checked = false;

    var AusenciaMe = document.getElementById("ausencia_paciente"); 
    AusenciaMe.checked = false;
}
function RetiradaDoSegmentoEstimuladoMe(){
    var ObedeceComandosMe = document.getElementById("obedece_comando_paciente_me"); 
    ObedeceComandosMe.checked = false;

    var LocalizaDorEstimuloTatilMe = document.getElementById("localiza_dor_estimulo_tatil_paciente_me"); 
    LocalizaDorEstimuloTatilMe.checked = false;

    var FlexaoAnormal = document.getElementById("flexao_anormal_paciente_me"); 
    FlexaoAnormal.checked = false;

    var ExtensaoAnormal = document.getElementById("extensao_anormal_paciente_me"); 
    ExtensaoAnormal.checked = false;

    var AusenciaMe = document.getElementById("ausencia_paciente"); 
    AusenciaMe.checked = false;
}
function FlexaoAnormal(){
    var ObedeceComandosMe = document.getElementById("obedece_comando_paciente_me"); 
    ObedeceComandosMe.checked = false;

    var LocalizaDorEstimuloTatilMe = document.getElementById("localiza_dor_estimulo_tatil_paciente_me"); 
    LocalizaDorEstimuloTatilMe.checked = false;

    var RetiradaDoSegmentoEstimuladoMe = document.getElementById("retirada_do_segmento_estimulado_paciente"); 
    RetiradaDoSegmentoEstimuladoMe.checked = false;


    var ExtensaoAnormal = document.getElementById("extensao_anormal_paciente_me"); 
    ExtensaoAnormal.checked = false;

    var AusenciaMe = document.getElementById("ausencia_paciente"); 
    AusenciaMe.checked = false;
}
function ExtensaoAnormal(){
    var ObedeceComandosMe = document.getElementById("obedece_comando_paciente_me"); 
    ObedeceComandosMe.checked = false;

    var LocalizaDorEstimuloTatilMe = document.getElementById("localiza_dor_estimulo_tatil_paciente_me"); 
    LocalizaDorEstimuloTatilMe.checked = false;

    var RetiradaDoSegmentoEstimuladoMe = document.getElementById("retirada_do_segmento_estimulado_paciente"); 
    RetiradaDoSegmentoEstimuladoMe.checked = false;

    var FlexaoAnormal = document.getElementById("flexao_anormal_paciente_me"); 
    FlexaoAnormal.checked = false;

    var AusenciaMe = document.getElementById("ausencia_paciente"); 
    AusenciaMe.checked = false;

}
function AusenciaMe(){
    var ObedeceComandosMe = document.getElementById("obedece_comando_paciente_me"); 
    ObedeceComandosMe.checked = false;

    var LocalizaDorEstimuloTatilMe = document.getElementById("localiza_dor_estimulo_tatil_paciente_me"); 
    LocalizaDorEstimuloTatilMe.checked = false;

    var RetiradaDoSegmentoEstimuladoMe = document.getElementById("retirada_do_segmento_estimulado_paciente"); 
    RetiradaDoSegmentoEstimuladoMe.checked = false;

    var FlexaoAnormal = document.getElementById("flexao_anormal_paciente_me"); 
    FlexaoAnormal.checked = false;

    var ExtensaoAnormal = document.getElementById("extensao_anormal_paciente_me"); 
    ExtensaoAnormal.checked = false;

}

function ocultarDivMe() {
    var maiorque5paciente = document.getElementById("maiorque5paciente");
    var menorque5paciente = document.getElementById("menorque5paciente");
    var ocultardivma = document.getElementById("ocultar_div_ma");
    var ocultardivme = document.getElementById("ocultar_div_me");
    /*Trocar a tela a ser exibida*/
    menorque5paciente.style.display = "none";
    maiorque5paciente.style.display = "flex";
    /*Alterar a cor do botão selecionado*/
    ocultardivme.style.backgroundColor = "#0667E8";
    ocultardivme.style.color = "white";
    /*Alterar a cor do botão não selecionado*/
    ocultardivma.style.backgroundColor = "white";
    ocultardivma.style.color = "black";
    /*Desselecionar os radios do menor*/
    espontanea_paciente_me.checked = false;
    comando_verbal_paciente_me.checked = false;
    estimulo_doloroso_paciente_me.checked = false;
    nenhuma_paciente_me_ao.checked = false;
    palavras_e_frases_inapropriadas_paciente_me.checked = false;
    palavras_inapropriadas_paciente_me.checked = false;
    choro_persistentes_ou_gritos_paciente_me.checked = false;
    sons_incompreensíveis_paciente_me.checked = false;
    nenhuma_paciente_me_rv.checked = false;
    obedece_comando_paciente_me.checked = false;
    localiza_dor_estimulo_tatil_paciente_me.checked = false;
    retirada_do_segmento_estimulado_paciente.checked = false;
    flexao_anormal_paciente_me.checked = false;
    extensao_anormal_paciente_me.checked = false;
    ausencia_paciente.checked = false;

}
function ocultarDivMa() {
    var maiorque5paciente = document.getElementById("maiorque5paciente");
    var menorque5paciente = document.getElementById("menorque5paciente");
    var ocultardivma = document.getElementById("ocultar_div_ma");
    var ocultardivme = document.getElementById("ocultar_div_me");
    /*Trocar a tela a ser exibida*/
    menorque5paciente.style.display = "flex";
    maiorque5paciente.style.display = "none";
    /*Alterar a cor do botão selecionado*/
    ocultardivme.style.backgroundColor = "white";
    ocultardivme.style.color = "black";
    /*Alterar a cor do botão não selecionado*/
    ocultardivma.style.backgroundColor = "#0667E8";
    ocultardivma.style.color = "white";
    /*Desselecionar os radios do menor*/
    espontanea_paciente_ma.checked = false;
    comando_verbal_paciente_ma.checked = false;
    estimulo_doloroso_paciente_ma.checked = false;
    nenhuma_paciente_ma_ao.checked = false;
    orientado_paciente_ma.checked = false;
    confuso_paciente_ma.checked = false;
    palavras_inapropriadas_paciente_ma.checked = false;
    palavras_incompreensiveis_paciente_ma.checked = false;
    nenhuma_paciente_ma_rv.checked = false;
    obedece_comandos_paciente_ma.checked = false;
    localiza_dor_paciente_ma.checked = false;
    movimento_retirada_paciente_ma.checked = false;
    flexao_anormal_paciente_ma.checked = false;
    extensao_anormal_paciente_ma.checked = false;
    nenhuma_paciente_ma_rm.checked = false;
} 
function DecisaoDeTransporte(){
    var MDT = $('#m_dt').val();
    var S1DT = $('#s1_dt').val();
    var S2DT = $('#s2_dt').val();
    var S3DT = $('#s3_dr').val();
    var DemanteDT = $('#demante_dt').val();
    
    var DecisaoDeTransporteDt = "";/*Input type radio*/
    if (document.getElementById("critico_dt").checked) {
        DecisaoDeTransporteDt = document.getElementById("critico_dt").value;
    }  else if (document.getElementById("instavel_dt").checked) {
        DecisaoDeTransporteDt = document.getElementById("instavel_dt").value;
    } else if (document.getElementById("estavel_dt").checked) {
        DecisaoDeTransporteDt = document.getElementById("estavel_dt").value;
    } else if (document.getElementById("potencial_mente_instavel_dt").checked) {
        DecisaoDeTransporteDt = document.getElementById("potencial_mente_instavel_dt").value;
    }

     $.ajax({
        url: 'PHP/Decisao_De_Transporte.php',
        method: 'POST',
        data: {
            DecisaoDeTransporteDt: DecisaoDeTransporteDt,
            MDT: MDT,
            S1DT: S1DT,
            S2DT: S2DT,
            S3DT: S3DT,
            DemanteDT: DemanteDT
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    

}   
function SinaisVitai(){
    var PressaoArterial = $('#pressao_arterial_sv').val();
    var mmhg = $('#mmhg_sv').val();
    var Pulso = $('#pulso_sv').val();
    var Respiracao = $('#respiracao_sv').val();
    var Temperatura = $('#temperatura_sv').val();

    var AnormalCheckbox = document.getElementById("anormal_sv");/*Input type Checkbox*/
    var AnormalCheck = AnormalCheckbox.checked;
    if (AnormalCheck) {
        var Anormal = 's';
    } else {
        var Anormal = 'n';
    }

    var Maior2SegSv = "";/*Input type radio*/
    if (document.getElementById("menor_2_seg_sv").checked) {
        Maior2SegSv  = document.getElementById("menor_2_seg_sv").value;
    } else if (document.getElementById("normal_sv").checked) {
        Maior2SegSv  = document.getElementById("normal_sv").value;
    } else if (document.getElementById("maior_2_seg_sv").checked) {
        Maior2SegSv  = document.getElementById("maior_2_seg_sv").value;
    } 


    
$.ajax({
    url: 'PHP/SinaisVitai.php',
    method: 'POST',
    data: {
        PressaoArterial: PressaoArterial,
        mmhg: mmhg,
        Pulso: Pulso,
        Respiracao: Respiracao,
        Temperatura: Temperatura,
        Anormal: Anormal
    },
    dataType: 'json'
}).done(function() {
    alert("alguma coisa deu!!");
});

}

function Anamnese(){
    var AcAnamnese = $('#oa_anamnese').val();
    var QsAnamnese = $('#qs_anamnese').val();
    var HuAnamnese = $('#hu_anamnese').val();
    var QisAnamnese = $('#qis_anamnese').val();
    var EqAnamnese = $('#eq_anamnese').val();
    var QrAnamnese = $('#qr_anamnese').val();

    

    var OaAnamnese = "";/*Input type radio*/
    if (document.getElementById("s_av").checked) {
        OaAnamnese  = document.getElementById("s_av").value;
    } else if (document.getElementById("n_av").checked) {
        OaAnamnese  = document.getElementById("n_av").value;
    }
    var PsAnamnese = "";/*Input type radio*/
    if (document.getElementById("s_ps").checked) {
        PsAnamnese  = document.getElementById("s_ps").value;
    } else if (document.getElementById("n_ps").checked) {
        PsAnamnese  = document.getElementById("n_ps").value;
    }
    var FmAnamnese = "";/*Input type radio*/
    if (document.getElementById("s_fm").checked) {
        FmAnamnese  = document.getElementById("s_fm").value;
    } else if (document.getElementById("n_fm").checked) {
        FmAnamnese  = document.getElementById("n_fm").value;
    }
    var AlAnamnese = "";/*Input type radio*/
    if (document.getElementById("s_al").checked) {
        AlAnamnese  = document.getElementById("s_al").value;
    } else if (document.getElementById("n_al").checked) {
        AlAnamnese  = document.getElementById("n_al").value;
    }
    var IlAnamnese = "";/*Input type radio*/
    if (document.getElementById("s_il").checked) {
        IlAnamnese  = document.getElementById("s_il").value;
    } else if (document.getElementById("n_il").checked) {
        IlAnamnese  = document.getElementById("n_il").value;
    }
    
 $.ajax({
        url: 'PHP/Anamnese.php',
        method: 'POST',
        data: {
            AcAnamnese: AcAnamnese,
            QsAnamnese: QsAnamnese,
            HuAnamnese: HuAnamnese,
            QisAnamnese: QisAnamnese,
            EqAnamnese: EqAnamnese,
            QrAnamnese: QrAnamnese,
            OaAnamnese: OaAnamnese,
            PsAnamnese: PsAnamnese,
            FmAnamnese: FmAnamnese,
            AlAnamnese: AlAnamnese,
            IlAnamnese: IlAnamnese
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    
}
function AnamneseGestacional(){
    var PeriodoDeGestacao = $('#pg_anamnese_gestacional').val();
    var NomeDoMedico = $('#nm_anamnese_gestacional').val();
    var Quantos = $('#qs_anamnese_gestacional').val();
    var Duracao = $('#tc_anamnese_gestacional').val();
    var Intervalo = $('#io_anamnese_gestacional').val();
    var HoraDoNascimento = $('#hn_anamnese_gestacional').val();
    var NomeDoBebe = $('#nb_anamnese_gestacional').val();

    

    var FpAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_fp").checked) {
        FpAnamneseGestacional  = document.getElementById("s_fp").value;
    } else if (document.getElementById("n_fp").checked) {
        FpAnamneseGestacional  = document.getElementById("n_fp").value;
    }
    var EcAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_ec").checked) {
        EcAnamneseGestacional  = document.getElementById("s_ec").value;
    } else if (document.getElementById("n_ec").checked) {
       EcAnamneseGestacional  = document.getElementById("n_ec").value;
    }
    var EfAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_ef").checked) {
        EfAnamneseGestacional  = document.getElementById("s_ef").value;
    } else if (document.getElementById("n_ef").checked) {
        EfAnamneseGestacional  = document.getElementById("n_ef").value;
    }
    var SqAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_sq").checked) {
        SqAnamneseGestacional  = document.getElementById("s_sq").value;
    } else if (document.getElementById("n_sq").checked) {
        SqAnamneseGestacional  = document.getElementById("n_sq").value;
    }

    var JbAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_jb").checked) {
        JbAnamneseGestacional  = document.getElementById("s_jb").value;
    } else if (document.getElementById("n_jb").checked) {
        JbAnamneseGestacional  = document.getElementById("n_jb").value;
    }



    var FvAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_fv").checked) {
        FvAnamneseGestacional  = document.getElementById("s_fv").value;
    } else if (document.getElementById("n_fv").checked) {
        FvAnamneseGestacional  = document.getElementById("n_fv").value;
    }
    var PrAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_pr").checked) {
        PrAnamneseGestacional  = document.getElementById("s_pr").value;
    } else if (document.getElementById("n_pr").checked) {
        PrAnamneseGestacional  = document.getElementById("n_pr").value;
    }

    var SexoAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("fem").checked) {
        SexoAnamneseGestacional  = document.getElementById("fem").value;
    } else if (document.getElementById("mas").checked) {
        SexoAnamneseGestacional  = document.getElementById("mas").value;
    }
    
 $.ajax({
        url: 'PHP/AnamneseGestacional.php',
        method: 'POST',
        data: {
            FpAnamneseGestacional: FpAnamneseGestacional,
            EfAnamneseGestacional: EfAnamneseGestacional,
            SqAnamneseGestacional: SqAnamneseGestacional,
            JbAnamneseGestacional: JbAnamneseGestacional,
            FvAnamneseGestacional: FvAnamneseGestacional,
            PrAnamneseGestacional: PrAnamneseGestacional,
            SexoAnamneseGestacional: SexoAnamneseGestacional,
            PeriodoDeGestacao: PeriodoDeGestacao,
            NomeDoMedico: NomeDoMedico,
            Duracao: Duracao,
            Quantos: Quantos,
            Intervalo: Intervalo,
            NomeDoBebe: NomeDoBebe,
            HoraDoNascimento: HoraDoNascimento
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    
}
function SinaisESintomas(){
    

}