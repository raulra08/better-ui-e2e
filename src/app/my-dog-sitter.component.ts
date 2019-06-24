import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: "my-dog-sitting",
  templateUrl: "./my-dog-sitter.component.html",
  styleUrls: ["./my-dog-sitter.component.css"]
})
export class MyDogSitterComponent implements OnInit {

  title = "My Dog Sitter";

  petsForm: FormGroup;

  name: string;
  breed: string;
  duration: string;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.petsForm = this.formBuilder.group({
      name: "",
      breed: "",
      duration: "",
    })
  }

  onSubmit(publishedData: any): void {
    console.log("Submited data", publishedData);
    this.name = publishedData.name;
    this.breed = publishedData.breed;
    this.duration = publishedData.duration;
  }
}
