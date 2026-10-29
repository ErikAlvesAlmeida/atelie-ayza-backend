import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categoria_adereco')
export class CategoriaAdereco {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 60, unique: true })
  nome!: string;

  @Column({ default: false })
  desabilitado!: boolean;
}