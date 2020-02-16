import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '@services/spinner.service';
import { AuthService } from '@services/auth.service';
import { MessageService } from '@services/message.service';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'app-register-element',
  templateUrl: './register-element.component.html',
  styleUrls: ['./register-element.component.scss'],
})
export class RegisterElementComponent implements OnInit {

  registerForm;
  hidePass: boolean;
  register;

  constructor(
    private fb: FormBuilder,
    private spinner: SpinnerService,
    public auth: AuthService,
    private message: MessageService,
    public modalService: ModalService
  ) { }

  ngOnInit() {
    this.hidePass = true;
    this.registerForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern("^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$"),
          Validators.maxLength(25)
        ]
      ],
      firstName: [
        "",
        [
          Validators.required,
          Validators.pattern("^[_A-z0-9]*((-|s)*[_A-z0-9])*$"),
          Validators.maxLength(25)
        ]
      ],
      lastName: [
        "",
        [
          Validators.required,
          Validators.pattern("^[_A-z0-9]*((-|s)*[_A-z0-9])*$"),
          Validators.maxLength(25)
        ]
      ]
    });

  }

  switchToLogin(){
    this.register = !this.register;
  }

  async registerUser(reg: NgForm) {
    try{
      this.spinner.loadSpinner();
        this.auth.registerUser(this.registerForm.value).then(
          async res => {
            await this.spinner.dismissSpinner();
              if (res.user.uid) {
                this.message.registerSuccessToast();
                // this.wizard.goToStep(1);
                reg.reset();
              }
          }
        );
    }
    catch{
      async err => {
        await this.spinner.dismissSpinner();
        await this.message.errorAlert(err.message);
        reg.reset();
      }
    }


  }
}
