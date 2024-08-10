import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Default } from 'sequelize-typescript';
import { USERS_REPOSITORY, UserRole } from 'src/constants';
import { v4 as uuidv4 } from 'uuid';

@Table
export class User extends Model {
    @PrimaryKey
    @Default(uuidv4)
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.ENUM(...Object.values(UserRole)),
        defaultValue: UserRole.USER,
    })
    role: UserRole;
}

export const usersProviders =[{
    provide: USERS_REPOSITORY,
    useValue: User,
}]
