import { Address } from "../address/address.model";
import { Consult } from "../consult/consult.model";
import { Contact } from "../contact/contact.model";

export class Doctor {
    id!: Number;
    firstName!: string;
    lastName!: string;
    contact!: Contact;
    cpf!: string;
    crm!: string;
    address!: Address;
    age!: Number;
    bornAt!: string;
    startWork!: string;
    stopWork!: string;
}