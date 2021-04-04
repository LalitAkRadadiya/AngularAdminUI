import { Component, OnInit, Input } from '@angular/core';
import { SharedService} from '../sharedservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-edit-branch',
  templateUrl: './add-edit-branch.component.html',
  styleUrls: ['./add-edit-branch.component.scss']
})
export class AddEditBranchComponent implements OnInit {
  addBranchForm: FormGroup;
  submitted = false;
  constructor(private service : SharedService,private formBuilder: FormBuilder) {}
  @Input() companyList: any;

  ngOnInit() {
    this.addBranchForm = this.formBuilder.group({
      branchId: [uuidv4(), Validators.required],
      branchName: ['', Validators.required],
      address: ['', Validators.required]
    });
    
  }
  
  get f() { return this.addBranchForm.controls; }

  saveAdded(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.addBranchForm.invalid) {
        return;
    }else{

    console.log(this.companyList.companyBarnch);
    var val = {
      id : this.companyList.id,
      Email : this.companyList.Email,
      Name: this.companyList.Name,
      totalEmployee : this.companyList.totalEmployee,
      totalBranch: this.companyList.totalBranch,
      companyBarnch :{
          branchId : this.f.branchId.value,
          branchName :  this.f.branchName.value,
          address : this.f.address.value
      }
    }
    
    // var val = {
    //  id : this.companyList.id,
    //  Email : this.companyList.Email,
    //  Name : this.companyList.Name,
    //  totalEmployee : this.companyList.totalEmployee,
    //  totalBranch: this.companyList.totalBranch
     
    // };
    this.service.editList(val).subscribe(res => {
      console.log('list addedd');
      // this.toastr.success('Added SuccessFully!');
    });
  }
  }
}
