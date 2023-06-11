import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('livro')
export class Livro{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    sinopse!: string;
    
    @Column()
    isbn!: number;

    @Column()
    titulo!: string;

    @Column()
    quantidade_exemplares!: number;

    @Column()
    ano_publicacao!: Date;

    @Column()
    exemplares_disponivel!: number

    @Column()
    autor_id!: number;

    @Column()
    editora_id!: number;
}