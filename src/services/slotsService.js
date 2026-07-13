const slotsModel = require("../models/slotsModel");
const horarioTrabalhoModel = require("../models/horarioTrabalhoModel");
const horarioBloqueadoModel = require("../models/horarioBloqueadoModel");
const agendamentoModel = require("../models/agendamentoModel");
const servicoModel = require("../models/servicoModel");

class slotsService {
    static async consultarDisponibilidade(profissional_id, data) {
        // Verifica se o profissional tem horários de trabalho definidos para o dia da semana da data fornecida
        const diaSemana = new Date(data).getDay(); // 0 (Domingo) a 6 (Sábado)
        const horariosTrabalho = await horarioTrabalhoModel.findByProfissionalAndDia(profissional_id, diaSemana);
        if (!horariosTrabalho || horariosTrabalho.length === 0) {
            throw new Error(`Profissional não trabalha nesse dia.`);
        }

        const inicioMinutos = this._horaParaMinutos(horarioTrabalho.hora_inicio);
        const fimMinutos = this._horaParaMinutos(horarioTrabalho.hora_fim);

        if (inicioMinutos >= fimMinutos) {
            throw new Error(`Horário de trabalho inválido.`);
        }

        const dataInicio = new Date(data);
        const dataFim = new Date(data);
        const agendamentos = await agendamentoModel.findByProfissionalAndData(profissional_id, dataInicio, dataFim);

        const horariosBloqueados = await horarioBloqueadoModel.findByProfissionalAndData(profissional_id, dataInicio, dataFim);

        const converterMinutos = agendamentos.map(agendamento => ({
            inicio: new Date(agendamento.data_hora_inicio).getTime() / 60000, // Convertendo para minutos
            fim: new Date(agendamento.data_hora_fim).getTime() / 60000 // Convertendo para minutos
        }));

        const bloqueados = await horariosBloqueadoModel.findByProfissionalAndData(profissional_id, dataInicio, dataFim);
        const bloqueadosMinutos = bloqueados.map(bloqueado => ({
            inicio: new Date(bloqueado.data_hora_inicio).getTime() / 60000, // Convertendo para minutos
            fim: new Date(bloqueado.data_hora_fim).getTime() / 60000 // Convertendo para minutos
        }));

        const todosBloqueados = [...converterMinutos, ...bloqueadosMinutos];

        const slots = [];
        let current = inicioMinutos;
        while (current + 30 <= fimMinutos) { // Supondo que cada slot tenha 30 minutos
            const slotInicio = current;
            const slotFim = current + 30;
            // Verificar se o slot está disponível
            let isAvailable = true;
            for (const blocked of todosBloqueados) {
                if (slotInicio < blocked.fim && slotFim > blocked.inicio) {
                    isAvailable = false;
                    break;
                }
            }
            if (isAvailable) {
                slots.push({ inicio: slotInicio, fim: slotFim });
            }
            current = slotFim;
        }
        return slots;
    }

    static _horaParaMinutos(hora) {
        const [h, m] = hora.split(":").map(Number);
        return h * 60 + m;
    }

    static _minutosParaHora(minutos) {
        const h = Math.floor(minutos / 60);
        const m = minutos % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    }

    static _datetimeParaMinutos(datetime) {
        const date = new Date(datetime);
        return date.getHours() * 60 + date.getMinutes();
    }
}

module.exports = slotsService;