import express = require('express');
import { Request, Response } from 'express';
import { ObjectId } from "mongodb";
import { collections } from "../services/db.services";
import Puppy from "../models/types";


export const router = express.Router();

router.use(express.json());


router.get('/', async (_req: Request, res: Response) => {
    try { 
      const puppies = await collections.puppies.find<Puppy>({}).toArray() as Puppy[];
      res.status(200).send(puppies);
      } catch (error) {
          res.status(500).send(error.message);
      }
    }
   );

router.get('/:id', async (_req: Request, res: Response) => {
    const id= _req.params.id;
    console.log(id)
    try { 
      const puppy = await collections.puppies.findOne<Puppy>({id: id}) as Puppy;
      res.status(200).send(puppy);
      } catch (error) {
          res.status(500).send(error.message);
      }
    }
);

