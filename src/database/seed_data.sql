USE probeautydb;

-- 1. Alimentando as Áreas (tb_areas)
INSERT INTO tb_areas (nomeArea, descricaoArea) VALUES
('Cabelo', 'Cortes, coloração, escovas e tratamentos capilares'),
('Manicure e Pedicure', 'Cuidados com as mãos, pés e alongamentos de unhas'),
('Estética Facial', 'Limpeza de pele, design de sobrancelhas e micropigmentação'),
('Massoterapia', 'Massagens relaxantes, drenagem linfática e modeladora');

-- 2. Alimentando os Usuários (tb_usuarios)
INSERT INTO tb_usuarios (nomeUsuario, emailUsuario, senha_hash, perfil) VALUES
('Administrador Geral', 'admin@probeauty.com', '$2b$12$K7v19b...', 'admin'),
('Ana Silva', 'ana.silva@email.com', '$2b$12$R8x20c...', 'cliente'),
('Carlos Souza', 'carlos.souza@email.com', '$2b$12$P1m34z...', 'cliente'),
('Mariana Costa', 'mariana.recepcao@probeauty.com', '$2b$12$T9o45x...', 'recepcao');

-- 3. Alimentando os Profissionais (tb_profissionais)
INSERT INTO tb_profissionais (nomeProfissional, especialidade, telefone, ativo) VALUES
('Roberto Alencar', 'Cabeleireiro Master e Visagista', '(11) 99999-1111', TRUE),
('Juliana Mendes', 'Designer de Unhas e Podologia', '(11) 99999-2222', TRUE),
('Beatriz Rocha', 'Esteticista e Biomédica Esteta', '(11) 99999-3333', TRUE),
('Marcos Lima', 'Massoterapeuta', '(11) 99999-4444', FALSE); -- Profissional inativo no momento

-- 4. Alimentando os Serviços (tb_servicos)
INSERT INTO tb_servicos (area_id, nomeServico, duracao_min, preco) VALUES
(1, 'Corte Feminino + Escova', 60, 150.00), -- area_id 1: Cabelo
(1, 'Coloração Global', 120, 220.00),
(2, 'Pé e Mão Simples', 45, 60.00),    -- area_id 2: Manicure
(2, 'Alongamento em Gel', 120, 180.00),
(3, 'Limpeza de Pele Profunda', 90, 130.00), -- area_id 3: Estética Facial
(3, 'Design de Sobrancelha', 30, 45.00),
(4, 'Massagem Relaxante', 60, 120.00);   -- area_id 4: Massoterapia

-- 5. Alimentando os Status de Agendamento (tb_status_agendamento)
INSERT INTO tb_status_agendamento (nomeStatus, descricaoStatus) VALUES
('Agendado', 'Horário reservado pelo cliente, aguardando atendimento'),
('Confirmado', 'Presença confirmada pelo cliente ou recepção'),
('Concluído', 'Atendimento realizado e finalizado'),
('Cancelado', 'Agendamento cancelado pelo cliente ou pelo salão'),
('Não Compareceu', 'Cliente faltou sem aviso prévio');

-- 6. Alimentando os Horários de Trabalho (tb_horarios_trabalho)
-- dia_semana: 0 = Domingo, 1 = Segunda, 2 = Terça, ..., 6 = Sábado (padrão comum)
INSERT INTO tb_horarios_trabalho (profissional_id, dia_semana, hora_inicio, hora_fim) VALUES
(1, 3, '09:00:00', '17:30:00'), -- Roberto (Quarta)
(1, 4, '09:00:00', '17:30:00'), -- Roberto (Quinta)
(1, 5, '09:00:00', '17:30:00'), -- Roberto (Sexta)
(2, 4, '08:00:00', '17:00:00'), -- Juliana (Quinta)
(2, 5, '08:00:00', '17:00:00'), -- Juliana (Sexta)
(2, 6, '08:00:00', '18:00:00'), -- Juliana (Sábado)
(3, 3, '11:30:00', '20:00:00'); -- Beatriz (Quarta)
(3, 4, '11:30:00', '20:00:00'), -- Beatriz (Quinta)
(3, 5, '11:30:00', '20:00:00'), -- Beatriz (Sexta)

-- 7. Alimentando os Horários Bloqueados (tb_horarios_bloqueados)
INSERT INTO tb_horarios_bloqueados (profissional_id, inicio, fim, motivo) VALUES
(1, '2026-07-25 12:00:00', '2026-07-25 13:00:00', 'Horário de Almoço do Roberto'),
(3, '2026-08-10 08:00:00', '2026-08-14 18:00:00', 'Beatriz em Congresso de Estética');

-- 8. Alimentando os Agendamentos (tb_agendamentos)
INSERT INTO tb_agendamentos (usuario_id, profissional_id, servico_id, status_id, data_hora_inicio, data_hora_fim) VALUES
-- Ana Silva (id 2) com Roberto (id 1) para Corte (id 1) - Status Agendado (id 1)
(2, 1, 1, 1, '2026-07-22 10:00:00', '2026-07-22 11:00:00'),

-- Carlos Souza (id 3) com Juliana (id 2) para Pé e Mão (id 3) - Status Confirmado (id 2)
(3, 2, 3, 2, '2026-07-22 14:00:00', '2026-07-22 14:45:00'),

-- Ana Silva (id 2) com Beatriz (id 3) para Limpeza de Pele (id 5) - Status Concluído (id 3)
(2, 3, 5, 3, '2026-07-15 09:00:00', '2026-07-15 10:30:00');