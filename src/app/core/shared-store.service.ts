import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SharedStoreService {

  get publishedPet(): IPublishedPet {
    return this._publishedPet;
  }

  set publishedPet(pet) {
    this._publishedPet = pet;
  }

  private _publishedPet: IPublishedPet;

  constructor() {
    this._publishedPet = {
      name: "",
      breed: "",
      duration: ""
    }
  }
}

export interface IPublishedPet {
  name: string;
  breed: string;
  duration: string;
}
