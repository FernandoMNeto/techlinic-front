import { Address } from "../address/address.model";
import { Contact } from "../contact/contact.model";

export class PatientRecord {
    firstName!: string;
    lastName!: string;
    cpf!: string;
    age!: string;
    bornDate!: Date;
    address!: Address;
    contact!: Contact;
}