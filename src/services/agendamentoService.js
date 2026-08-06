const agendamentoModel = require("../models/agendamentoModel");
const horarioTrabalhoModel = require("../models/horarioTrabalhoModel");
const horarioBloqueadoModel = require("../models/horarioBloqueadoModel");

class agendamentoService {
    static async getAllAgendamentos() {
        return await agendamentoModel.findAll();
    }

    static async createAgendamento(agendamento) {
        const { usuario_id, profissional_id, servico_id, status_id, data_hora_inicio, data_hora_fim } = agendamento;

        if (!usuario_id || !profissional_id || !servico_id || !status_id || !data_hora_inicio || !data_hora_fim) {
            throw new Error("Dados do agendamento incompletos.");
        }

        const inicio = this._parseDateTime(data_hora_inicio);
        const fim = this._parseDateTime(data_hora_fim);
        if (!inicio || !fim) {
            throw new Error("Data/hora inválida.");
        }

        if (fim <= inicio) {
            throw new Error("Data/hora de fim deve ser posterior à data/hora de início.");
        }

        if (inicio.toDateString() !== fim.toDateString()) {
            throw new Error("Agendamento deve começar e terminar no mesmo dia.");
        }

        const diaSemana = inicio.getDay().toString();
        const horariosTrabalho = await horarioTrabalhoModel.findByProfissionalAndDia(profissional_id, diaSemana);

        if (!horariosTrabalho || horariosTrabalho.length === 0) {
            throw new Error("Horário indisponível: profissional não trabalha nesse dia.");
        }

        const inicioAgendamentoMinutos = this._timeToMinutes(this._formatTime(inicio));
        const fimAgendamentoMinutos = this._timeToMinutes(this._formatTime(fim));

        const dentroDoTurno = horariosTrabalho.some((horario) => {
            const inicioTurno = this._timeToMinutes(horario.hora_inicio);
            const fimTurno = this._timeToMinutes(horario.hora_fim);
            return inicioAgendamentoMinutos >= inicioTurno && fimAgendamentoMinutos <= fimTurno;
        });

        if (!dentroDoTurno) {
            throw new Error("Horário indisponível: profissional não trabalha nesse horário.");
        }

        const bloqueios = await horarioBloqueadoModel.findOverlappingByProfissional(profissional_id, data_hora_inicio, data_hora_fim);
        if (bloqueios && bloqueios.length > 0) {
            throw new Error("Horário indisponível: existe bloqueio para este profissional nesse período.");
        }

        const conflitos = await agendamentoModel.findOverlappingByProfissional(profissional_id, data_hora_inicio, data_hora_fim);
        if (conflitos && conflitos.length > 0) {
            throw new Error("Horário indisponível: já existe outro agendamento nesse período para este profissional.");
        }

        return await agendamentoModel.create({
            ...agendamento,
            criado_em: agendamento.criado_em || this._formatDateTime(new Date()),
        });
    }

    static async updateAgendamento(id, agendamento) {
        const updatedRows = await agendamentoModel.update(id, agendamento);
        if (updatedRows === 0) {
            throw new Error(`Agendamento não encontrado.`);
        }
        return updatedRows;
    }

    static async deleteAgendamento(id) {
        const deletedRows = await agendamentoModel.delete(id);
        if (deletedRows === 0) {
            throw new Error(`Agendamento não encontrado.`);
        }
        return deletedRows;
    }

    static _parseDateTime(datetimeString) {
        const [datePart, timePart] = datetimeString.split(" ");
        if (!datePart || !timePart) {
            return null;
        }
        const [year, month, day] = datePart.split("-").map(Number);
        const [hours, minutes, seconds] = timePart.split(":").map(Number);
        if ([year, month, day, hours, minutes, seconds].some((value) => Number.isNaN(value))) {
            return null;
        }
        return new Date(year, month - 1, day, hours, minutes, seconds);
    }

    static _formatTime(date) {
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    }

    static _timeToMinutes(timeString) {
        const [hours, minutes] = timeString.split(":").map(Number);
        return hours * 60 + minutes;
    }

    static _formatDateTime(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
}

module.exports = agendamentoService;