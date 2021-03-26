import { Component, OnInit } from '@angular/core';
import { SharedService } from '../sharedservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.scss']
})
export class ShowCompanyComponent implements OnInit {

  
  title = 'AngularAssignment';
  constructor(private service : SharedService,private toastr: ToastrService){}
  getListData : any;
  getBranchList : any;
  companyList : any;

  ActivateAddEditServiceComp = false;
  ngOnInit(): void {
   this.refreshList();
   
  }
  refreshList(){
    this.service.getList().subscribe(data=>{
      console.log('data', data);
      this.getListData = data;

      // this.getBranchList = this.getListData.companyBarnch;
      console.log('this.getBranchList',this.getBranchList);
      this.companyList = data;
    });
  }
  
  addList(){
    this.ActivateAddEditServiceComp = true;
    console.log('addlist wokring');
  }
  editList(val: any){
    this.companyList = val;
    this.ActivateAddEditServiceComp = true;
  }
  deleteList(val : any){
    this.service.deleteList(val.id).subscribe(data=>{
      this.refreshList();
      this.toastr.success('deleted','',{
        timeOut: 2000,
      });
    });
  }
  closeClick(){
    this.ActivateAddEditServiceComp = false;
    this.refreshList();
  }

  private loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
    }
}
