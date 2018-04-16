import { Component, OnInit } from '@angular/core';
import { DataformModel } from './dataformModel';
import { Router } from '@angular/router';
import { Message} from 'primeng/components/common/api';
import { MessageService} from 'primeng/components/common/messageservice';
import { Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css'],
  providers: [DataformModel,
              MessageService]
})

export class DataformComponent {

  msgs: Message[] = [];

  customerForm: FormGroup;

  displayConfirm: boolean = false;
  formSubmitted = false;

  constructor(private dataformModel : DataformModel, 
              private messageService: MessageService,
              private router        : Router,
              private fb            : FormBuilder) {}

   ngOnInit() {
        this.customerForm = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'email': new FormControl('', Validators.required)
    });
  }

  showDialog() {
      console.log("showDialog");
      this.displayConfirm = true;
  }
 
  handleClick() {
        console.log("handleClick");
        this.displayConfirm = false;
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
        this.router.navigate(['/dataform']);
  }

  onSubmit(value: string) {
        this.formSubmitted = true;
        this.displayConfirm = false;
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Customer form processed successfully', detail:'(not really)'});
    }

}
