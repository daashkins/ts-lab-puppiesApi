
// External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default interface Puppy {
  name: string, 
  birth_date: string, 
  breed: string, 
  id?: ObjectId
}

