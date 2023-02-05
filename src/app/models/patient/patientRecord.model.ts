import { Address } from "../address/address.model";
import { Consult } from "../consult/consult.model";
import { Contact } from "../contact/contact.model";

export class PatientRecord {
    id!: string;
    firstName!: string;
    lastName!: string;
    cpf!: string;
    age!: string;
    bornAt!: string;
    address!: Address;
    contact!: Contact;
    consults!: Consult[]
}