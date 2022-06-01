import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log('Submitteed');
  }
}
