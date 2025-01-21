import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableState1737481866240 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE state
            ADD uf VARCHAR(2) NOT NULL
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE state
            DROP COLUMN uf
        `)
    }

}
