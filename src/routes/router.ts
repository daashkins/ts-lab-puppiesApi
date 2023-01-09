// External Dependencies
import express = require('express');
import { Request, Response } from 'express';
import { ObjectId } from "mongodb";
import { collections } from "../services/db.services";
import Puppy from "../models/types";
// Global Config

export const router = express.Router();

router.use(express.json());

// GET
router.get('/', async (_req: Request, res: Response) => {
    try { 
      const puppies = (await collections.puppies.find<Puppy>({}).toArray()) as Puppy[];
      res.status(200).send(puppies);
      } catch (error) {
          res.status(500).send(error.message);
      }
    }
   );

router.get('/:id', async (_req: Request, res: Response) => {
    try { 
      const puppies = (await collections.puppies.find<Puppy>({}).toArray()) as Puppy[];
      res.status(200).send(puppies);
      } catch (error) {
          res.status(500).send(error.message);
      }
    }
);

// POST

// PUT

// DELETE