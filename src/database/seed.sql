USE probeautydb;

INSERT INTO tb_areas (nomeArea, descricaoArea) VALUES
('Cabelo', 'Servicos capilares: cortes, coloracao, tratamentos'),
('Unhas', 'Manicure, pedicure, alongamento e design'),
('Maquiagem', 'Maquiagem social, artistica, noivas'),
('Depilacao', 'Depilacao com cera, linha, laser'),
('Estetica', 'Limpeza de pele, massagens, tratamentos corporais');

INSERT INTO tb_status_agendamento (nomeStatus, descricaoStatus) VALUES
('Pendente', 'Aguardando confirmacao'),
('Confirmado', 'Agendamento confirmado'),
('Cancelado', 'Cancelado pelo cliente ou profissional'),
('Concluido', 'Servico realizado'),
('Nao Compareceu', 'Cliente faltou');

INSERT INTO tb_usuarios (nomeUsuario, emailUsuario, senha_hash, perfil) VALUES
('Administrador', 'admin@probeauty.com', '$2y$10$N9qo8uLOickgx2ZMRZoMy.Mr/.cZxqD3q0p4z3VqL5qUa8T5JkK6K', 'admin'),
('Ana Silva', 'ana.silva@email.com', '$2y$10$N9qo8uLOickgx2ZMRZoMy.Mr/.cZxqD3q0p4z3VqL5qUa8T5JkK6K', 'cliente'),
('Carlos Souza', 'carlos.souza@email.com', '$2y$10$N9qo8uLOickgx2ZMRZoMy.Mr/.cZxqD3q0p4z3VqL5qUa8T5JkK6K', 'cliente'),
('Mariana Costa', 'mariana.costa@email.com', '$2y$10$N9qo8uLOickgx2ZMRZoMy.Mr/.cZxqD3q0p4z3VqL5qUa8T5JkK6K', 'cliente');

INSERT INTO tb_profissionais (nomeProfissional, especialidade, telefone, ativo) VALUES
('Juliana Mendes', 'Cabeleireira', '(11) 91234-5678', TRUE),
('Roberto Alves', 'Barbeiro', '(11) 98765-4321', TRUE),
('Carla Lima', 'Manicure/Pedicure', '(11) 94567-8901', TRUE),
('Fernanda Rocha', 'Esteticista', '(11) 93456-7890', TRUE),
('Patricia Nunes', 'Maquiadora', '(11) 92345-6789', TRUE),
('Adriana Souza', 'Depiladora', '(11) 95678-1234', TRUE);

INSERT INTO tb_servicos (area_id, nomeServico, duracao_min, preco) VALUES
(1, 'Corte Feminino', 45, 80.00),
(1, 'Corte Masculino', 30, 50.00),
(1, 'Coloracao', 90, 150.00),
(1, 'Hidratacao', 60, 90.00),
(1, 'Progressiva', 120, 200.00),
(2, 'Manicure', 45, 40.00),
(2, 'Pedicure', 60, 50.00),
(2, 'Alongamento em Gel', 90, 120.00),
(2, 'Design de Unhas', 60, 70.00),
(3, 'Maquiagem Social', 60, 100.00),
(3, 'Maquiagem Noiva', 120, 250.00),
(3, 'Curso de Automaquiagem', 180, 300.00),
(4, 'Depilacao Axilas', 20, 30.00),
(4, 'Depilacao Pernas', 45, 60.00),
(4, 'Depilacao Intima', 30, 50.00),
(5, 'Limpeza de Pele', 60, 120.00),
(5, 'Massagem Relaxante', 50, 100.00),
(5, 'Drenagem Linfatica', 60, 130.00),
(5, 'Tratamento para Acne', 45, 110.00);

-- Dias da semana: 1=Dom, 2=Seg, 3=Ter, 4=Qua, 5=Qui, 6=Sex, 7=Sab
-- Cada profissional trabalha 4 dias (escala 4x3) e tem dois blocos por dia (manha e tarde) com 1h de almoco
-- Total diario: 7h30 de trabalho efetivo (30h semanais)

-- Turno Manha (08:00-12:00 e 13:00-16:30)
INSERT INTO tb_horarios_trabalho (profissional_id, dia_semana, hora_inicio, hora_fim) VALUES
-- Juliana (id 1): Dom, Seg, Ter, Qua
(1, 1, '08:00:00', '12:00:00'),
(1, 1, '13:00:00', '16:30:00'),
(1, 2, '08:00:00', '12:00:00'),
(1, 2, '13:00:00', '16:30:00'),
(1, 3, '08:00:00', '12:00:00'),
(1, 3, '13:00:00', '16:30:00'),
(1, 4, '08:00:00', '12:00:00'),
(1, 4, '13:00:00', '16:30:00'),
-- Roberto (id 2): Qui, Sex, Sab, Dom
(2, 5, '08:00:00', '12:00:00'),
(2, 5, '13:00:00', '16:30:00'),
(2, 6, '08:00:00', '12:00:00'),
(2, 6, '13:00:00', '16:30:00'),
(2, 7, '08:00:00', '12:00:00'),
(2, 7, '13:00:00', '16:30:00'),
(2, 1, '08:00:00', '12:00:00'),
(2, 1, '13:00:00', '16:30:00');

-- Turno Tarde (10:00-14:00 e 15:00-18:30)
INSERT INTO tb_horarios_trabalho (profissional_id, dia_semana, hora_inicio, hora_fim) VALUES
-- Carla (id 3): Seg, Ter, Qua, Qui
(3, 2, '10:00:00', '14:00:00'),
(3, 2, '15:00:00', '18:30:00'),
(3, 3, '10:00:00', '14:00:00'),
(3, 3, '15:00:00', '18:30:00'),
(3, 4, '10:00:00', '14:00:00'),
(3, 4, '15:00:00', '18:30:00'),
(3, 5, '10:00:00', '14:00:00'),
(3, 5, '15:00:00', '18:30:00'),
-- Fernanda (id 4): Sex, Sab, Dom, Seg
(4, 6, '10:00:00', '14:00:00'),
(4, 6, '15:00:00', '18:30:00'),
(4, 7, '10:00:00', '14:00:00'),
(4, 7, '15:00:00', '18:30:00'),
(4, 1, '10:00:00', '14:00:00'),
(4, 1, '15:00:00', '18:30:00'),
(4, 2, '10:00:00', '14:00:00'),
(4, 2, '15:00:00', '18:30:00');

-- Turno Noite (13:30-17:30 e 18:30-22:00)
INSERT INTO tb_horarios_trabalho (profissional_id, dia_semana, hora_inicio, hora_fim) VALUES
-- Patricia (id 5): Ter, Qua, Qui, Sex
(5, 3, '13:30:00', '17:30:00'),
(5, 3, '18:30:00', '22:00:00'),
(5, 4, '13:30:00', '17:30:00'),
(5, 4, '18:30:00', '22:00:00'),
(5, 5, '13:30:00', '17:30:00'),
(5, 5, '18:30:00', '22:00:00'),
(5, 6, '13:30:00', '17:30:00'),
(5, 6, '18:30:00', '22:00:00'),
-- Adriana (id 6): Sab, Dom, Seg, Ter
(6, 7, '13:30:00', '17:30:00'),
(6, 7, '18:30:00', '22:00:00'),
(6, 1, '13:30:00', '17:30:00'),
(6, 1, '18:30:00', '22:00:00'),
(6, 2, '13:30:00', '17:30:00'),
(6, 2, '18:30:00', '22:00:00'),
(6, 3, '13:30:00', '17:30:00'),
(6, 3, '18:30:00', '22:00:00');

-- Bloqueios fixos (datas especificas)
INSERT INTO tb_horarios_bloqueados (profissional_id, inicio, fim, motivo) VALUES
(1, '2026-01-15 08:00:00', '2026-01-15 16:30:00', 'Ferias'),
(1, '2026-02-20 08:00:00', '2026-02-20 16:30:00', 'Consulta medica'),
(2, '2026-01-25 08:00:00', '2026-01-25 16:30:00', 'Feriado'),
(3, '2026-03-01 10:00:00', '2026-03-01 18:30:00', 'Curso de aperfeicoamento'),
(4, '2026-02-14 10:00:00', '2026-02-14 18:30:00', 'Dia dos Namorados'),
(5, '2026-01-30 13:30:00', '2026-01-30 22:00:00', 'Treinamento');

-- Agendamentos (passados, presentes e futuros)
INSERT INTO tb_agendamentos 
(usuario_id, profissional_id, servico_id, status_id, data_hora_inicio, data_hora_fim, criado_em) 
VALUES
(2, 1, 1, 4, DATE_SUB(NOW(), INTERVAL 5 DAY), DATE_ADD(DATE_SUB(NOW(), INTERVAL 5 DAY), INTERVAL 45 MINUTE), NOW() - INTERVAL 6 DAY),
(2, 3, 6, 4, DATE_SUB(NOW(), INTERVAL 3 DAY), DATE_ADD(DATE_SUB(NOW(), INTERVAL 3 DAY), INTERVAL 45 MINUTE), NOW() - INTERVAL 4 DAY),
(3, 2, 2, 4, DATE_SUB(NOW(), INTERVAL 2 DAY), DATE_ADD(DATE_SUB(NOW(), INTERVAL 2 DAY), INTERVAL 30 MINUTE), NOW() - INTERVAL 3 DAY),
(4, 4, 16, 4, DATE_SUB(NOW(), INTERVAL 1 DAY), DATE_ADD(DATE_SUB(NOW(), INTERVAL 1 DAY), INTERVAL 60 MINUTE), NOW() - INTERVAL 2 DAY),
(2, 1, 3, 2, DATE_ADD(NOW(), INTERVAL 1 HOUR), DATE_ADD(DATE_ADD(NOW(), INTERVAL 1 HOUR), INTERVAL 90 MINUTE), NOW()),
(3, 5, 10, 2, DATE_ADD(NOW(), INTERVAL 3 HOUR), DATE_ADD(DATE_ADD(NOW(), INTERVAL 3 HOUR), INTERVAL 60 MINUTE), NOW()),
(4, 2, 4, 2, DATE_ADD(NOW(), INTERVAL 2 DAY), DATE_ADD(DATE_ADD(NOW(), INTERVAL 2 DAY), INTERVAL 60 MINUTE), NOW()),
(2, 3, 8, 2, DATE_ADD(NOW(), INTERVAL 3 DAY), DATE_ADD(DATE_ADD(NOW(), INTERVAL 3 DAY), INTERVAL 90 MINUTE), NOW()),
(3, 4, 17, 1, DATE_ADD(NOW(), INTERVAL 5 DAY), DATE_ADD(DATE_ADD(NOW(), INTERVAL 5 DAY), INTERVAL 50 MINUTE), NOW()),
(4, 1, 5, 1, DATE_ADD(NOW(), INTERVAL 7 DAY), DATE_ADD(DATE_ADD(NOW(), INTERVAL 7 DAY), INTERVAL 120 MINUTE), NOW()),
(2, 5, 11, 3, DATE_ADD(NOW(), INTERVAL 10 DAY), DATE_ADD(DATE_ADD(NOW(), INTERVAL 10 DAY), INTERVAL 120 MINUTE), NOW() - INTERVAL 2 DAY),
(3, 3, 7, 3, DATE_ADD(NOW(), INTERVAL 8 DAY), DATE_ADD(DATE_ADD(NOW(), INTERVAL 8 DAY), INTERVAL 60 MINUTE), NOW() - INTERVAL 1 DAY),
(4, 2, 2, 5, DATE_SUB(NOW(), INTERVAL 1 DAY), DATE_ADD(DATE_SUB(NOW(), INTERVAL 1 DAY), INTERVAL 30 MINUTE), NOW() - INTERVAL 2 DAY);