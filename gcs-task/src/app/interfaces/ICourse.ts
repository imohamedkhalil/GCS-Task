import { IStudent } from "./IStudent";
import { IInstructor } from "./IInstructor";

export interface ICourse {
    id?: number;
    name?: string;
    code?: string;
    noOfHours?: string;
    students?: IStudent[];
    instructors?: IInstructor[];
}
