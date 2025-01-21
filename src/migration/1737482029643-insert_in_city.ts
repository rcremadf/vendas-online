import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableStateinsertInCity1737482029643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO city ("id", "name", "state_id") VALUES (1, 'Afonso Cláudio', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (2, 'Água Doce do Norte', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (3, 'Águia Branca', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (4, 'Alegre', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (5, 'Alfredo Chaves', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (6, 'Alto Rio Novo', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (7, 'Anchieta', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (8, 'Apiacá', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (9, 'Aracruz', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (10, 'Atilio Vivacqua', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (11, 'Baixo Guandu', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (12, 'Barra de São Francisco', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (13, 'Boa Esperança', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (14, 'Bom Jesus do Norte', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (15, 'Brejetuba', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (16, 'Cachoeiro de Itapemirim', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (17, 'Cariacica', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (18, 'Castelo', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (19, 'Colatina', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (20, 'Conceição da Barra', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (21, 'Conceição do Castelo', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (22, 'Divino de São Lourenço', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (23, 'Domingos Martins', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (24, 'Dores do Rio Preto', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (25, 'Ecoporanga', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (26, 'Fundão', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (27, 'Governador Lindenberg', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (28, 'Guaçuí', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (29, 'Guarapari', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (30, 'Ibatiba', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (31, 'Ibiraçu', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (32, 'Ibitirama', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (33, 'Iconha', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (34, 'Irupi', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (35, 'Itaguaçu', 8);
            INSERT INTO city ("id", "name", "state_id") VALUES (36, 'Itapemirim', 8);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            delete from public.city
        
        `)
        
    }

}
