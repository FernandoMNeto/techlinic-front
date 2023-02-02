import { Address } from "../address/address.model";
import { Consult, Consults } from "../consult/consult.model";
import { Contact } from "../contact/contact.model";

export class PatientRecord {
    firstName!: string;
    lastName!: string;
    cpf!: string;
    age!: string;
    bornAt!: string;
    address!: Address;
    contact!: Contact;
    consults!: Consult[]
}