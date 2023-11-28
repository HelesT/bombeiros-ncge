function DadosPDF(valor_id_ficha){
    var id = valor_id_ficha;
    console.log(id)

    new Vue({
      el: "#app",
      vuetify: new Vuetify(),
      data() {
        return {
          additionalInfo: ""
        };
      },
      created() {
        this.obterDados();
      },
      methods: {
        obterDados() {
          console.log(id);
          $.ajax({
             type: 'GET',
             url: 'PHP-PDF/obterDados.php',
             dataType: 'json',
             data: {
                id: id
             },
             success: (data) => {
                data.forEach((item) => {
                  this.additionalInfo += "Paciente" + "\n";
                  this.additionalInfo += "" + "\n";
                   this.additionalInfo += "Data: " + item.data_paciente + "\n";
                   this.additionalInfo += "RG/CPF: " + item.rg_cpf_paciente + "\n";
                   this.additionalInfo += "Idade: " + item.idade_paciente + "\n";
                   this.additionalInfo += "Nome: " + item.nome_paciente + "\n";
                   this.additionalInfo += "Sexo: " + item.sexo_paciente + "\n";
                   this.additionalInfo += "Nome do Hospital: " + item.nome_hospital_paciente + "\n";
                   this.additionalInfo += "Fone Paciente: " + item.fone_paciente + "\n";
                   this.additionalInfo += "Acompanhante: " + item.acompanhante_paciente	 + "\n";
                   this.additionalInfo += "Idade do Acompanhante: " + item.idade_acompanhante_paciente + "\n";
                   this.additionalInfo += "Local do acidente: " + item.local_ocorrencia_paciente + "\n";
                   this.additionalInfo += "Numero Usb: " + item.n_usb_paciente	 + "\n";
                   this.additionalInfo += "Codigo Ur: " + item.cod_ur_paciente + "\n";
                   this.additionalInfo += "Numero da Ocorrência: " + item.n_ocorr_paciente + "\n";
                   this.additionalInfo += "Código ps: " + item.cod_ps_paciente	 + "\n";
                   this.additionalInfo += "Desp: " + item.desp_paciente	+ "\n";
                   this.additionalInfo += "H.CH: " + item.h_ch_paciente	+ "\n";
                   this.additionalInfo += "Km final: " + item.km_final_paciente	+ "\n";
                   this.additionalInfo += "Código sia/sus: " + item.cod_sia_sus_paciente	 + "\n";
                  //  this.additionalInfo += "" + item.exemplo + "\n";
                  $.ajax({
                    type: 'GET',
                    url: 'PHP-PDF/emergencias.php',
                    dataType: 'json',
                    data: {
                       id: id
                    },
                    success: (data) => {
                       data.forEach((item) => {
                        this.additionalInfo += "-------" + "\n";
                        this.additionalInfo += "Emergências" + "\n";
                        this.additionalInfo += "" + "\n";
                          this.additionalInfo += "Emergencias: " + item.tipo_emergencia + "\n";
                         //  this.additionalInfo += "" + item.exemplo + "\n";
                         $.ajax({
                            type: 'GET',
                            url: 'PHP-PDF/forma_conducao.php',
                            dataType: 'json',
                            data: {
                               id: id
                            },
                            success: (data) => {
                               data.forEach((item) => {
                                 this.additionalInfo += "-------" + "\n";
                                 this.additionalInfo += "Forma de Condução" + "\n";
                                 this.additionalInfo += "" + "\n";
                                  this.additionalInfo += "Condução: " + item.conducao + "\n";
                                  this.additionalInfo += "A vitima era: " + item.forma_conducao + "\n";
                                 //  this.additionalInfo += "" + item.exemplo + "\n";
                                 $.ajax({
                                  type: 'GET',
                                  url: 'PHP-PDF/decisao_transporte.php',
                                  dataType: 'json',
                                  data: {
                                     id: id
                                  },
                                  success: (data) => {
                                     data.forEach((item) => {
                                       this.additionalInfo += "-------" + "\n";
                                       this.additionalInfo += "Decisão de Transporte" + "\n";
                                       this.additionalInfo += "" + "\n";
                                        this.additionalInfo += "MDT: " + item.MDT + "\n";
                                        this.additionalInfo += "S1DT: " + item.S1DT + "\n";
                                        this.additionalInfo += "S2DT: " + item.S2DT + "\n";
                                        this.additionalInfo += "S3DT: " + item.S3DT + "\n";
                                        this.additionalInfo += "Demante DT: " + item.DemanteDT + "\n";
                                        this.additionalInfo += "Decisão De Transporte: " + item.DecisaoDeTransporteDt + "\n";
                                       //  this.additionalInfo += "" + item.exemplo + "\n";
                                       $.ajax({
                                        type: 'GET',
                                        url: 'PHP-PDF/problemas_suspeitos.php',
                                        dataType: 'json',
                                        data: {
                                           id: id
                                        },
                                        success: (data) => {
                                           data.forEach((item) => {
                                             this.additionalInfo += "-------" + "\n";
                                             this.additionalInfo += "Problemas Suspeitos" + "\n";
                                             this.additionalInfo += "" + "\n";
                                              this.additionalInfo += "Psiquiatrico: " + item.Psiquiatrico + "\n";
                                              this.additionalInfo += "Respiratório: " + item.Respiratorio + "\n";
                                              this.additionalInfo += "Diabete: " + item.Diabete + "\n";
                                              this.additionalInfo += "Obsterico: " + item.Obsterico + "\n";
                                              this.additionalInfo += "Transporte: " + item.Transporte + "\n";
                                              this.additionalInfo += "Outro: " + item.Outro + "\n";
                                             //  this.additionalInfo += "" + item.exemplo + "\n";
                                             $.ajax({
                                              type: 'GET',
                                              url: 'PHP-PDF/sinais_vitais.php',
                                              dataType: 'json',
                                              data: {
                                                 id: id
                                              },
                                              success: (data) => {
                                                 data.forEach((item) => {
                                                   this.additionalInfo += "-------" + "\n";
                                                   this.additionalInfo += "Sinais Vitais" + "\n";
                                                   this.additionalInfo += "" + "\n";
                                                    this.additionalInfo += "Pressão Arterial: " + item.PressaoArterial + "\n";
                                                    this.additionalInfo += "Pulso: " + item.Pulso + "\n";
                                                    this.additionalInfo += "SegSv: " + item.SegSv + "\n";
                                                    this.additionalInfo += "Respiração: " + item.Respiracao + "\n";
                                                    this.additionalInfo += "Temperatura: " + item.Temperatura + "\n";
                                                    this.additionalInfo += "Anormal: " + item.Anormal + "\n";
                                                   //  this.additionalInfo += "" + item.exemplo + "\n";
                                                   $.ajax({
                                                    type: 'GET',
                                                    url: 'PHP-PDF/localizacao_traumas.php',
                                                    dataType: 'json',
                                                    data: {
                                                       id: id
                                                    },
                                                    success: (data) => {
                                                       data.forEach((item) => {
                                                         this.additionalInfo += "-------" + "\n";
                                                         this.additionalInfo += "Localização dos Traumas" + "\n";
                                                         this.additionalInfo += "" + "\n";
                                                          this.additionalInfo += "Ferimentos: " + item.texto_trauma + "\n";
                                                          this.additionalInfo += "Queimadura: " + item.queimadura + "\n";
                                                          this.additionalInfo += "SegSv: " + item.SegSv + "\n";
                                                          //this.additionalInfo += "Trauma:" + item.trauma_img + "\n";
                                                         //  this.additionalInfo += "" + item.exemplo + "\n";
                                                         $.ajax({
                                                          type: 'GET',
                                                          url: 'PHP-PDF/objetos_recolhidos.php',
                                                          dataType: 'json',
                                                          data: {
                                                             id: id
                                                          },
                                                          success: (data) => {
                                                             data.forEach((item) => {
                                                               this.additionalInfo += "-------" + "\n";
                                                               this.additionalInfo += "Objeto Recolhidos" + "\n";
                                                               this.additionalInfo += "" + "\n";
                                                                this.additionalInfo += "Objeto Recolhido: " + item.TextoDentroObj + "\n";
                                                                
                                                               //  this.additionalInfo += "" + item.exemplo + "\n";
                                                               $.ajax({
                                                                type: 'GET',
                                                                url: 'PHP-PDF/sinais_e_sintomas.php',
                                                                dataType: 'json',
                                                                data: {
                                                                   id: id
                                                                },
                                                                success: (data) => {
                                                                   data.forEach((item) => {
                                                                     this.additionalInfo += "-------" + "\n";
                                                                     this.additionalInfo += "Sinais e Sintomas" + "\n";
                                                                     this.additionalInfo += "" + "\n";
                                                                      this.additionalInfo += "Sinais e Sintomas: " + item.TodosOsValoresSeS + "\n";
                                                                      
                                                                     //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                     $.ajax({
                                                                      type: 'GET',
                                                                      url: 'PHP-PDF/procedimentos_efetuados.php',
                                                                      dataType: 'json',
                                                                      data: {
                                                                         id: id
                                                                      },
                                                                      success: (data) => {
                                                                         data.forEach((item) => {
                                                                           this.additionalInfo += "-------" + "\n";
                                                                           this.additionalInfo += "Procedimentos Efetuados" + "\n";
                                                                           this.additionalInfo += "" + "\n";
                                                                            this.additionalInfo += "Procedimentos Efetuados: " + item.TodosOsValoresPef + "\n";
                                                                            
                                                                           //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                           $.ajax({
                                                                            type: 'GET',
                                                                            url: 'PHP-PDF/material_utilizados_descartavel.php',
                                                                            dataType: 'json',
                                                                            data: {
                                                                               id: id
                                                                            },
                                                                            success: (data) => {
                                                                               data.forEach((item) => {
                                                                                 this.additionalInfo += "-------" + "\n";
                                                                                 this.additionalInfo += "Materiais Utilizados Descartável" + "\n";
                                                                                 this.additionalInfo += "" + "\n";
                                                                                  this.additionalInfo += "Atadura: " + item.Atadura1 + "\n";
                                                                                  this.additionalInfo += "Catéter TP. óculos: " + item.CateterTpOculos + "\n";
                                                                                  this.additionalInfo += "Compressa Comum: " + item.CompressaComum + "\n";
                                                                                  this.additionalInfo += "Kit's: " + item.Kit1 + "\n";
                                                                                  this.additionalInfo += "Luvas Descartáveis: " + item.LuvasDescartaveis + "\n";
                                                                                  this.additionalInfo += "Mascaras Descartáveis: " + item.MascarasDesc + "\n";
                                                                                  this.additionalInfo += "Manta Alumiada: " + item.MantaAlumiada + "\n";
                                                                                  this.additionalInfo += "Pás Do Dea: " + item.PasDoDea + "\n";
                                                                                  this.additionalInfo += "Sonda De Aspiração: " + item.SondaDeAspiracao + "\n";
                                                                                  this.additionalInfo += "Soro Fisiológico: " + item.SoroFisiologico + "\n";
                                                                                  this.additionalInfo += "Talas: " + item.Tala1 + "\n";
                                                                                  this.additionalInfo += "Outro: " + item.OutroText + "\n";
                                                                                 //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                 $.ajax({
                                                                                  type: 'GET',
                                                                                  url: 'PHP-PDF/materiais_utilizados_deixados_hospital.php',
                                                                                  dataType: 'json',
                                                                                  data: {
                                                                                     id: id
                                                                                  },
                                                                                  success: (data) => {
                                                                                     data.forEach((item) => {
                                                                                       this.additionalInfo += "-------" + "\n";
                                                                                       this.additionalInfo += "Materiais Utilizados Deixados Hospital" + "\n";
                                                                                       this.additionalInfo += "" + "\n";
                                                                                        this.additionalInfo += "Base Estabilizador: " + item.BaseEstabilizador + "\n";
                                                                                        this.additionalInfo += "Colar1: " + item.Colar1 + "\n";
                                                                                        this.additionalInfo += "Colar2: " + item.Colar2 + "\n";
                                                                                        this.additionalInfo += "Kit's: " + item.Kit1 + "\n";
                                                                                        this.additionalInfo += "Coxins Estabiliza: " + item.CoxinsStab + "\n";
                                                                                        this.additionalInfo += "KED: " + item.KED + "\n";
                                                                                        this.additionalInfo += "Maca Rigida: " + item.MacaRigida + "\n";
                                                                                        this.additionalInfo += "Tirante Aranha: " + item.TiranteAranha + "\n";
                                                                                        this.additionalInfo += "Sonda Aspiração: " + item.SondaAspiracao + "\n";
                                                                                        this.additionalInfo += "Cânula: " + item.Canula + "\n";
                                                                                        this.additionalInfo += "Outro: " + item.OutroMUB + "\n";
                                                                                       //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                       $.ajax({
                                                                                        type: 'GET',
                                                                                        url: 'PHP-PDF/anamnese.php',
                                                                                        dataType: 'json',
                                                                                        data: {
                                                                                           id: id
                                                                                        },
                                                                                        success: (data) => {
                                                                                           data.forEach((item) => {
                                                                                             this.additionalInfo += "-------" + "\n";
                                                                                             this.additionalInfo += "Anamnese" + "\n";
                                                                                             this.additionalInfo += "" + "\n";
                                                                                              this.additionalInfo += "O que aconteceu(sinais e sintomas): " + item.ocorrido_anamnese + "\n";
                                                                                              this.additionalInfo += "Aconteceu outras vezes?" + item.ocorrencia_anamnese + "\n";
                                                                                              this.additionalInfo += "A quanto tempo isso aconteceu? " + item.aconteceu_anamnese + "\n";
                                                                                              this.additionalInfo += "Possui algum problema de saúde? " + item.problema_saude_anamnese + "\n";
                                                                                              this.additionalInfo += "Faz uso de medicação? " + item.medicamento_anamnese + "\n";
                                                                                              this.additionalInfo += "Alérgico a algo? " + item.alergia_anamnese + "\n";
                                                                                              this.additionalInfo += "Ingeriu alimento ou liquido em 6h? " + item.liquido_anamnese + "\n";
                                                                                             //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                             $.ajax({
                                                                                                type: 'GET',
                                                                                                url: 'PHP-PDF/anamnese_gestacional.php',
                                                                                                dataType: 'json',
                                                                                                data: {
                                                                                                   id: id
                                                                                                },
                                                                                                success: (data) => {
                                                                                                   data.forEach((item) => {
                                                                                                      this.additionalInfo += "-------" + "\n";
                                                                                                      this.additionalInfo += "Anamnese Gestacional" + "\n";
                                                                                                      this.additionalInfo += "" + "\n";
                                                                                                      this.additionalInfo += "Periodo de gestação: " + item.periodo_gestacao + "\n";
                                                                                                      this.additionalInfo += "Fez pré-natal?" + item.pre_natal + "\n";
                                                                                                      this.additionalInfo += "Nome do médico" + item.nome_medico + "\n";
                                                                                                      this.additionalInfo += "Existe possibilidade de complicações?" + item.complicacoes + "\n";
                                                                                                      this.additionalInfo += "É o primeiro filho?" + item.filhos + "\n";
                                                                                                      this.additionalInfo += "Contrações Duração:" + item.contracao_duracao + "\n";
                                                                                                      this.additionalInfo += "Contrações Intervalo:" + item.contracao_intervalo + "\n";
                                                                                                      this.additionalInfo += "Sente pressão na região do quadril ou vontade de evacuar?" + item.evacuacao + "\n";
                                                                                                      this.additionalInfo += "Já houve ruptura da bolsa?" + item.ruptura_bolsa + "\n";
                                                                                                      this.additionalInfo += "Foi feito inspeção visual?" + item.inspecao_visual + "\n";
                                                                                                      this.additionalInfo += "Parto realizado?" + item.parto_realizado + "\n";
                                                                                                      this.additionalInfo += "Hora do nascimento:" + item.hora_nascimento + "\n";
                                                                                                      this.additionalInfo += "Sexo do bebê:" + item.sexo_bebe + "\n";
                                                                                                      this.additionalInfo += "Nome do bebê:" + item.nome_bebe + "\n";
                                                                                                     //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                                   });
                                                                                                },
                                                                                                error: function (xhr, status, error) {
                                                                                                   console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                                                }
                                                                                             });
                                                                                             $.ajax({
                                                                                              type: 'GET',
                                                                                              url: 'PHP-PDF/termo_recusa.php',
                                                                                              dataType: 'json',
                                                                                              data: {
                                                                                                 id: id
                                                                                              },
                                                                                              success: (data) => {
                                                                                                 data.forEach((item) => {
                                                                                                   this.additionalInfo += "-------" + "\n";
                                                                                                   this.additionalInfo += "TERMO DE RECUSA DE ATENDIMENTO E/OU TRANSPORTE" + "\n";
                                                                                                   this.additionalInfo += "" + "\n";
                                                                                                    this.additionalInfo += "Termo Recusa: " + item.termo_recusa + "\n";
                                                                                                    //this.additionalInfo += "ASS:" + item.assinatura_recusa + "\n";
                                                                                                    this.additionalInfo += "Testemunha: " + item.testemunha_recusa + "\n";
                                                                                                    this.additionalInfo += "Doc:" + item.doc_recusa + "\n";
                                                                                                    this.additionalInfo += "Testemunha(2): " + item.testemunha_recusa2 + "\n";
                                                                                                    this.additionalInfo += "Doc(2):" + item.doc_recusa2 + "\n";
                                                                                                   //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                                   $.ajax({
                                                                                                    type: 'GET',
                                                                                                    url: 'PHP-PDF/observacoes_importantes.php',
                                                                                                    dataType: 'json',
                                                                                                    data: {
                                                                                                       id: id
                                                                                                    },
                                                                                                    success: (data) => {
                                                                                                       data.forEach((item) => {
                                                                                                         this.additionalInfo += "-------" + "\n";
                                                                                                         this.additionalInfo += "Observações Importantes" + "\n";
                                                                                                         this.additionalInfo += "" + "\n";
                                                                                                          this.additionalInfo += "Observações: " + item.observacoes_importantes + "\n";
                                                                                                         //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                                         $.ajax({
                                                                                                          type: 'GET',
                                                                                                          url: 'PHP-PDF/avaliacao_cinematica.php',
                                                                                                          dataType: 'json',
                                                                                                          data: {
                                                                                                             id: id
                                                                                                          },
                                                                                                          success: (data) => {
                                                                                                             data.forEach((item) => {
                                                                                                               this.additionalInfo += "-------" + "\n";
                                                                                                               this.additionalInfo += "Avaliação Cinemática" + "\n";
                                                                                                               this.additionalInfo += "" + "\n";
                                                                                                                this.additionalInfo += "Distúrbio de comportamento: " + item.DisturbioDeComportamento + "\n";
                                                                                                                this.additionalInfo += "Encontrado de capacete: " + item.EncontradoDeCapacete + "\n";
                                                                                                                this.additionalInfo += "Encontrado de cinto: " + item.EncontradoDeCinto + "\n";
                                                                                                                this.additionalInfo += "Para-brisas avariado: " + item.ParaBrisasAvariado + "\n";
                                                                                                                this.additionalInfo += "Caminhando na cena: " + item.CaminhandoNaCena + "\n";
                                                                                                                this.additionalInfo += "Painel avariado: " + item.PainelAvariado + "\n";
                                                                                                                this.additionalInfo += "Volante torcido: " + item.VolanteTorcido + "\n";
                                                                                                               //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                                               
                                                                                                             });
                                                                                                          },
                                                                                                          error: function (xhr, status, error) {
                                                                                                             console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                                                          }
                                                                                                       });
                                                                                                       });
                                                                                                    },
                                                                                                    error: function (xhr, status, error) {
                                                                                                       console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                                                    }
                                                                                                 });
                                                                                                 });
                                                                                              },
                                                                                              error: function (xhr, status, error) {
                                                                                                 console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                                              }
                                                                                           });
                                                                                           });
                                                                                        },
                                                                                        error: function (xhr, status, error) {
                                                                                           console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                                        }
                                                                                     });
                                                                                     });
                                                                                  },
                                                                                  error: function (xhr, status, error) {
                                                                                     console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                                  }
                                                                               });
                                                                               });
                                                                            },
                                                                            error: function (xhr, status, error) {
                                                                               console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                            }
                                                                         });
                                                                         });
                                                                      },
                                                                      error: function (xhr, status, error) {
                                                                         console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                      }
                                                                   });
                                                                   });
                                                                },
                                                                error: function (xhr, status, error) {
                                                                   console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                }
                                                             });
                                                             });
                                                          },
                                                          error: function (xhr, status, error) {
                                                             console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                          }
                                                       });
                                                       });
                                                    },
                                                    error: function (xhr, status, error) {
                                                       console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                    }
                                                 });
                                                 });
                                              },
                                              error: function (xhr, status, error) {
                                                 console.error("Erro na requisição AJAX: " + status + " - " + error);
                                              }
                                           });
                                           });
                                        },
                                        error: function (xhr, status, error) {
                                           console.error("Erro na requisição AJAX: " + status + " - " + error);
                                        }
                                     });
                                     });
                                  },
                                  error: function (xhr, status, error) {
                                     console.error("Erro na requisição AJAX: " + status + " - " + error);
                                  }
                               });
                               });
                            },
                            error: function (xhr, status, error) {
                               console.error("Erro na requisição AJAX: " + status + " - " + error);
                            }
                         });
                         $.ajax({
                          type: 'GET',
                          url: 'PHP-PDF/avaliacao_paciente_maior.php',
                          dataType: 'json',
                          data: {
                             id: id
                          },
                          success: (data) => {
                             data.forEach((item) => {
                              this.additionalInfo += "-------" + "\n";
                              this.additionalInfo += "Avaliação Do Paciente Maior" + "\n";
                              this.additionalInfo += "" + "\n";
                                this.additionalInfo += "Abertura Ocular(Maior): " + item.AberturaOcular + "\n";
                                this.additionalInfo += "Resposta Verbal(Maior): " + item.RespostaVerbal + "\n";
                                this.additionalInfo += "Resposta Motora(Maior): " + item.RespostaMotora + "\n";
                                this.additionalInfo += "Valor: " + item.valor_gcs + "\n";
                                //  this.additionalInfo += "" + item.exemplo + "\n";
                             });
                          },
                          error: function (xhr, status, error) {
                             console.error("Erro na requisição AJAX: " + status + " - " + error);
                          }
                       });
                       });
                       $.ajax({
                         type: 'GET',
                         url: 'PHP-PDF/avaliacao_paciente_menor.php',
                         dataType: 'json',
                         data: {
                            id: id
                         },
                         success: (data) => {
                            data.forEach((item) => {
                              this.additionalInfo += "-------" + "\n";
                              this.additionalInfo += "Avaliação Do Paciente Menor" + "\n";
                              this.additionalInfo += "" + "\n";
                               this.additionalInfo += "Abertura Ocular(Menor): " + item.AberturaOcularMe + "\n";
                               this.additionalInfo += "Resposta Verbal(Menor): " + item.RespostaVerbalMe + "\n";
                               this.additionalInfo += "Resposta Motora(Menor): " + item.RespostaMotoraMe + "\n";
                               this.additionalInfo += "Valor: " + item.valor_gcs + "\n";
                              //  this.additionalInfo += "" + item.exemplo + "\n";
                             
                            });
                         },
                         error: function (xhr, status, error) {
                            console.error("Erro na requisição AJAX: " + status + " - " + error);
                         }
                      });
                    },
                    error: function (xhr, status, error) {
                       console.error("Erro na requisição AJAX: " + status + " - " + error);
                    }
                 });
                });
             },
             error: function (xhr, status, error) {
                console.error("Erro na requisição AJAX: " + status + " - " + error);
             } 
          });
          
          setTimeout(() => {
             this.generatePDF();
           }, 3000);
           
       },
       
    
       
    
        generatePDF() {  
          const doc = new jsPDF({
            orientation: "portrait",
            unit: "in",
            format: "letter",
          });
    
          // Divide o conteúdo em partes para acomodar em várias páginas
          const lines = this.additionalInfo.split('\n');
          const lineHeight = 12 / 72; // Altura de linha em polegadas
          const pageHeight = 11; // Altura da página em polegadas
          let y = 1; // Posição Y inicial
    
          lines.forEach(line => {
            // Verifica se a próxima linha cabe na página atual
            if (y + lineHeight > pageHeight) {
              // Adiciona uma nova página
              doc.addPage();
              y = 1;
            }
    
            // Adiciona a linha ao PDF
            doc.setFontSize(12);
            doc.text(line, 0.5, y);
            y += lineHeight;
          });
    
          // Salva o arquivo PDF com o nome 'Ficha_de_Bombeiro.pdf'
          doc.save("Ficha_de_Bombeiro.pdf");
        },
      },
    });
    }
    //Definir Tamanho e Estilo da Fonte:
    //doc.setFontSize(16); // Define o tamanho da fonte para 16 pontos
    //doc.setFont("times", "italic"); // Define a fonte para Times Italic
    //doc.setFontType("bold"); // Define o estilo da fonte para negrito
    
    //Definir Cor do Texto:
    //doc.setTextColor(255, 0, 0); // Define a cor do texto para vermelho (RGB)
    
    //Adicionar Texto ao PDF:
    //doc.text("Texto do PDF", 10, 20); // Adiciona texto na posição (10, 20)
    
    //Adicionar Retângulos e Formas:
    //doc.rect(10, 30, 50, 20); // Adiciona um retângulo na posição (10, 30) com largura 50 e altura 20
    //doc.triangle(60, 30, 80, 30, 70, 50, "FD"); // Adiciona um triângulo
    //doc.circle(100, 40, 10); // Adiciona um círculo na posição (100, 40) com raio 10
    
    //Adicionar Imagens ao PDF:
    //const imgData = "data:image/jpeg;base64,/9j/4AAQSk..."; // URL da imagem ou dados base64
    //doc.addImage(imgData, "JPEG", 10, 10, 50, 50); // Adiciona uma imagem na posição (10, 10) com largura 50 e altura 50
    
    //Adicionar Quebras de Página:
    //doc.addPage(); // Adiciona uma nova página ao PDF
    
    //Adicionar Links:
    //doc.textWithLink("Clique aqui", 10, 20, { url: "https://www.exemplo.com" }); // Adiciona um link na posição (10, 20)
    
    //Definir Cor de Fundo:
    //doc.setFillColor(200, 220, 255); // Define a cor de fundo para azul claro (RGB)
    //doc.rect(10, 30, 50, 20, "F"); // Adiciona um retângulo com cor de fundo
    
    //-------------------------------------------------------------------------------------------------------------------------------------
    /*
    Certamente, para gerar um PDF com base nas informações inseridas no site, você pode usar a mesma abordagem,
    mas agora integrando a geração do PDF com o evento final do seu site. Aqui está um exemplo de como você
    pode fazer isso usando Vue.js:
    
    HTML:
    No seu arquivo HTML, adicione um botão ou qualquer elemento que você queira usar para acionar a geração do PDF.
    
    <div id="app">
      <!-- Conteúdo do seu site aqui -->
      <button @click="generatePDF">Gerar PDF</button>
    </div>
    //-------------------------------------------------------------------------------------------------------------------------------------
    Vue.js:
    Agora, no seu código Vue.js, adicione o método generatePDF para criar o PDF com base nas informações do site.
    Suponha que você tenha um objeto paciente com as informações do paciente, você pode incluir essas informações no PDF.
    
    new Vue({
      el: "#app",
      vuetify: new Vuetify(),
      data() {
        return {
          paciente: {
            nome: "Nome do Paciente",
            sexo: "Masculino",
            // Outras informações do paciente aqui
          },
        };
      },
      methods: {
        generatePDF() {
          const doc = new jsPDF();
          
          // Adiciona informações do paciente ao PDF
          doc.setFontSize(12);
          doc.text(`Nome do Paciente: ${this.paciente.nome}`, 10, 10);
          doc.text(`Sexo: ${this.paciente.sexo}`, 10, 20);
          
          // Adiciona outras informações ao PDF conforme necessário
          
          // Salva o arquivo PDF com o nome 'Ficha_de_Paciente.pdf'
          doc.save("Ficha_de_Paciente.pdf");
        },
      },
    });
    
    Neste exemplo, quando o botão "Gerar PDF" é clicado, ele chama o método generatePDF, que cria um novo PDF usando jsPDF
    e adiciona as informações do paciente ao PDF. Você pode adicionar outras informações da mesma forma.
    
    Certifique-se de ajustar o conteúdo, o estilo e a formatação do PDF de acordo com suas necessidades específicas.
    Além disso, você pode integrar este método com o evento final do seu site para garantir que o PDF seja gerado quando
    o usuário concluir o processo no site.
    */
    
    // imagem no pdf através do mediumblob
    // ----------------------------------------------------
    // 1.Recuperar a imagem do banco de dados
    // Suponha que você tenha um método em seu servidor que recupere os dados da imagem do banco de dados. Por exemplo, em Node.js usando o MySQL:
    // const mysql = require('mysql');
    // const connection = mysql.createConnection({
    //   host: 'seu-host',
    //   user: 'seu-usuario',
    //   password: 'sua-senha',
    //   database: 'sua-base-de-dados'
    // });
    
    // connection.connect();
    
    // const query = 'SELECT imagem FROM tabela WHERE id = ?';
    // const id = 1; // Substitua isso pelo ID da imagem que você deseja recuperar
    
    // connection.query(query, [id], (error, results) => {
    //   if (error) throw error;
    
    //   const imagemBlob = results[0].imagem; // Os dados da imagem em formato de buffer
    //   // Agora você pode passar `imagemBlob` para o frontend ou convertê-lo em uma URL de dados
    // });
    
    // connection.end();
    // --------------------------------------
    // 2.Converter o blob em uma URL de dados:
    // Você pode usar a função`btoa()`para converter os dados do blob em uma string base64 e, em seguida, criar uma URL de dados:
    // const blobToDataURL = (blob) => {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => resolve(reader.result);
    //     reader.onerror = reject;
    //     reader.readAsDataURL(blob);
    //   });
    // };
    
    // // Suponha que `imagemBlob` seja o seu buffer de imagem recuperado do banco de dados
    // blobToDataURL(imagemBlob).then((dataURL) => {
    //   // `dataURL` agora contém a URL de dados da imagem que você pode usar no frontend
    // });
    // ------------------------------
    // 3.Inserir a imagem no PDF:
    // Se você estiver usando uma biblioteca como jsPDF para gerar o PDF, você pode adicionar a imagem usando a URL de dados:
    // const doc = new jsPDF();
    
    // // Suponha que `dataURL` seja a URL de dados da imagem que você recuperou anteriormente
    // const img = new Image();
    // img.onload = () => {
    //   doc.addImage(img, 'JPEG', 10, 10, 50, 50); // Adiciona a imagem ao PDF
    //   doc.save('arquivo.pdf');
    // };
    // img.src = dataURL;