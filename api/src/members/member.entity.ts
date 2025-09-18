import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('members')
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  full_name: string;

  @Column({ length: 50 })
  plan: string;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ default: true })
  active: boolean;
}
