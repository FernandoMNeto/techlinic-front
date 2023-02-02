export class Consult {
    id!: string;
    patientId!: string;
    patientName!: string;
    patientCPF!: string;
    doctorId!: string;
    doctorName!: string;
    description!: string;
    complaint!: string;
    diagnosis!: string;
    time!: string;
    date!: string
}

export class Consults {
    consult!: Consult[];
}