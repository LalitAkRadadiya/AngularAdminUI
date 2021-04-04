import { Component, OnInit, Input } from '@angular/core';
import { SharedService} from '../sharedservice.service';
import { v4 as uuidv4 } from 'uuid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-company',
  templateUrl: './add-edit-company.component.html',
  styleUrls: ['./add-edit-company.component.scss']
})
export class AddEditCompanyComponent implements OnInit {
  addForm: FormGroup ;
  submitted = false;
  constructor(private service : SharedService, private toastr: ToastrService,private fb: FormBuilder) { }
  @Input() companyList: any;
  
  addbutton = true;
  ngOnInit(): void {
    if(this.companyList.length>1){
      this.addbutton =true
    }else{
      this.addbutton= false;
    }
    console.log(this.companyList,'datalist')
    this.addForm= this.fb.group({
      id:[uuidv4(),Validators.required],
      Email:['', [Validators.required, Validators.email]],
      Name:['', Validators.required],
      totalEmployee:['', Validators.required],
      totalBranch:['', Validators.required]
    
    
    })
    if(!this.addbutton){
      this.addForm.setValue({
        id: this.companyList.id,
        Email: this.companyList.Email,
        Name:this.companyList.Name,
        totalEmployee:this.companyList.totalEmployee,
        totalBranch:this.companyList.totalBranch,
     });
    }
  }
  get f() { return this.addForm.controls; }

  saveAdded(){
    this.submitted = true;

        // stop here if form is invalid
        if (this.addForm.invalid) {
            return;
        }else{
          if(this.addbutton){
    var val = {
     id : this.f.id.value,
     Email : this.f.Email.value,
     Name : this.f.Name.value,
     totalEmployee : this.f.totalEmployee.value,
     totalBranch: this.f.totalBranch.value
     
    };
    this.service.addList(val).subscribe(res => {
      console.log('list addedd');
      this.toastr.success('Added SuccessFully!');
    });
  }else{
    var val = {
      id : this.f.id.value,
     Email : this.f.Email.value,
     Name : this.f.Name.value,
     totalEmployee : this.f.totalEmployee.value,
     totalBranch: this.f.totalBranch.value
     };
     console.log(val);
     this.service.editList(val).subscribe(res => {
       console.log('list updated');
       this.toastr.success('Updated SuccessFully!');

     });
  
  }
}
  }
  saveUpdated(){
    if (this.addForm.invalid) {
      return;

        }else{
      }
  }
}
