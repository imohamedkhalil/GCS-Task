import { ICourse } from "./ICourse";

export interface IStudent {
    id?: number;
    name?: string;
    phone?: string;
    mail?: string;
    birthdate?: Date;
    courses?: ICourse[];
}
