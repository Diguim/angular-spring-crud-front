import { Lesson } from "./lesson";

export interface Course {
  _id: number | any;
  name: string;
  category: string;
  lessons?: Lesson[];
}
