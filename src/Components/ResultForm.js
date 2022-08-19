import React, { Component } from 'react';
import ResultFormItem from './ResultFormItem';
class ResultForm extends Component {
    render() {
      
        return (
            <>
                     <div className="form">
      <h3>Thông tin nhân viên trên hệ thống</h3>  
      
      <table className="table table-hover" id="Detail_Staff_ID" >
        <thead>
          <tr>
            
              <th>ID   
              </th>
              <th>Email  
              </th>
              <th>Username 
              </th>
              <th>Fullname 
              </th>
              <th>Department  
              </th>
              <th>Position  
              </th>   
              <th>Cretate Date 
              </th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>
        <tbody id="Result_TB">
          <ResultFormItem listAccount={this.props.listAccount}  onHandleDelete={this.props.onHandleDelete} onhandleEdit={this.props.onhandleEdit}
          // ID="1"
          // Email="thcsgiaotien2005@gmail.com"
          // Username="vuquocnghia"
          // Fullname="Vũ Quốc Nghĩa"
          // Department="Sale"
          // Position="Dev"
         // CreateDate="2202-07-03"
          
          />
          
        </tbody>
      </table>
   

      </div> 
            </>
        );
    }
}

export default ResultForm;