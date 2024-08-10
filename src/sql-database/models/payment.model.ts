import { Table, Column, Model, DataType, ForeignKey, PrimaryKey, Default } from 'sequelize-typescript';
import { User } from './user.model';
import { PAYMENTS_REPOSITORY } from 'src/constants';
import { v4 as uuidv4 } from 'uuid';

@Table
export class Payment extends Model {

    @PrimaryKey
    @Default(uuidv4)
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    id: string

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    amount: number;

    @Column({
        type: DataType.ENUM('pending', 'completed', 'failed'),
        defaultValue: 'pending',
    })
    status: 'pending' | 'completed' | 'failed';

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    paymentMethod: string;
}

export const paymentProviders =[{
    provide: PAYMENTS_REPOSITORY,
    useValue: Payment,
}]