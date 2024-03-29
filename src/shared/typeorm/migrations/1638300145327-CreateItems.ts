import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateItems1638300145327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'items',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'icon',
                        type: 'varchar',
                    },
                    {
                        name: 'feed_id',
                        type: 'uuid'
                    },
                    {
                        name: 'position',
                        type: 'int'
                    },
                    {
                        name: 'show_feed',
                        type: 'boolean',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'ItemFeed',
                        referencedTableName: 'feeds',
                        referencedColumnNames: ['id'],
                        columnNames: ['feed_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },
                ],

            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('items');
    }

}
