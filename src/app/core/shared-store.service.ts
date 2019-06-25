import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SharedStoreService {

  get publishedPet(): IPublishedPet {
    return this._publishedPets;
  }

  set publishedPet(pet) {
    this._publishedPets = pet;
  }

  private _publishedPets;

  constructor() { }
}

export interface IPublishedPet {
  name: string;
  breed: string;
  duration: string;
}
