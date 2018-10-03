import { PasswordValidators } from './../../shared/validators/password-match.validator';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public types: any[] = [
    {id: 1, code: 'angular', displayname: 'Angular'},
    {id: 1, code: 'react', displayname: 'React'},

  ]
  public account$ = of({
    name: 'Dan',
    password: 'Lymar',
    confirmPassword: 'sdf'
  });
  public isActive: boolean = false;

  public searchControl: FormControl = new FormControl(
    '',
    [Validators.required, 
      // myValidator(3)
    ],
    [ mysyncValidator(3) ]
  );

  public contactUsFrom: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),

  pollingForm: new FormArray([
    new FormControl('dan'),
    new FormControl('Anrew'),
    new FormControl('Ivan')
  ])
  }, [ PasswordValidators.checkPasswordMatch ]);

  public contactUs: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    type: [''],
    isUserActive: [false, [Validators.requiredTrue]],
    pollingForm: this._formBuilder.array(['dan'])
  });

  public questions: FormArray = this._formBuilder.array([
    this.createQuestion()
  ]);

  public constructor(
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.account$.subscribe(({name, password, confirmPassword}: any) => {
      this.contactUs.patchValue({ name, password, confirmPassword })
    })

    //     this.account$.subscribe((data: any) => {
    //   this.contactUs.setValue(data)
    // })
    this.searchControl.setValue('Den')

    this.questions.valueChanges.subscribe((_data: string) => {
      console.log(this.questions)
    })

    this.contactUs.valueChanges.subscribe((data: any) => {
      console.log('data', data)
      console.log('this.contactUsFrom', this.contactUs)
    })
  }

  public createQuestion(): FormGroup {
    return this._formBuilder.group({
      name: ['', Validators.required],
    });
  }

  public submit(value) {
    console.log(this.contactUs.value, value)
    this.contactUs.reset();
    this.contactUs.markAsUntouched();

    // this.mysefvie.submicContact(this.contactUs.value)
  }


  public addQuestion() {
    this.questions.push(this.createQuestion())
  }

  public removeQuestion(index) {
    if (this.questions.length === 1) {
      return;
    }
    this.questions.removeAt(index)
  }


  public switchPassword(): void {
    this.searchControl.reset()
    this.isActive = !this.isActive;
  }

}

// function myValidator(length: number): any {
//   return function(formControl: FormControl): any {
//     return formControl.value.length > length ? { ourMinLenght: true } : null;
//   };
// }

function mysyncValidator(length: number): any {
  return function(formControl: FormControl): any {
    // this.myService.checkVluae(formControl.value)
    const response = formControl.value.length > length ? { ourMinLenght: true } : null;
    return of(response).pipe(
      delay(3000)
    )
  };
}
