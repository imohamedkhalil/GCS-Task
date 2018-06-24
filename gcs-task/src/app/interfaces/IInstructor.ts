import { ICourse } from "./ICourse";

export interface IInstructor {
    id?: number;
    name?: string;
    phone?: string;
    mail?: string;
    department?: string;
    courses?: ICourse[];
}
