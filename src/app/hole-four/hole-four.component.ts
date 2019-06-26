import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IPublishedPet, SharedStoreService} from "../core/shared-store.service";

@Component({
  selector: "hole-four",
  templateUrl: "./hole-four.component.html"
})
export class HoleFourComponent implements OnInit {

  title = "My Dog Sitter";
  petsForm: FormGroup;

  constructor(private sharedStoreService: SharedStoreService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.petsForm = this.formBuilder.group({
      name: "",
      breed: "",
      duration: "",
    })
  }

  onSubmit(publishedData: IPublishedPet): void {
    this.sharedStoreService.publishedPet = publishedData;
  }
}
