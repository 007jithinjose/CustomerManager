import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerInfo!: FormGroup;
  ngOnInit(): void {

    this.customerInfo = new FormGroup({
      FullName : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email]),
      address1 : new FormControl('',Validators.required),
      address2 : new FormControl('',Validators.required),
      city: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      state: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      country: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      pinCode: new FormControl('',[Validators.required,Validators.pattern('^[1-9][0-9]*')]),
      phoneNo : new FormControl('',[Validators.required,Validators.maxLength(10)]),
      dob : new FormControl('',Validators.required)
    });
  }
}
