import { AuthService } from '@services/auth.service';
import {
  Component,
   OnInit,

  } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { MessageService } from '@services/message.service';
import { ModalService } from '@services/modal.service';
import { SpinnerService } from '@services/spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-element',
  templateUrl: './register-element.component.html',
  styleUrls: ['./register-element.component.scss'],
})
export class RegisterElementComponent implements OnInit {
  // @ViewChild(WizardComponent, {static: false}) public wizard: WizardComponent;

  registerForm;
  hidePass: boolean;
  // @Output() readyToStep = new EventEmitter();


  constructor(
    private fb: FormBuilder,
    private spinner: SpinnerService,
    public auth: AuthService,
    private message: MessageService,
    public modalService: ModalService,
    private router: Router
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
      this.auth.registerUser(this.registerForm.value);
      await this.message.registerSuccessToast().then(() => {
        reg.reset();
        this.spinner.dismissSpinner();
        this.router.navigateByUrl('/membership')
      });
    } catch (error) {
      this.message.errorAlert(error.message);
      this.spinner.dismissSpinner();
      reg.reset();
    }
  }


    // takeNextStep() {
    //   this.readyToStep.emit();
    // }
  }
