import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pte.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}
  
  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput); // newPet = newPet(); new.name = input.name

    return this.petsRepository.save(newPet);
  }

  async finAll(): Promise<Pet[]> {
    
    return this.petsRepository.find(); // SELECT * pet
  }
}
