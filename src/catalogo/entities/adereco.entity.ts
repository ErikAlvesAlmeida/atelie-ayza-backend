import { Check, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { decimalTransformer } from '../../database/decimal.transformer.js';
import { CategoriaAdereco } from './categoria-adereco.entity.js';

@Entity('adereco')
@Check('"quantidade" >= 0')
@Check('"preco" >= 0')
export class Adereco {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 100 })
  nome!: string;

  @ManyToOne(() => CategoriaAdereco, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'id_categoria' })
  categoria!: CategoriaAdereco;

  @Column({ type: 'text', nullable: true })
  foto!: string | null;

  @Column({ type: 'int', default: 0 })
  quantidade!: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, transformer: decimalTransformer })
  preco!: number;

  @Column({ name: 'estoque_minimo', type: 'int', default: 0 })
  estoqueMinimo!: number;

  @Column({ default: false })
  desabilitado!: boolean;

  @Column({ default: false })
  excluido!: boolean;
}