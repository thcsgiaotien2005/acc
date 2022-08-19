

import React, { Component } from 'react';

import InputForm from './Components/InputForm';
import ResultForm from './Components/ResultForm';
import './App.css';
import Search from './Components/Search';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
listAccount: [],
showInputForm: false, 
accountEdit:null  ,
accountReset:null  ,
showSearchInput:true,
list_result_search:[],

 // status Input Form
 search_Key:null
    }}

    componentDidMount(){

      if (localStorage && localStorage.getItem("listAccount")) {
        let listAccount_local =  JSON.parse(localStorage.getItem("listAccount"))   ;
        this.setState({
          listAccount: listAccount_local,
        })
       
      }

}
     handleSaveLocal =()=>{
      let  listAccount = [
        
      ];
      localStorage.setItem("listAccount",JSON.stringify(listAccount) );
        this.setState({
          listAccount : listAccount
        })
      }
      
      //
        handleCreateAccount =()=>{
          this.setState({
            showInputForm: true,
            showSearchInput:false
          })
       };
      
      
       //
        onHandleCreateAccount=(accountNew)=>{
      
            let listAccountNew = this.state.listAccount;
            listAccountNew.push(accountNew);
            this.setState({
              listAccount: listAccountNew,
              showInputForm: false,
              showSearchInput:true
            });
            localStorage.setItem("listAccount",JSON.stringify(listAccountNew) );
       }
      
        onHandleDelete =(idDelete)=>{
        let listAccount_ = this.state.listAccount;
      
       let indexDel = listAccount_.findIndex((account) => account.ID === idDelete);
        listAccount_.splice(indexDel,1);
      
        this.setState({
          listAccount: listAccount_,
        });
        localStorage.setItem("listAccount",JSON.stringify(listAccount_) );
       }
      
      //
        onHandleClose =()=>{
      
      this.setState({
        showInputForm: false,
        showSearchInput:true
      })
       }
       // Check status
       onhandleEdit =(idEdit)=>{
        let listAccounts = this.state.listAccount;
        let indexAccountEdit = listAccounts.findIndex((account)=> account.ID ===idEdit);
        console.log(indexAccountEdit);
        if(indexAccountEdit !== -1){
          this.setState({
            showInputForm:true,
            showSearchInput:false
          })
        }
        let accountEdit = listAccounts[indexAccountEdit];
        this.setState({
          accountEdit: accountEdit
        })
        
          }

          onHandleUpdate=(data)=>{
           
console.log(data);
let listAccounts = this.state.listAccount;
let indexAccountUpdate = listAccounts.findIndex((account)=> account.ID === data.ID);
if(indexAccountUpdate !== -1){

  listAccounts[indexAccountUpdate] = data;
  this.setState({
    listAccount:listAccounts,
    showInputForm:false,
    showSearchInput:true
  })
  localStorage.setItem("listAccount",JSON.stringify(listAccounts) );
}

          }
          onHandleReset=(accountReset)=>{
           
           this.setState({
            accountReset: accountReset,
           })
this.state.accountReset ="";
       }
       onSearchForm=(search_Key)=>{
    
this.setState({
  search_Key:search_Key,
})
       }
          
  render() {
  let listAccount =  this.state.listAccount;
  let accountEdit = this.state.accountEdit;
  let inputSearchForm="";
    let inputForm ="";

//

if(this.state.showInputForm){
 inputForm = <InputForm onHandleClose={this.onHandleClose}  onHandleCreateAccount={this.onHandleCreateAccount} accountEdit={accountEdit}
 onHandleUpdate ={this.onHandleUpdate}
 onHandleReset ={this.onHandleReset}
 />

}
if(this.state.showSearchInput){
  inputSearchForm = <Search onSearchForm={this.onSearchForm} onhandleCloseSearch={this.onhandleCloseSearch}
  onHandleClose={this.onHandleClose} onHandleCreateAccount={this.onHandleCreateAccount} accountEdit={accountEdit}
 onHandleUpdate ={this.onHandleUpdate}
 onHandleReset ={this.onHandleReset}
  />
}
let search_Key = this.state.search_Key;

if (search_Key) {
  let listAccounts_filter = [];
  for (let index = 0; index < listAccount.length; index++) {
    // Sử dụng hàm includes để so sánh chuỗi, if chuỗi cha bao gồm chuỗi con sẽ trả về true, https://www.w3schools.com/jsref/jsref_includes.asp
    if (
      listAccount[index].ID.toLowerCase().includes(search_Key.toLowerCase()) ||
      listAccount[index].Email.toLowerCase().includes(search_Key.toLowerCase()) ||
      listAccount[index].Username.toLowerCase().includes(search_Key.toLowerCase()) ||
      listAccount[index].Fullname.toLowerCase().includes(search_Key.toLowerCase()) ||
      listAccount[index].Department.toLowerCase().includes(search_Key.toLowerCase()) ||
      listAccount[index].Position.toLowerCase().includes(search_Key.toLowerCase()) ||
      listAccount[index].CreateDate.toLowerCase().includes(search_Key.toLowerCase())
    ) {
      listAccounts_filter.push(listAccount[index]); // Lấy các phần tử thỏa mãn đk search_key lưu vào listAccounts_filter trung gian
    }
  }
 listAccount = listAccounts_filter;

}


    return (
<div className='container'>
  <br/>
  <button type="button" className="btn btn-danger" onClick={this.handleSaveLocal}>Create date Local Storage</button>
  
  <button type="button" className="btn btn-success" onClick={this.handleCreateAccount}>Create Acc</button>

  {/* <InputForm/> */}

      {inputSearchForm}
      {inputForm}
      {/* Result form */}
<ResultForm listAccount={listAccount}  onHandleDelete={this.onHandleDelete} onhandleEdit={this.onhandleEdit}/> 
</div>
    );
  }
}

export default App;
