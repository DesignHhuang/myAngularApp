import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    constructor(private fb: FormBuilder, ) { }

    ngOnInit() {
        this.form = this.fb.group({
            email: ['wpcfan@163.com', Validators.compose([Validators.required, Validators.email])],
            password: ['wp123456', Validators.required]
        });
    }

    onSubmit({ value, valid }, e: Event) {
        e.preventDefault();
        console.log(JSON.stringify(value));
        console.log(JSON.stringify(valid));
    }

}
