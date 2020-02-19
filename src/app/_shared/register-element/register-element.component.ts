import { AuthService } from '@services/auth.service';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
  } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { MessageService } from '@services/message.service';
import { ModalService } from '@services/modal.service';
import { SpinnerService } from '@services/spinner.service';
import { WizardComponent } from 'angular-archwizard';

@Component({
  selector: 'app-register-element',
  templateUrl: './register-element.component.html',
  styleUrls: ['./register-element.component.scss'],
})
export class RegisterElementComponent implements OnInit {
  // @Output() loginMode = new EventEmitter;

  // @ViewChild(WizardComponent, {static: false})
  registerForm;
  hidePass: boolean;
  registerMode;
  @Output() stepToOne = new EventEmitter;

  public wizard: WizardComponent;
  constructor(
    private fb: FormBuilder,
    private spinner: SpinnerService,
    public auth: AuthService,
    private message: MessageService,
    public modalService: ModalService,
  ) { }

  ngOnInit() {
    this.hidePass = true;
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$'),
          Validators.maxLength(25)
        ]
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),
          Validators.maxLength(25)
        ]
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),
          Validators.maxLength(25)
        ]
      ]
    });

  }

  async registerUser(reg: NgForm) {
    try {
      this.spinner.loadSpinner();
      const response = await this.auth.registerUser(this.registerForm.value);
      this.spinner.dismissSpinner();
      if (response.user.uid) {
        this.message.registerSuccessToast();
        reg.reset();
        return this.wizard.goToStep(1);
      }
    } catch (error) {
        this.spinner.dismissSpinner();
        this.message.errorAlert(error.message);
        reg.reset();
      }
  }

  // onLoginMode() {
  //   this.loginMode.emit;
  // }
}

