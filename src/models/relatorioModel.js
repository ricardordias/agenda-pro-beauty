const db = require("../config/database");

class relatorioModel {
    static async getTotalAgendamentos() {
        const [rows] = await db.query(
            "SELECT COUNT(*) AS totalAgendamentos FROM tb_agendamentos"
        );
        return rows[0];
    }

    static async getServicosMaisSolicitados() {
        const [rows] = await db.query(`
            SELECT
                s.id,
                s.nomeServico,
                COUNT(a.id) AS totalSolicitacoes
            FROM tb_agendamentos a
            INNER JOIN tb_servicos s ON s.id = a.servico_id
            GROUP BY s.id, s.nomeServico
            ORDER BY totalSolicitacoes DESC, s.nomeServico ASC
            LIMIT 10
        `);
        return rows;
    }

    static async getProfissionaisMaisRequisitados() {
        const [rows] = await db.query(`
            SELECT
                p.id,
                p.nomeProfissional,
                COUNT(a.id) AS totalRequisicoes
            FROM tb_agendamentos a
            INNER JOIN tb_profissionais p ON p.id = a.profissional_id
            GROUP BY p.id, p.nomeProfissional
            ORDER BY totalRequisicoes DESC, p.nomeProfissional ASC
            LIMIT 10
        `);
        return rows;
    }
}

module.exports = relatorioModel;
