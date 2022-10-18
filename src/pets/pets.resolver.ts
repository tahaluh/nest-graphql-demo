import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePetInput } from './dto/create-pet.input';
import { PetsService } from './pets.service';
import { Pet } from './pte.entity';

@Resolver(of => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(returns => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.finAll();
  }

  @Mutation(returns => Pet)
  createPet(@Args('createPetInput')createPetInput: CreatePetInput): Promise<Pet>{
    return this.petsService.createPet(createPetInput)
  }
}
