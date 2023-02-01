export class Consult {
    id!: string;
    pacientId!: string;
    pacientName!: string;
    pacientCPF!: string;
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