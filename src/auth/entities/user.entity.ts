import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ValidRoles } from '../interfaces/valid-roles';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 200,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 200,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 200,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 200,
    select: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 200,
  })
  country: string;

  @Column({
    type: 'bool',
    default: true,
  })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: ValidRoles,
    default: ValidRoles.user,
  })
  roles: ValidRoles;
}
