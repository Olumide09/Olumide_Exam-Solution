import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    farmproducename:string;

    @Column()
    farmproducedescription:string;

    @Column()
    photourl:string;

    @Column()
    weightinkg:number;

    @Column()
    priceperunit:number;

    @Column()
    quantityavailable:number;
}
