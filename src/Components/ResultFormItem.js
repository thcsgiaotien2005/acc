import React, { Component } from 'react';

class ResultFormItem extends Component {
    constructor(props){
        super(props);
    

    }
    handleDelete=(idDelete)=>{
this.props.onHandleDelete(idDelete);
    }
    handleEdit=(idEdit)=>{
      this.props.onhandleEdit(idEdit);
    }
    render() {
        // Nhận lại list Account từ App
        let {listAccount} = this.props;
   //     console.log("ListAccout",listAccount);
  let item = listAccount.map((account,index)=>{
    return (
        <tr key={index}>
        <td>{account.ID}</td>
        <td>{account.Email}</td>
        <td>{account.Username}</td>

        <td>{account.Fullname}</td>
        <td>{account.Department}</td>
        <td>{account.Position}</td>
        <td>{account.CreateDate}</td>
        <td>
          
          <button type="button" className="btn btn-large btn-block btn-warning" onClick={()=>{this.handleEdit(account.ID)}}>Edit </button>
          
        </td>
        <td>
        <button type="button" className="btn btn-large btn-block btn-warning" onClick={()=>{this.handleDelete(account.ID)}}>Delete</button>
        </td>
      </tr>
    )
   }) 
        return item;
    }
}

export default ResultFormItem;