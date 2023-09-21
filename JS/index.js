/*
    Paginas:
    PacienteRegistro()
    EmergenciaRegistro()
    AvaliacaoPaciente()
    TermoDeRecusa()
    FormaDeConducao()
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

console.log(EmergenciaMedicaEr)
console.log(ComMeioTransporteEr)
console.log(CausadoPorAnimaisEr)
console.log(IncendioEr)
console.log(AfogamentoEr)
console.log(DeslizamentoDesmoronamentoEr)
console.log(AgressaoEr)
console.log(QuedaAltura2mEr)
console.log(SuicidioEr)
console.log(QuedaPropriaAlturaEr)
console.log(AtropelamentoEr)
console.log(ChoqueEletricoEr)
console.log(DesabamentoEr)
console.log(DomesticoEr)
console.log(EsportivoEr)
console.log(IntoxicacaoEr)
console.log(QuedaBicicletaEr)
console.log(QuedaMotoEr)
console.log(QuedaEr)
console.log(TrabalhoEr)
console.log(TransferenciaEr)
console.log(OutroEr)

    $.ajax({
        url: 'PHP/tabela-emergencia.php',
        method: 'POST',
        data: {
            Exemplo: Exemplo,
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
};
function TermoDeRecusa(){

    var NomeTermoRecusa = $('#Nome_Recusa').val();
    var IdentidadeRecusa = $('#Identidade_Recusa').val();
    var CpfRescusa = $('#Cpf_Recusa').val();
    var AssinaturaRecusa = $('#Assinatura_Recusa').val();
    var TestemunhaRecusa = $('#Testemunha_Recusa').val();
    var DocRecusa = $('#Doc_Recusa').val();
    var TestemunhaRecusa2 = $('#Testemunha_Recusa_2').val();
    var DocRecusa2 = $('#Doc_Recusa_2').val();
    
    
    console.log(Data);

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
    console.log(FormaConducao);

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
function AvaliacaoPaciente(){
    var AberturaOcular = "";/*Input type radio*/
    if (document.getElementById("espontanea_paciente_ma").checked) {
        AberturaOcular = document.getElementById("espontanea_paciente_ma").value;
    }  else if (document.getElementById("comando_verbal_paciente_ma").checked) {
        AberturaOcular = document.getElementById("comando_verbal_paciente_ma").value;
    } else if (document.getElementById("estimulo_doloroso_paciente_ma").checked) {
        AberturaOcular = document.getElementById("estimulo_doloroso_paciente_ma").value;
    } else if (document.getElementById("nenhuma_paciente_ma_ao").checked) {
        AberturaOcular = document.getElementById("nenhuma_paciente_ma_ao").value;
    }
    console.log(AberturaOcular)
    
    /*RespostaVerbal*/
    var RespostaVerbal = "";/*Input type radio*/
    if (document.getElementById("orientado_paciente_ma").checked) {
        RespostaVerbal = document.getElementById("orientado_paciente_ma").value;
    }  else if (document.getElementById("confuso_paciente_ma").checked) {
        RespostaVerbal = document.getElementById("confuso_paciente_ma").value;
    } else if (document.getElementById("palavras_inapropriadas_paciente_ma").checked) {
        RespostaVerbal = document.getElementById("palavras_inapropriadas_paciente_ma").value;
    } else if (document.getElementById("palavras_incompreensiveis_paciente_ma").checked) {
        RespostaVerbal = document.getElementById("palavras_incompreensiveis_paciente_ma").value;
    }else if (document.getElementById("nenhuma_paciente_ma_rv").checked) {
        RespostaVerbal = document.getElementById("nenhuma_paciente_ma_rv").value;
    } 
    console.log(RespostaVerbal)

    var RespostaMotora = "";/*Input type radio*/
    if (document.getElementById("obedece_comandos_paciente_ma").checked) {
        RespostaMotora = document.getElementById("obedece_comandos_paciente_ma").value;
    } else if (document.getElementById("localiza_dor_paciente_ma").checked) {
        RespostaMotora = document.getElementById("localiza_dor_paciente_ma").value;
    }  else if (document.getElementById("movimento_retirada_paciente_ma").checked) {
        RespostaMotora = document.getElementById("movimento_retirada_paciente_ma").value;
    } else if (document.getElementById("flexao_anormal_paciente_ma").checked) {
        RespostaMotora = document.getElementById("flexao_anormal_paciente_ma").value;
    } else if (document.getElementById("extensao_anormal_paciente_ma").checked) {
        RespostaMotora = document.getElementById("extensao_anormal_paciente_ma").value;
    }else if (document.getElementById("nenhuma_paciente_ma_rm").checked) {
        RespostaMotora = document.getElementById("nenhuma_paciente_ma_rm").value;
    } 
   
    console.log(RespostaMotora)
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

function ObedeceComandos() {/*Input type radio*/
    var LocalizaDorPaciente = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPaciente.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;
}
function LocalizaDor() {/*Input type radio*/
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
function MovimentoDeRetirada() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;
    
    var LocalizaDorPaciente = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;
    
}
function FlexaoAnormal() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;
    
    var LocalizaDorPaciente = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPaciente.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;


    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;
    
}
function ExtensaoAnormal() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;
    
    var LocalizaDorPaciente = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPaciente.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;


    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;
    
}
function NenhumaRm() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;
    
    var LocalizaDorPaciente = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPaciente.checked = false;

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
var AberturaOcular = "";/*Input type radio*/
if (document.getElementById("espontanea_paciente_ma").checked) {
    AberturaOcular = document.getElementById("espontanea_paciente_ma").value;
}  else if (document.getElementById("comando_verbal_paciente_ma").checked) {
    AberturaOcular = document.getElementById("comando_verbal_paciente_ma").value;
} else if (document.getElementById("estimulo_doloroso_paciente_ma").checked) {
    AberturaOcular = document.getElementById("estimulo_doloroso_paciente_ma").value;
} else if (document.getElementById("nenhuma_paciente_ma_ao").checked) {
    AberturaOcular = document.getElementById("nenhuma_paciente_ma_ao").value;
}
console.log(AberturaOcular)

/*RespostaVerbal*/
var RespostaVerbal = "";/*Input type radio*/
if (document.getElementById("orientado_paciente_ma").checked) {
    RespostaVerbal = document.getElementById("orientado_paciente_ma").value;
}  else if (document.getElementById("confuso_paciente_ma").checked) {
    RespostaVerbal = document.getElementById("confuso_paciente_ma").value;
} else if (document.getElementById("palavras_inapropriadas_paciente_ma").checked) {
    RespostaVerbal = document.getElementById("palavras_inapropriadas_paciente_ma").value;
} else if (document.getElementById("palavras_incompreensiveis_paciente_ma").checked) {
    RespostaVerbal = document.getElementById("palavras_incompreensiveis_paciente_ma").value;
}else if (document.getElementById("nenhuma_paciente_ma_rv").checked) {
    RespostaVerbal = document.getElementById("nenhuma_paciente_ma_rv").value;
} 
console.log(RespostaVerbal)

var RespostaMotora = "";/*Input type radio*/
if (document.getElementById("obedece_comandos_paciente_ma").checked) {
    RespostaMotora = document.getElementById("obedece_comandos_paciente_ma").value;
} else if (document.getElementById("localiza_dor_paciente_ma").checked) {
    RespostaMotora = document.getElementById("localiza_dor_paciente_ma").value;
}  else if (document.getElementById("movimento_retirada_paciente_ma").checked) {
    RespostaMotora = document.getElementById("movimento_retirada_paciente_ma").value;
} else if (document.getElementById("flexao_anormal_paciente_ma").checked) {
    RespostaMotora = document.getElementById("flexao_anormal_paciente_ma").value;
} else if (document.getElementById("extensao_anormal_paciente_ma").checked) {
    RespostaMotora = document.getElementById("extensao_anormal_paciente_ma").value;
}else if (document.getElementById("nenhuma_paciente_ma_rm").checked) {
    RespostaMotora = document.getElementById("nenhuma_paciente_ma_rm").value;
} 

console.log(RespostaMotora)
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
     
   var ObedeceComandosMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
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
   var ObedeceComandosMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
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
   var ObedeceComandosMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
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
   var ObedeceComandosMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
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
   var ObedeceComandosMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
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
    menorque5paciente.style.display = "none";
    maiorque5paciente.style.display = "flex";
}
function ocultarDivMa() {
    var maiorque5paciente = document.getElementById("maiorque5paciente");
    var menorque5paciente = document.getElementById("menorque5paciente");
    menorque5paciente.style.display = "flex";
    maiorque5paciente.style.display = "none";
}    