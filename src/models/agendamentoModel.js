const db = require("../config/database");

class agendamentoModel {
    static async findAll() {
        const [rows] = await db.query("SELECT * FROM tb_agendamentos");
        return rows;
    }

    static async findById(id) {
        const [rows] = await db.query("SELECT * FROM tb_agendamentos WHERE id = ?", [id]);
        return rows[0];
    }

    static async findByNome(nomeArea) {
        const [rows] = await db.query("SELECT * FROM tb_areas WHERE nomeArea = ?", [nomeArea]);
        return rows[0];
    }

    static async create(agendamento) {
        const { usuario_id, profissional_id, servico_id, status_id, data_hora_inicio, data_hora_fim, criado_em } = agendamento;
        const [result] = await db.query("INSERT INTO tb_agendamentos (usuario_id, profissional_id, servico_id, status_id, data_hora_inicio, data_hora_fim, criado_em) VALUES (?, ?, ?, ?, ?, ?, ?)", [usuario_id, profissional_id, servico_id, status_id, data_hora_inicio, data_hora_fim, criado_em]);
        return result.insertId;
    }

    static async update(id, agendamento) {
        const { usuario_id, profissional_id, servico_id, status_id, data_hora_inicio, data_hora_fim, criado_em } = agendamento;
        const [result] = await db.query("UPDATE tb_agendamentos SET usuario_id = ?, profissional_id = ?, servico_id = ?, status_id = ?, data_hora_inicio = ?, data_hora_fim = ?, criado_em = ? WHERE id = ?", [usuario_id, profissional_id, servico_id, status_id, data_hora_inicio, data_hora_fim, criado_em, id]);
        return result.affectedRows;
    }

    static async delete(id) {
        const [result] = await db.query("DELETE FROM tb_agendamentos WHERE id = ?", [id]);
        return result.affectedRows;
    }
}

module.exports = agendamentoModel;