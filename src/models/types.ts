
import { ObjectId } from "mongodb";

export default interface Puppy {
  name: string, 
  birth_date: string, 
  breed: string, 
  _id: ObjectId,
  id: string,
}

