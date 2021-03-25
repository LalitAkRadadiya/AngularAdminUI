import { Component, OnInit, Input } from '@angular/core';
import { SharedService} from '../sharedservice.service';


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-company',
  templateUrl: './add-edit-company.component.html',
  styleUrls: ['./add-edit-company.component.scss']
})
export class AddEditCompanyComponent implements OnInit {

  constructor(private service : SharedService, private toastr: ToastrService) { }
  @Input() companyList: any;

  addbutton = true;
  ngOnInit(): void {
    if(this.companyList.length>1){
      this.addbutton =true
    }else{
      this.addbutton= false;
    }
    console.log(this.companyList,'datalist')
  }

  saveAdded(){
    var val = {
     id : this.companyList.id,
     Email : this.companyList.Email,
     Name : this.companyList.Name,
     totalEmployee : this.companyList.totalEmployee,
     totalBranch: this.companyList.totalBranch
     
    };
    this.service.addList(val).subscribe(res => {
      console.log('list addedd');
      this.toastr.success('Added SuccessFully!');
    });
  }
  saveUpdated(){
    var val = {
      id : this.companyList.id,
      Email : this.companyList.Email,
      Name : this.companyList.Name,
      totalEmployee : this.companyList.totalEmployee,
      totalBranch: this.companyList.totalBranch
     };
     this.service.editList(val).subscribe(res => {
       console.log('list updated');
       this.toastr.success('Updated SuccessFully!');

     });

  }
}
