import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User{
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public fullname: string;

  @Column()
  public phoneNumber: number;

  @Column()
  public email: string;
  
  @Column()
  public isActive: boolean;
  
}
export default User;