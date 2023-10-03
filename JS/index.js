/*REGISTRO DE PÁGINAS
    Paginas:
    PacienteRegistro() FEITO
    EmergenciaRegistro() FEITO
    AvaliacaoPacienteMa() FEITO
    AvaliacaoPacienteMe() FEITO
    TermoDeRecusa() FEITO
    FormaDeConducao() FEITO
    DecisaoDeTransporte() FEITO
    SinaisVitai() FEITO
    Anamnese() FEITO
    AnamneseGestacional() FEITO
    ProblemasSuspeitos() FEITO
    SinaisESintomas() ANDAMENTO
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
    var conteudoGCSspan = document.getElementById("total_gcs_paciente");
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
    /*Limpar Span Total GCS*/
    conteudoGCSspan.textContent = 0


}
function ocultarDivMa() {
    var maiorque5paciente = document.getElementById("maiorque5paciente");
    var menorque5paciente = document.getElementById("menorque5paciente");
    var ocultardivma = document.getElementById("ocultar_div_ma");
    var ocultardivme = document.getElementById("ocultar_div_me");
    var conteudoGCSspan = document.getElementById("total_gcs_paciente");
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
    conteudoGCSspan.textContent = 0
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
        SegSv: Maior2SegSv,
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
    var AbdomenCheckbox = document.getElementById("sinais_e_sintomas_abdomen_sensivel_ou_rigido");/*Input type Checkbox*/
    var AbdomenChecked = AbdomenCheckbox.checked;
    if (AbdomenChecked) {
        var Abdomen = 'Abdomen';
    } else {
        var Abdomen = 'n';
    }
    var AfundamentoCheckbox = document.getElementById("sinais_e_sintomas_afundamento_cranio");/*Input type Checkbox*/
    var AfundamentoChecked = AfundamentoCheckbox.checked;
    if (AfundamentoChecked) {
        var Afundamento = 'Afundamento';
    } else {
        var Afundamento = 'n';
    }
    var AgitacaoCheckbox = document.getElementById("sinais_e_sintomas_agitacao");/*Input type Checkbox*/
    var AgitacaoChecked = AgitacaoCheckbox.checked;
    if (AgitacaoChecked) {
        var Agitacao = 'Agitacão';
    } else {
        var Agitacao = 'n';
    }
    var AminesiaCheckbox = document.getElementById("sinais_e_sintomas_aminesia");/*Input type Checkbox*/
    var AminesiaChecked = AminesiaCheckbox.checked;
    if (AminesiaChecked) {
        var Aminesia = 'Aminésia';
    } else {
        var Aminesia = 'n';
    }
    var ApineiaCheckbox = document.getElementById("sinais_e_sintomas_apineia");/*Input type Checkbox*/
    var ApineiaChecked = ApineiaCheckbox.checked;
    if (ApineiaChecked) {
        var Apineia = 'Apinéia';
    } else {
        var Apineia = 'n';
    }
    var BradicardiaCheckbox = document.getElementById("sinais_e_sintomas_bradicardia");/*Input type Checkbox*/
    var BradicardiaChecked = BradicardiaCheckbox.checked;
    if (BradicardiaChecked) {
        var Bradicardia = 'Bradicardia';
    } else {
        var Bradicardia = 'n';
    }
    var BradipneiaCheckbox = document.getElementById("sinais_e_sintomas_bradipneia");/*Input type Checkbox*/
    var BradipneiaChecked = BradipneiaCheckbox.checked;
    if (BradipneiaChecked) {
        var Bradipneia = 'Bradipnéia';
    } else {
        var Bradipneia = 'n';
    }
    var BroncoAspirandoCheckbox = document.getElementById("sinais_e_sintomas_bronco_aspirando");/*Input type Checkbox*/
    var BroncoAspirandoChecked = BroncoAspirandoCheckbox.checked;
    if (BroncoAspirandoChecked) {
        var BroncoAspirando = 'Bronco-Aspirando';
    } else {
        var BroncoAspirando = 'n';
    }
    var CefaliaCheckbox = document.getElementById("sinais_e_sintomas_cefaleia");/*Input type Checkbox*/
    var CefaliaChecked = CefaliaCheckbox.checked;
    if (CefaliaChecked) {
        var Cefaleia = 'Cefaleia';
    } else {
        var Cefaleia = 'n';
    }
    var ConvulsaoCheckbox = document.getElementById("sinais_e_sintomas_convulsao");/*Input type Checkbox*/
    var ConvulsaoChecked = ConvulsaoCheckbox.checked;
    if (ConvulsaoChecked) {
        var Convulsao = 'Convulsão';
    } else {
        var Convulsao = 'n';
    }

    var DecorticacaoCheckbox = document.getElementById("sinais_e_sintomas_decorticacao");/*Input type Checkbox*/
    var DecorticacaoChecked = DecorticacaoCheckbox.checked;
    if (DecorticacaoChecked) {
        var Decorticacao = 'Decorticação';
    } else {
        var Decorticacao = 'n';
    }

    var DeformidadeCheckbox = document.getElementById("sinais_e_sintomas_deformidade");/*Input type Checkbox*/
    var DeformidadeChecked = DeformidadeCheckbox.checked;
    if (DeformidadeChecked) {
        var Deformidade = 'Deformidade';
    } else {
        var Deformidade = 'n'; 
    }
    
    var DescerebracaoCheckbox = document.getElementById("sinais_e_sintomas_descerebracao");/*Input type Checkbox*/
    var DescerebracaoChecked = DescerebracaoCheckbox.checked;
    if (DescerebracaoChecked) {
        var Descerebracao = 'Decorticação';
    } else {
        var Descerebracao = 'n'; 
    }

    
    var DesmaioCheckbox = document.getElementById("sinais_e_sintomas_desmaio");/*Input type Checkbox*/
    var DesmaioChecked = DesmaioCheckbox.checked;
    if (DesmaioChecked) {
        var Desmaio = 'Desmaio';
    } else {
        var Desmaio = 'n';
    }
    var TraqueiaCheckbox = document.getElementById("sinais_e_sintomas_desvio_de_traqueia");/*Input type Checkbox*/
    var TraqueiaChecked = TraqueiaCheckbox.checked;
    if (TraqueiaChecked) {
        var Traqueia = 'Desvio de Traquéia';
    } else {
        var Traqueia = 'n';
    }
    var DispneiaCheckbox = document.getElementById("sinais_e_sintomas_dispneia");/*Input type Checkbox*/
    var DispneiaChecked = DispneiaCheckbox.checked;
    if (DispneiaChecked) {
        var Dispneia = 'Dispnéia';
    } else {
        var Dispneia = 'n';
    }
    var DorLocalCheckbox = document.getElementById("sinais_e_sintomas_dor_local");/*Input type Checkbox*/
    var DorLocalChecked = DorLocalCheckbox.checked;
    if (DorLocalChecked) {
        var DorLocal = 'Dor local';
    } else {
        var DorLocal = 'n';
    }
    
    var EnfisemaSubcutaneoCheckbox = document.getElementById("sinais_e_sintomas_enfisema_subcutaneo");/*Input type Checkbox*/
    var EnfisemaSubcutaneoChecked = EnfisemaSubcutaneoCheckbox.checked;
    if (EnfisemaSubcutaneoChecked) {
        var EnfisemaSubcutaneo = 'Enfisema subcutâneo';
    } else {
        var EnfisemaSubcutaneo = 'n';
    }
    var EstaseDeJugularCheckbox = document.getElementById("sinais_e_sintomas_estase_de_jugular");/*Input type Checkbox*/
    var EstaseDeJugularChecked = EstaseDeJugularCheckbox.checked;
    if (EstaseDeJugularChecked) {
        var EstaseDeJugular = 'Êstase de jugular';
    } else {
        var EstaseDeJugular = 'n';
    }
    var FacePalidaCheckbox = document.getElementById("sinais_e_sintomas_face_palida");/*Input type Checkbox*/
    var FacePalidaChecked = FacePalidaCheckbox.checked;
    if (FacePalidaChecked) {
        var FacePalida = 'Face Pálida';
    } else {
        var FacePalida = 'n';
    }
    
    var HipertensaoCheckbox = document.getElementById("sinais_e_sintomas_hipertensao");/*Input type Checkbox*/
    var HipertensaoChecked = HipertensaoCheckbox.checked;
    if (HipertensaoChecked) {
        var Hipertensao = 'Hipertensão';
    } else {
        var Hipertensao = 'n';
    }
    var HipotensaoCheckbox = document.getElementById("sinais_e_sintomas_hipotensao");/*Input type Checkbox*/
    var HipotensaoChecked = HipotensaoCheckbox.checked;
    if (HipotensaoChecked) {
        var Hipotensao = 'Hipotensão';
    } else {
        var Hipotensao = 'n';
    }
    var NausesEVomitosCheckbox = document.getElementById("sinais_e_sintomas_nauses_e_vomitos");/*Input type Checkbox*/
    var NausesEVomitosChecked = NausesEVomitosCheckbox.checked;
    if (NausesEVomitosChecked) {
        var NausesEVomitos = 'Náuses e vômitos';
    } else {
        var NausesEVomitos = 'n';
    }
    var NasoragiaCheckbox = document.getElementById("sinais_e_sintomas_nasoragia");/*Input type Checkbox*/
    var NasoragiaChecked = NasoragiaCheckbox.checked;
    if (NasoragiaChecked) {
        var Nasoragia = 'Nasoragia';
    } else {
        var Nasoragia = 'n';
    }
    var ObitoCheckbox = document.getElementById("sinais_e_sintomas_obito");/*Input type Checkbox*/
    var ObitoChecked = ObitoCheckbox.checked;
    if (ObitoChecked) {
        var Obito = 'Óbito';
    } else {
        var Obito = 'n';
    }
    var OtorreiaCheckbox = document.getElementById("sinais_e_sintomas_otorreia");/*Input type Checkbox*/
    var OtorreiaChecked = OtorreiaCheckbox.checked;
    if (OtorreiaChecked) {
        var Otorreia = 'Otorréia';
    } else {
        var Otorreia = 'n';
    }
    var OvaceCheckbox = document.getElementById("sinais_e_sintomas_ovace");/*Input type Checkbox*/
    var OvaceChecked = OvaceCheckbox.checked;
    if (OvaceChecked) {
        var Ovace = 'O.V.A.C.E';
    } else {
        var Ovace = 'n';
    }
    
    var PriaprismoCheckbox = document.getElementById("sinais_e_sintomas_priaprismo");/*Input type Checkbox*/
    var PriaprismoChecked = PriaprismoCheckbox.checked;
    if (PriaprismoChecked) {
        var Priaprismo = 'Priaprismo';
    } else {
        var Priaprismo = 'n';
    }
    var PruridoNaPeleCheckbox = document.getElementById("sinais_e_sintomas_prurido_na_pele");/*Input type Checkbox*/
    var PruridoNaPeleChecked = PruridoNaPeleCheckbox.checked;
    if (PruridoNaPeleChecked) {
        var PruridoNaPele = 'Prurido na Pele';
    } else {
        var PruridoNaPele = 'n';
    }
    
    var SedeCheckbox = document.getElementById("sinais_e_sintomas_sede");/*Input type Checkbox*/
    var SedeChecked = SedeCheckbox.checked;
    if (SedeChecked) {
        var Sede = 'Sede';
    } else {
        var Sede = 'n';
    }
    var SinalDeBattleCheckbox = document.getElementById("sinais_e_sintomas_sinal_de_battle");/*Input type Checkbox*/
    var SinalDeBattleChecked = SinalDeBattleCheckbox.checked;
    if (SinalDeBattleChecked) {
        var SinalDeBattle = 'Sinal de Battle';
    } else {
        var SinalDeBattle = 'n';
    }
    var SinalDeGuaxinimCheckbox = document.getElementById("sinais_e_sintomas_sinal_de_guaxinim");/*Input type Checkbox*/
    var SinalDeGuaxinimChecked = SinalDeGuaxinimCheckbox.checked;
    if (SinalDeGuaxinimChecked) {
        var SinalDeGuaxinim = 'Sinal de Guaxinim';
    } else {
        var SinalDeGuaxinim = 'n';
    }
    var SudoreseCheckbox = document.getElementById("sinais_e_sintomas_sudorese");/*Input type Checkbox*/
    var SudoreseChecked = SudoreseCheckbox.checked;
    if (SudoreseChecked) {
        var Sudorese = 'Sudorese';
    } else {
        var Sudorese = 'n';
    }
    var TaquipnéiaCheckbox = document.getElementById("sinais_e_sintomas_taquipnéia");/*Input type Checkbox*/
    var TaquipnéiaChecked = TaquipnéiaCheckbox.checked;
    if (TaquipnéiaChecked) {
        var Taquipnéia = 'Taquipnéia';
    } else {
        var Taquipnéia = 'n';
    }
    var TaquicardiaCheckbox = document.getElementById("sinais_e_sintomas_taquicardia");/*Input type Checkbox*/
    var TaquicardiaChecked = TaquicardiaCheckbox.checked;
    if (TaquicardiaChecked) {
        var Taquicardia = 'Taquicardia';
    } else {
        var Taquicardia = 'n';
    }
    var TonturaCheckbox = document.getElementById("sinais_e_sintomas_tontura");/*Input type Checkbox*/
    var TonturaChecked = TonturaCheckbox.checked;
    if (TonturaChecked) {
        var Tontura = 'Tontura';
    } else {
        var Tontura = 'n';
    }


    
    var LabiosSinaiESintomas = "";/*Input type radio*/
    if (document.getElementById("sinais_e_sintomas_labios").checked) {
        LabiosSinaiESintomas = document.getElementById("sinais_e_sintomas_labios").value;
    } else if (document.getElementById("sinais_e_sintomas_extremidades").checked) {
        LabiosSinaiESintomas = document.getElementById("sinais_e_sintomas_extremidades").value;
    }

    var GeneralizadoSinaiESintomas = "";/*Input type radio*/
    if (document.getElementById("sinais_e_sintomas_generalizado").checked) {
        GeneralizadoSinaiESintomas = document.getElementById("sinais_e_sintomas_generalizado").value;
    } else if (document.getElementById("sinais_e_sintomas_localizado").checked) {
        GeneralizadoSinaiESintomas = document.getElementById("sinais_e_sintomas_localizado").value;
    }
    var InternaSinaiESintomas = "";/*Input type radio*/
    if (document.getElementById("sinais_e_sintomas_interna").checked) {
        InternaSinaiESintomas = document.getElementById("sinais_e_sintomas_interna").value;
    } else if (document.getElementById("sinais_e_sintomas_externa").checked) {
        InternaSinaiESintomas = document.getElementById("sinais_e_sintomas_externa").value;
    }
    var CardiacaSinaiESintomas = "";/*Input type radio*/
    if (document.getElementById("sinais_e_sintomas_cardiaca").checked) {
        CardiacaSinaiESintomas = document.getElementById("sinais_e_sintomas_cardiaca").value;
    } else if (document.getElementById("sinais_e_sintomas_respiratoria").checked) {
        CardiacaSinaiESintomas = document.getElementById("sinais_e_sintomas_respiratoria").value;
    }
    var AnisocoriaSinaiESintomas = "";/*Input type radio*/
    if (document.getElementById("sinais_e_sintomas_anisocoria").checked) {
        AnisocoriaSinaiESintomas = document.getElementById("sinais_e_sintomas_anisocoria").value;
    } else if (document.getElementById("sinais_e_sintomas_isocoria").checked) {
        AnisocoriaSinaiESintomas = document.getElementById("sinais_e_sintomas_isocoria").value;
    }else if (document.getElementById("sinais_e_sintomas_reagente").checked) {
        AnisocoriaSinaiESintomas = document.getElementById("sinais_e_sintomas_reagente").value;
    }else if (document.getElementById("sinais_e_sintomas_n_reagente").checked) {
        AnisocoriaSinaiESintomas = document.getElementById("sinais_e_sintomas_n_reagente").value;
    }else if (document.getElementById("sinais_e_sintomas_midriase").checked) {
        AnisocoriaSinaiESintomas = document.getElementById("sinais_e_sintomas_midriase").value;
    }else if (document.getElementById("sinais_e_sintomas_miose").checked) {
        AnisocoriaSinaiESintomas = document.getElementById("sinais_e_sintomas_miose").value;
    }
    



    
    var Texto = $('#sinais_e_sintomas_input_txt').val();/*Input type text*/
    console.log("Cinose:" + LabiosSinaiESintomas)
    console.log("Edema:" + GeneralizadoSinaiESintomas)
    console.log("Hemorragia:" + InternaSinaiESintomas)
    console.log("Parada:" + CardiacaSinaiESintomas)
    console.log("Pupilass:" + AnisocoriaSinaiESintomas)
    console.log("Texto: " + Texto)
    console.log("Abdomen: " + Abdomen)
    console.log("Afundamento: " + Afundamento) 
    console.log("Agitacao: " + Agitacao) 
    console.log("Aminesia: " + Aminesia) 
    console.log("Apineia: " + Apineia) 
    console.log("Bradicardia: " + Bradicardia) 
    console.log("Bradipneia: " + Bradipneia) 
    console.log("BroncoAspirando: " + BroncoAspirando) 
    console.log("Convulsao: " + Convulsao) 
    console.log("Decorticacao: " + Decorticacao) 
    console.log("Desmaio: " + Desmaio) 
    console.log("Deformidade: " + Deformidade)
    console.log("Descerebracao: " + Descerebracao)
    console.log("Traqueia: " + Traqueia) 
    console.log("Dispneia: " + Dispneia) 
    console.log("DorLocal: " + DorLocal) 
    console.log("EnfisemaSubcutaneo: " + EnfisemaSubcutaneo) 
    console.log("EstaseDeJugular: " + EstaseDeJugular) 
    console.log("FacePalida: " + FacePalida) 
    console.log("Hipertensao: " + Hipertensao) 
    console.log("Hipotensao: " + Hipotensao) 
    console.log("NausesEVomitos: " + NausesEVomitos) 
    console.log("Obito: " + Obito) 
    console.log("Nasoragia: " + Nasoragia) 
    console.log("Otorreia: " + Otorreia)
    console.log("Ovace: " + Ovace) 
    console.log("Priaprismo: " + Priaprismo) 
    console.log("PruridoNaPele: " + PruridoNaPele) 
    console.log("Sede: " + Sede) 
    console.log("SinalDeBattle: " + SinalDeBattle) 
    console.log("SinalDeGuaxinim: " + SinalDeGuaxinim) 
    console.log("Sudorese: " + Sudorese) 
    console.log("Taquipnéia: " + Taquipnéia) 
    console.log("Taquicardia: " + Taquicardia) 
    console.log("Tontura: " + Tontura) 
    console.log("Cefaleia: " + Cefaleia) 

}
var EdemaCheckbox = document.getElementById("sinais_e_sintomas_edema");/*Input type Checkbox*/
var ParadaCheckbox = document.getElementById("sinais_e_sintomas_parada");/*Input type Checkbox*/
var HemorragiaCheckbox = document.getElementById("sinais_e_sintomas_hemorragia");/*Input type Checkbox*/
var PupilasCheckbox = document.getElementById("sinais_e_sintomas_pupilas");/*Input type Checkbox*/
var TXTCheckbox = document.getElementById("sinais_e_sintomas_txt");/*Input type CheckboxTXT*/

function CinoseCheckbox(){ /*Input type DIV NONE*/

    var CinoseT = document.getElementById("sinais_e_sintomas_cinose");
    var DivCinose = document.getElementById("div_cinose");
    var Labios = document.getElementById("sinais_e_sintomas_labios");/*Input type Radio*/
    var Extremidades = document.getElementById("sinais_e_sintomas_extremidades");/*Input type Radio*/
    if(CinoseT.checked){
        DivCinose.style.display = "flex";
    }else{
        DivCinose.style.display = "none";
        Labios.checked = false;/*Input type Radio*/
        Extremidades.checked = false;/*Input type Radio*/
    };
}

function ProblemasSuspeitos(){

    console.log("")
    console.log("Estou funcionando!! ~senpai.. (>//< )");

    var psiqcheckboxps = document.getElementById("psiquiatrico_ps");/*Input type Checkbox*/
    var confirmapsiqcheck = psiqcheckboxps.checked;
    if (confirmapsiqcheck) {
        var Psiquiatricops = 'sim';
    } else {
        var Psiquiatricops = 'nda';
    }console.log("Psiquiatrico: " + Psiquiatricops);

    var respradioboxps = "nda";/*Input type radio*/
    if (document.getElementById("respiratorio_dpoc_ps").checked) {
        respradioboxps = document.getElementById("respiratorio_dpoc_ps").value;
    } else if (document.getElementById("respiratorio_fumaca_ps").checked) {
        respradioboxps = document.getElementById("respiratorio_fumaca_ps").value;
    }console.log("Respiratorio: " + respradioboxps);

    var diabradioboxps = "nda";/*Input type radio*/
    if (document.getElementById("diabete_hiperglicemia_ps").checked) {
        diabradioboxps = document.getElementById("diabete_hiperglicemia_ps").value;
    } else if (document.getElementById("diabete_hipoglicemia_ps").checked) {
        diabradioboxps = document.getElementById("diabete_hipoglicemia_ps").value;
    }console.log("Diabetes: " + diabradioboxps);

    var obsterradioboxps = "nda";/*Input type radio*/
    if (document.getElementById("obsterico_parto_emergencial_ps").checked) {
        obsterradioboxps = document.getElementById("obsterico_parto_emergencial_ps").value;
    } else if (document.getElementById("obsterico_gestante_ps").checked) {
        obsterradioboxps = document.getElementById("obsterico_gestante_ps").value;
    } else if (document.getElementById("obsterico_hemor_ps").checked) {
        obsterradioboxps = document.getElementById("obsterico_hemor_ps").value;
    }console.log("Obsterico: " + obsterradioboxps);

    var transpradiobox = "nda";/*Input type radio*/
    if (document.getElementById("transporte_aereo_ps").checked) {
        transpradiobox = document.getElementById("transporte_aereo_ps").value;
    } else if (document.getElementById("transporte_clinico_ps").checked) {
        transpradiobox = document.getElementById("transporte_clinico_ps").value;
    } else if (document.getElementById("transporte_emergencial_ps").checked) {
        transpradiobox = document.getElementById("transporte_emergencial_ps").value;
    } else if (document.getElementById("transporte_pos_trauma_ps").checked) {
        transpradiobox = document.getElementById("transporte_pos_trauma_ps").value;
    } else if (document.getElementById("transporte_samu_ps").checked) {
        transpradiobox = document.getElementById("transporte_samu_ps").value;
    } else if (document.getElementById("transporte_outros_ps").checked) {
        transpradiobox = document.getElementById("transporte_outros_ps").value;
    } else if (document.getElementById("transporte_sem_remocao_ps").checked) {
        transpradiobox = document.getElementById("transporte_sem_remocao_ps").value;
    } console.log("Transporte: " + transpradiobox);

    if (document.getElementById("transporte_outro_texto_ps").value === ""){
        var OutroTextoPs = "nda";
    } else{
        var OutroTextoPs = document.getElementById("transporte_outro_texto_ps").value;
    }console.log("Outro: " + OutroTextoPs);
    
    $.ajax({
        url: 'PHP/tabela-problemas-suspeitos.php',
        method: 'POST',
        data: {
            Psiquiatrico: Psiquiatricops,
            Respiratorio: respradioboxps,
            Diabete: diabradioboxps,
            Obsterico: obsterradioboxps,
            Transporte: transpradiobox,
            Outro: OutroTextoPs
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
}
function MostrarRespiratorioPS(){
    
    var MostrarDivRespiratorio = document.getElementById("respiratorio_ps_checkbox");
    var DivRespiratorioPS = document.getElementById("div_respiratorio_ps");

    if(MostrarDivRespiratorio.checked){
        DivRespiratorioPS.style.display = "flex";
    }else{
        DivRespiratorioPS.style.display = "none";
    };
}
function MostrarDiabetesPS(){

    var MostrarDivDiabestes = document.getElementById("diabetes_ps");
    var DivDiabetesPS = document.getElementById("div_diabetes_ps")

    if(MostrarDivDiabestes.checked){
        DivDiabetesPS.style.display = "flex";
    }else{
        DivDiabetesPS.style.display = "none";
    };
}
function MostrarObstericosPS(){

    var MostrarDivObstericoPS = document.getElementById("obsterico_ps");
    var DivObstericoPS = document.getElementById("div_obsterico_ps");

    if(MostrarDivObstericoPS.checked){
        DivObstericoPS.style.display = "flex"
    }else{
        DivObstericoPS.style.display = "none"
    }
}
function MostrarTransportePS(){

    var MostrarDivTransportePS = document.getElementById("transporte_ps");
    var DivTransportePS = document.getElementById("div_transporte_ps");

    if(MostrarDivTransportePS.checked){
        DivTransportePS.style.display = "flex"
    }else{
        DivTransportePS.style.display = "none"
    }

}
function LimparRadioPS(){
    var Psiquiatrico  = document.getElementById("psiquiatrico_ps");
    var Respiratorio = document.getElementById("respiratorio_ps_checkbox");
    var DPOC = document.getElementById("respiratorio_dpoc_ps");
    var InalacaoFumaca = document.getElementById("respiratorio_fumaca_ps");
    var Diabete = document.getElementById("diabetes_ps");
    var Hiperglicemia = document.getElementById("diabete_hiperglicemia_ps");
    var Hipoglicemia = document.getElementById("diabete_hipoglicemia_ps");
    var Obsterico = document.getElementById("obsterico_ps");
    var PartoEmergencial = document.getElementById("obsterico_parto_emergencial_ps");
    var Gestante = document.getElementById("obsterico_gestante_ps");
    var Hemor = document.getElementById("obsterico_hemor_ps");
    var Transporte = document.getElementById("transporte_ps");
    var Aereo = document.getElementById("transporte_aereo_ps");
    var Clinico = document.getElementById("transporte_clinico_ps");
    var Emergencial = document.getElementById("transporte_emergencial_ps");
    var PosTrauma = document.getElementById("transporte_pos_trauma_ps");
    var Samu = document.getElementById("transporte_samu_ps");
    var Outros = document.getElementById("transporte_outros_ps");
    var SemRemocao = document.getElementById("transporte_sem_remocao_ps");
    var OutroTexto = document.getElementById("transporte_outro_texto_ps");
    var DivRespiratorioPS = document.getElementById("div_respiratorio_ps");
    var DivDiabetesPS = document.getElementById("div_diabetes_ps");
    var DivObstericoPS = document.getElementById("div_obsterico_ps");
    var DivTransportePS = document.getElementById("div_transporte_ps");

    Psiquiatrico.checked = false;
    Respiratorio.checked = false;
    DPOC.checked = false;
    InalacaoFumaca.checked = false;
    Diabete.checked = false;
    Hiperglicemia.checked = false;
    Hipoglicemia.checked = false;
    Obsterico.checked = false;
    PartoEmergencial.checked = false;
    Gestante.checked = false;
    Hemor.checked = false;
    Transporte.checked = false;
    Aereo.checked = false;
    Clinico.checked = false;
    Emergencial.checked = false;
    PosTrauma.checked = false;
    Samu.checked = false;
    Outros.checked = false;
    SemRemocao.checked = false;
    OutroTexto.value = "";
    DivRespiratorioPS.style.display = "none";
    DivDiabetesPS.style.display = "none";
    DivObstericoPS.style.display = "none";
    DivTransportePS.style.display = "none";
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}
function ProcedimentosEfetuados(){
    console.log("");
    console.log("Estou funcionando!! ~senpai.. (>//<");

    var AspiracaoPefCheckbox = document.getElementById("aspiracao_pef");/*Input type Checkbox*/
    var AspiracaoPefChecked = AspiracaoPefCheckbox.checked;
    if (AspiracaoPefChecked) {
        var AspiracaoPef = 'Aspiração';
    } else {
        var AspiracaoPef = 'n';
    };

    var AvaliacaoInicialPefCheckbox = document.getElementById("avaliacao_inicial_pef");/*Input type Checkbox*/
    var AvaliacaoInicialPefChecked = AvaliacaoInicialPefCheckbox.checked;
    if (AvaliacaoInicialPefChecked) {
        var AvaliacaoInicialPef = 'Avaliação Inicial';
    } else {
        var AvaliacaoInicialPef = 'n';
    }

    var AvaliacaoContinuadaPefCheckbox = document.getElementById("avaliacao_continuada_pef");/*Input type Checkbox*/
    var AvaliacaoContinuadaPefChecked = AvaliacaoContinuadaPefCheckbox.checked;
    if (AvaliacaoContinuadaPefChecked) {
        var AvaliacaoContinuadaPef = 'Avaliação continuada';
    } else {
        var AvaliacaoContinuadaPef = 'n';
    }

    var ChaveRautekPefCheckbox = document.getElementById("chave_rautek_pef");/*Input type Checkbox*/
    var ChaveRautekPefChecked = ChaveRautekPefCheckbox.checked;
    if (ChaveRautekPefChecked) {
        var ChaveRautekPef = 'Chave de Rautek';
    } else {
        var ChaveRautekPef = 'n';
    }

    var CanulaGuedelPefCheckbox = document.getElementById("canula_guedel_pef");/*Input type Checkbox*/
    var CanulaGuedelPefChecked = CanulaGuedelPefCheckbox.checked;
    if (CanulaGuedelPefChecked) {
        var CanulaGuedelPef = 'Cânula de Guedel';
    } else {
        var CanulaGuedelPef = 'n';
    }

    var DesobstrucaoVAPefCheckbox = document.getElementById("desobstrucao_va_pef");/*Input type Checkbox*/
    var DesobstrucaoVAPefChecked = DesobstrucaoVAPefCheckbox.checked;
    if (DesobstrucaoVAPefChecked) {
        var DesobstrucaoVAPef = 'Desobstrução de V.A';
    } else {
        var DesobstrucaoVAPef = 'n';
    }

    var DesobstrucaoDEAPefCheckbox = document.getElementById("desobtrucao_dea_pef");/*Input type Checkbox*/
    var DesobstrucaoDEAPefChecked = DesobstrucaoDEAPefCheckbox.checked;
    if (DesobstrucaoDEAPefChecked) {
        var DesobstrucaoDEAPef = 'Desobstrução do D.E.A';
    } else {
        var DesobstrucaoDEAPef = 'n';
    }

    var EmpregoDEAPefCheckbox = document.getElementById("emprego_dea_pef");/*Input type Checkbox*/
    var EmpregoDEAPefChecked = EmpregoDEAPefCheckbox.checked;
    if (EmpregoDEAPefChecked) {
        var EmpregoDEAPef = 'Emprego do D.E.A';
    } else {
        var EmpregoDEAPef = 'n';
    }

    var GerenciamentoRiscosPefCheckbox = document.getElementById("gerenciamento_riscos_pef");/*Input type Checkbox*/
    var GerenciamentoRiscosPefChecked = GerenciamentoRiscosPefCheckbox.checked;
    if (GerenciamentoRiscosPefChecked) {
        var GerenciamentoRiscosPef = 'Gerenciamento de Riscos';
    } else {
        var GerenciamentoRiscosPef = 'n';
    }

    var LimpezaFerimentosPefCheckbox = document.getElementById("limpeza_ferimentos_pef");/*Input type Checkbox*/
    var LimpezaFerimentosPefChecked = LimpezaFerimentosPefCheckbox.checked;
    if (LimpezaFerimentosPefChecked) {
        var LimpezaFerimentosPef = 'Limpeza de Ferimentos';
    } else {
        var LimpezaFerimentosPef = 'n';
    }

    var CurativosPefCheckbox = document.getElementById("curativos_pef");/*Input type Checkbox*/
    var CurativosPefChecked = CurativosPefCheckbox.checked;
    if (CurativosPefChecked) {
        var CurativosPef = 'Limpeza de Ferimentos';
    } else {
        var CurativosPef = 'n';
    }

    var CompressivosPefCheckbox = document.getElementById("compressivo_pef");/*Input type Checkbox*/
    var CompressivosPefChecked = CompressivosPefCheckbox.checked;
    if (CompressivosPefChecked) {
        var CompressivosPef = 'Compressivo';
    } else {
        var CompressivosPef = 'n';
    }

    var EncravamentoPefCheckbox = document.getElementById("encravamento_pef");/*Input type Checkbox*/
    var EncravamentoPefChecked = EncravamentoPefCheckbox.checked;
    if (EncravamentoPefChecked) {
        var EncravamentoPef = 'Encravamento';
    } else {
        var EncravamentoPef = 'n';
    }

    var OcularPefCheckbox = document.getElementById("ocular_pef");/*Input type Checkbox*/
    var OcularPefChecked = OcularPefCheckbox.checked;
    if (OcularPefChecked) {
        var OcularPef = 'Ocular';
    } else {
        var OcularPef = 'n';
    }

    var QueimaduraPefCheckbox = document.getElementById("queimadura_pef");/*Input type Checkbox*/
    var QueimaduraPefChecked = QueimaduraPefCheckbox.checked;
    if (QueimaduraPefChecked) {
        var QueimaduraPef = 'Queimadura';
    } else {
        var QueimaduraPef = 'n';
    }

    var SimplesPefCheckbox = document.getElementById("simples_pef");/*Input type Checkbox*/
    var SimplesPefChecked = SimplesPefCheckbox.checked;
    if (SimplesPefChecked) {
        var SimplesPef = 'Simples';
    } else {
        var SimplesPef = 'n';
    }

    var TresPontasPefCheckbox = document.getElementById("3pontas_pef");/*Input type Checkbox*/
    var TresPontasPefChecked = TresPontasPefCheckbox.checked;
    if (TresPontasPefChecked) {
        var TresPontasPef = '3 pontas';
    } else {
        var TresPontasPef = 'n';
    }

    var ImobilizacaoPefCheckbox = document.getElementById("imobilizacao_pef");/*Input type Checkbox*/
    var ImobilizacaoPefChecked = ImobilizacaoPefCheckbox.checked;
    if (ImobilizacaoPefChecked) {
        var ImobilizacaoPef = 'Imobilização';
    } else {
        var ImobilizacaoPef = 'n';
    }

    var MmbInfDirPefCheckbox = document.getElementById("mmb_inf_dir_pef");/*Input type Checkbox*/
    var MmbInfDirPefChecked = MmbInfDirPefCheckbox.checked;
    if (MmbInfDirPefChecked) {
        var MmbInfDirPef = 'Membro inferior Direito';
    } else {
        var MmbInfDirPef = 'n';
    }

    var MmbInfEsqPefCheckbox = document.getElementById("mmb_inf_esq_pef");/*Input type Checkbox*/
    var MmbInfEsqPefChecked = MmbInfEsqPefCheckbox.checked;
    if (MmbInfEsqPefChecked) {
        var MmbInfEsqPef = 'Membro Inferior Esquerdo';
    } else {
        var MmbInfEsqPef = 'n';
    }

    var MmbSupDirPefCheckbox = document.getElementById("mmb_sup_dir_pef");/*Input type Checkbox*/
    var MmbSupDirPefChecked = MmbSupDirPefCheckbox.checked;
    if (MmbSupDirPefChecked) {
        var MmbSupDirPef = 'Membro Superior Direito';
    } else {
        var MmbSupDirPef = 'n';
    }

    var MmbSupEsqPefCheckbox = document.getElementById("mmb_sup_esq_pef");/*Input type Checkbox*/
    var MmbSupEsqPefChecked = MmbSupEsqPefCheckbox.checked;
    if (MmbSupEsqPefChecked) {
        var MmbSupEsqPef = 'Membro Superior Esquerdo';
    } else {
        var MmbSupEsqPef = 'n';
    }

    var QuadrilPefCheckbox = document.getElementById("quadril_pef");/*Input type Checkbox*/
    var QuadrilPefChecked = QuadrilPefCheckbox.checked;
    if (QuadrilPefChecked) {
        var QuadrilPef = 'Quadril';
    } else {
        var QuadrilPef = 'n';
    }

    var CervicalPefCheckbox = document.getElementById("cervical_pef");/*Input type Checkbox*/
    var CervicalPefChecked = CervicalPefCheckbox.checked;
    if (CervicalPefChecked) {
        var CervicalPef = 'Cervical';
    } else {
        var CervicalPef = 'n';
    }

    var MacaSobreRodasPefCheckbox = document.getElementById("maca_sobre_rodas_pef");/*Input type Checkbox*/
    var MacaSobreRodasPefChecked = MacaSobreRodasPefCheckbox.checked;
    if (MacaSobreRodasPefChecked) {
        var MacaSobreRodasPef = 'Maca Sobre Rodas';
    } else {
        var MacaSobreRodasPef = 'n';
    }

    var MacaRigidaPefCheckbox = document.getElementById("maca_rigida_pef");/*Input type Checkbox*/
    var MacaRigidaPefChecked = MacaRigidaPefCheckbox.checked;
    if (MacaRigidaPefChecked) {
        var MacaRigidaPef = 'Maca Sobre Rodas';
    } else {
        var MacaRigidaPef = 'n';
    }

    var RetiradoCapacetePefCheckbox = document.getElementById("retirado_capacete_pef");/*Input type Checkbox*/
    var RetiradoCapacetePefChecked = RetiradoCapacetePefCheckbox.checked;
    if (RetiradoCapacetePefChecked) {
        var RetiradoCapacetePef = 'Retirado Do Capacete';
    } else {
        var RetiradoCapacetePef = 'n';
    }

    var RCPPefCheckbox = document.getElementById("rcp_pef");/*Input type Checkbox*/
    var RCPPefChecked = RCPPefCheckbox.checked;
    if (RCPPefChecked) {
        var RCPPef = 'R.C.P';
    } else {
        var RCPPef = 'n';
    }

    var Rolamento90PefCheckbox = document.getElementById("rolamento90_pef");/*Input type Checkbox*/
    var Rolamento90PefChecked = Rolamento90PefCheckbox.checked;
    if (Rolamento90PefChecked) {
        var Rolamento90Pef = 'Rolamento 90°';
    } else {
        var Rolamento90Pef = 'n';
    }

    var Rolamento180PefCheckbox = document.getElementById("rolamento180_pef");/*Input type Checkbox*/
    var Rolamento180PefChecked = Rolamento180PefCheckbox.checked;
    if (Rolamento180PefChecked) {
        var Rolamento180Pef = 'Rolamento 180°';
    } else {
        var Rolamento180Pef = 'n';
    }

    var TomadaDecisaoPefCheckbox = document.getElementById("tomada_decisao_pef");/*Input type Checkbox*/
    var TomadaDecisaoPefChecked = TomadaDecisaoPefCheckbox.checked;
    if (TomadaDecisaoPefChecked) {
        var TomadaDecisaoPef = 'Tomada Decisão';
    } else {
        var TomadaDecisaoPef = 'n';
    }

    var TratamentoChoquePefCheckbox = document.getElementById("tratamento_choque_pef");/*Input type Checkbox*/
    var TratamentoChoquePefChecked = TratamentoChoquePefCheckbox.checked;
    if (TratamentoChoquePefChecked) {
        var TratamentoChoquePef = 'Tratamento de Choque';
    } else {
        var TratamentoChoquePef = 'n';
    }

    var UsoCanulaPefCheckbox = document.getElementById("uso_canula_pef");/*Input type Checkbox*/
    var UsoCanulaPefChecked = UsoCanulaPefCheckbox.checked;
    if (UsoCanulaPefChecked) {
        var UsoCanulaPef = 'Uso de Cânula';
    } else {
        var UsoCanulaPef = 'n';
    }

    var UsoColarPefCheckbox = document.getElementById("uso_colar_pef");/*Input type Checkbox*/
    var UsoColarPefChecked = UsoColarPefCheckbox.checked;
    if (UsoColarPefChecked) {
        var UsoColarPef = 'Uso de Colar: ' + document.getElementById("text_colar_pef").value;
    } else {
        var UsoColarPef = 'n';
    }

    var UsoKEDPefCheckbox = document.getElementById("uso_ked_pef");/*Input type Checkbox*/
    var UsoKEDPefChecked = UsoKEDPefCheckbox.checked;
    if (UsoKEDPefChecked) {
        var UsoKEDPef = 'Uso KED';
    } else {
        var UsoKEDPef = 'n';
    }

    var UsoTTFPefCheckbox = document.getElementById("Uso_ttf_pef");/*Input type Checkbox*/
    var UsoTTFPefChecked = UsoTTFPefCheckbox.checked;
    if (UsoTTFPefChecked) {
        var UsoTTFPef = 'Uso TTF';
    } else {
        var UsoTTFPef = 'n';
    }

    var VentilacaoSuportePefCheckbox = document.getElementById("ventilacao_suporte_pef");/*Input type Checkbox*/
    var VentilacaoSuportePefChecked = VentilacaoSuportePefCheckbox.checked;
    if (VentilacaoSuportePefChecked) {
        var VentilacaoSuportePef = 'Ventilação Suporte';
    } else {
        var VentilacaoSuportePef = 'n';
    }

    var OxigenoterapiaPefCheckbox = document.getElementById("oxigenoterapia_pef");/*Input type Checkbox*/
    var OxigenoterapiaPefChecked = OxigenoterapiaPefCheckbox.checked;
    if (OxigenoterapiaPefChecked) {
        var OxigenoterapiaPef = 'Oxigenoterapia: ' + document.getElementById("text_oxigenoterapia_pef").value;
    } else {
        var OxigenoterapiaPef = 'n';
    }

    var ReanimadorPefCheckbox = document.getElementById("reanimador_pef");/*Input type Checkbox*/
    var ReanimadorPefChecked = ReanimadorPefCheckbox.checked;
    if (ReanimadorPefChecked) {
        var ReanimadorPef = 'Reanimador: ' + document.getElementById("text_reanimador_pef").value;
    } else {
        var ReanimadorPef = 'n';
    }

    var MeiosAuxiliaresPefCheckbox = document.getElementById("meios_auxiliares_pef");/*Input type Checkbox*/
    var MeiosAuxiliaresPefChecked = MeiosAuxiliaresPefCheckbox.checked;
    if (MeiosAuxiliaresPefChecked) {
        var MeiosAuxiliaresPef = 'Meios Auxiliares';
    } else {
        var MeiosAuxiliaresPef = 'n';
    }

    var CelescPefCheckbox = document.getElementById("celesc_pef");/*Input type Checkbox*/
    var CelescPefChecked = CelescPefCheckbox.checked;
    if (CelescPefChecked) {
        var CelescPef = 'Celesc';
    } else {
        var CelescPef = 'n';
    }

    var PoliciaCivilPefCheckbox = document.getElementById("policia_civil_pef");/*Input type Checkbox*/
    var PoliciaCivilPefChecked = PoliciaCivilPefCheckbox.checked;
    if (PoliciaCivilPefChecked) {
        var PoliciaCivilPef = 'Policia Civil';
    } else {
        var PoliciaCivilPef = 'n';
    }

    var PoliciaMilitarPefCheckbox = document.getElementById("policia_militar_pef");/*Input type Checkbox*/
    var PoliciaMilitarPefChecked = PoliciaMilitarPefCheckbox.checked;
    if (PoliciaMilitarPefChecked) {
        var PoliciaMilitarPef = 'Policia Militar';
    } else {
        var PoliciaMilitarPef = 'n';
    }

    var PoliciaPrePefCheckbox = document.getElementById("policia_pre_pef");/*Input type Checkbox*/
    var PoliciaPrePefChecked = PoliciaPrePefCheckbox.checked;
    if (PoliciaPrePefChecked) {
        var PoliciaPrePef = 'Policia Pre';
    } else {
        var PoliciaPrePef = 'n';
    }

    var PoliciaPrfPefCheckbox = document.getElementById("policia_prf_pef");/*Input type Checkbox*/
    var PoliciaPrfPefChecked = PoliciaPrfPefCheckbox.checked;
    if (PoliciaPrfPefChecked) {
        var PoliciaPrfPef = 'Policia Prf';
    } else {
        var PoliciaPrfPef = 'n';
    }

    var DefCivilPefCheckbox = document.getElementById("def_civil_pef");/*Input type Checkbox*/
    var DefCivilPefChecked = DefCivilPefCheckbox.checked;
    if (DefCivilPefChecked) {
        var DefCivilPef = 'DEF. Civil';
    } else {
        var DefCivilPef = 'n';
    }

    var IPGPCPefCheckbox = document.getElementById("ipg_pc_pef");/*Input type Checkbox*/
    var IPGPCPefChecked = IPGPCPefCheckbox.checked;
    if (IPGPCPefChecked) {
        var IPGPCPef = 'IPG/PC';
    } else {
        var IPGPCPef = 'n';
    }

    var SamuPefCheckbox = document.getElementById("samu_pef");/*Input type Checkbox*/
    var SamuPefChecked = SamuPefCheckbox.checked;
    if (SamuPefChecked) {
        var SamuPef = 'Samu';
    } else {
        var SamuPef = 'n';
    }

    var CITPefCheckbox = document.getElementById("cit_pef");/*Input type Checkbox*/
    var CITPefChecked = CITPefCheckbox.checked;
    if (CITPefChecked) {
        var CITPef = 'CIT';
    } else {
        var CITPef = 'n';
    }

    if (document.getElementById("textobox_pef").checked){
        var TextoPef = document.getElementById("texto_pef").value;
    } else{
        var TextoPef = "n";
    }
    
    var TodosOsValoresPef = ""
    if(AspiracaoPef !== "n"){TodosOsValoresPef += AspiracaoPef}
    if(AvaliacaoInicialPef !== "n"){TodosOsValoresPef += ", " + AvaliacaoInicialPef}
    if(AvaliacaoContinuadaPef !== "n"){TodosOsValoresPef += ", " + AvaliacaoContinuadaPef}
    if(ChaveRautekPef !== "n"){TodosOsValoresPef += ", " + ChaveRautekPef}
    if(CanulaGuedelPef !== "n"){TodosOsValoresPef += ", " + CanulaGuedelPef}
    if(DesobstrucaoVAPef !== "n"){TodosOsValoresPef += ", " + DesobstrucaoVAPef}
    if(DesobstrucaoDEAPef !== "n"){TodosOsValoresPef += ", " + DesobstrucaoDEAPef}
    if(EmpregoDEAPef !== "n"){TodosOsValoresPef += ", " + EmpregoDEAPef}
    if(GerenciamentoRiscosPef !== "n"){TodosOsValoresPef += ", " + GerenciamentoRiscosPef}
    if(LimpezaFerimentosPef !== "n"){TodosOsValoresPef += ", " + LimpezaFerimentosPef}
    if(CurativosPef !== "n"){TodosOsValoresPef += ", " + CurativosPef}
    if(CompressivosPef !== "n"){TodosOsValoresPef += ", " + CompressivosPef}
    if(EncravamentoPef !== "n"){TodosOsValoresPef += ", " + EncravamentoPef}
    if(OcularPef !== "n"){TodosOsValoresPef += ", " + OcularPef}
    if(QueimaduraPef !== "n"){TodosOsValoresPef += ", " + QueimaduraPef}
    if(SimplesPef !== "n"){TodosOsValoresPef += ", " + SimplesPef}
    if(TresPontasPef !== "n"){TodosOsValoresPef += ", " + TresPontasPef}
    if(ImobilizacaoPef !== "n"){TodosOsValoresPef += ", " + ImobilizacaoPef}
    if(MmbInfDirPef !== "n"){TodosOsValoresPef += ", " + MmbInfDirPef}
    if(MmbInfEsqPef !== "n"){TodosOsValoresPef += ", " + MmbInfEsqPef}
    if(MmbSupDirPef !== "n"){TodosOsValoresPef += ", " + MmbSupDirPef}
    if(MmbSupEsqPef !== "n"){TodosOsValoresPef += ", " + MmbSupEsqPef}
    if(QuadrilPef !== "n"){TodosOsValoresPef += ", " + QuadrilPef}
    if(CervicalPef !== "n"){TodosOsValoresPef += ", " + CervicalPef}
    if(MacaSobreRodasPef !== "n"){TodosOsValoresPef += ", " + MacaSobreRodasPef}
    if(MacaRigidaPef !== "n"){TodosOsValoresPef += ", " + MacaRigidaPef}
    if(RCPPef !== "n"){TodosOsValoresPef += ", " + RCPPef}
    if(Rolamento90Pef !== "n"){TodosOsValoresPef += ", " + Rolamento90Pef}
    if(Rolamento180Pef !== "n"){TodosOsValoresPef += ", " + Rolamento180Pef}
    if(TomadaDecisaoPef !== "n"){TodosOsValoresPef += ", " + TomadaDecisaoPef}
    if(TratamentoChoquePef !== "n"){TodosOsValoresPef += ", " + TratamentoChoquePef}
    if(UsoCanulaPef !== "n"){TodosOsValoresPef += ", " + UsoCanulaPef}
    if(UsoColarPef !== "n"){TodosOsValoresPef += ", " + UsoColarPef}
    if(UsoKEDPef !== "n"){TodosOsValoresPef += ", " + UsoKEDPef}
    if(UsoTTFPef !== "n"){TodosOsValoresPef += ", " + UsoTTFPef}
    if(VentilacaoSuportePef !== "n"){TodosOsValoresPef += ", " + VentilacaoSuportePef}
    if(OxigenoterapiaPef !== "n"){TodosOsValoresPef += ", " + OxigenoterapiaPef}
    if(ReanimadorPef !== "n"){TodosOsValoresPef += ", " + ReanimadorPef}
    if(MeiosAuxiliaresPef !== "n"){TodosOsValoresPef += ", " + MeiosAuxiliaresPef}
    if(CelescPef !== "n"){TodosOsValoresPef += ", " + CelescPef}
    if(PoliciaCivilPef !== "n"){TodosOsValoresPef += ", " + PoliciaCivilPef}
    if(PoliciaMilitarPef !== "n"){TodosOsValoresPef += ", " + PoliciaMilitarPef}
    if(PoliciaPrePef !== "n"){TodosOsValoresPef += ", " + PoliciaPrePef}
    if(PoliciaPrfPef !== "n"){TodosOsValoresPef += ", " + PoliciaPrfPef}
    if(DefCivilPef !== "n"){TodosOsValoresPef += ", " + DefCivilPef}
    if(IPGPCPef !== "n"){TodosOsValoresPef += ", " + IPGPCPef}
    if(SamuPef !== "n"){TodosOsValoresPef += ", " + SamuPef}
    if(CITPef !== "n"){TodosOsValoresPef += ", " + CITPef}
    if(TextoPef !== "n"){TodosOsValoresPef += ", " + TextoPef}
    console.log(TodosOsValoresPef)
}
function UsoDeColarTamPef(){
    var TextColarTamPef = document.getElementById("text_colar_pef");
    var ColarTamCheckBoxPef = document.getElementById("uso_colar_pef");

    if(ColarTamCheckBoxPef.checked){
        TextColarTamPef.style.display = "flex"
    }else{
        TextColarTamPef.style.display = "none"
        TextColarTamPef.value = ""
    }
}
function OxigenoterapiaPef(){
    var OxigenoterapiaCheckBoxPef = document.getElementById("oxigenoterapia_pef");
    var TextOxigenoterapia = document.getElementById("text_oxigenoterapia_pef");

    if(OxigenoterapiaCheckBoxPef.checked){
        TextOxigenoterapia.style.display = "flex"
    }else{
        TextOxigenoterapia.style.display = "none"
        TextOxigenoterapia.value = ""
    }
}
function ReanimadorPef(){
    var TextReanimadorPef = document.getElementById("text_reanimador_pef");
    var ReanimadorCheckBoxPef = document.getElementById("reanimador_pef");

    if(ReanimadorCheckBoxPef.checked){
        TextReanimadorPef.style.display = "flex"
    }else{
        TextReanimadorPef.style.display = "none"
        TextReanimadorPef.value = ""
    }
}
function PoliciaPef(){
    var PoliciaCheckBoxPef = document.getElementById("policia_radio_box");
    var DivPoliciaPef = document.getElementById("policia_div_pef");
    var Policia1 = document.getElementById("policia_civil_pef");
    var Policia2 = document.getElementById("policia_militar_pef");
    var Policia3 = document.getElementById("policia_pre_pef");
    var Policia4 = document.getElementById("policia_prf_pef");

    if(PoliciaCheckBoxPef.checked){
        DivPoliciaPef.style.display = "flex"
    }else{
        DivPoliciaPef.style.display = "none"
        DivPoliciaPef.value = ""
        Policia1.checked = false
        Policia2.checked = false
        Policia3.checked = false
        Policia4.checked = false
    }
}
function OutroPef(){
    var OutroCheckBoxPef = document.getElementById("textobox_pef");
    var TextOutroPef = document.getElementById("texto_pef");

    if(OutroCheckBoxPef.checked){
        TextOutroPef.style.display = "flex"
    }else{
        TextOutroPef.style.display = "none"
        TextOutroPef.value = ""
    }
}
var DivObservacoes = document.getElementById("obsdiv");
document.addEventListener("click", function(ObservacoesImportantes) {
    if (ObservacoesImportantes.target !== DivObservacoes) {
        DivObservacoes.setAttribute("contenteditable", "false");
    }else{
        DivObservacoes.setAttribute("contenteditable", "true");
    }
});