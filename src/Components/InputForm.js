import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props){
    super(props);
    this.state={
      ID:"",
      Email:"",
      Username:"",
      Fullname:"",
      Department:"",
      Position:"",
      CreateDate:"",

    };
  };
  handleChange =(event)=>{
    let value = event.target.value;
    let name =  event.target.name;
    this.setState({
      [name]:value
    });
  };
  handleCreateAccount = ()=>{
    // alert("ID: "+this.state.ID );
    // alert("Email: "+this.state.Email );
    // alert("Username: "+this.state.Username );
    // alert("Fullname: "+this.state.Fullname );

    //     alert("Department: "+this.state.Department );
     //  alert("Position: "+this.state.Position );
      //   alert("CreateDate: "+this.state.CreateDate );
  let accountNew ={
    ID:this.state.ID,
Email:this.state.Email,
Username:this.state.Username ,
Fullname:this.state.Fullname,
Department:this.state.Department,
Position:this.state.Position,
CreateDate:this.state.CreateDate
  }
  this.props.onHandleCreateAccount(accountNew);
  };
  handleClose =()=>{

    this.props.onHandleClose();
  }
componentDidMount(){

  if(this.props.accountEdit){
    this.setState({
      ID:this.props.accountEdit.ID,
      Email:this.props.accountEdit.Email,
      Username:this.props.accountEdit.Username ,
      Fullname:this.props.accountEdit.Fullname,
      Department:this.props.accountEdit.Department,
      Position:this.props.accountEdit.Position,
      CreateDate:this.props.accountEdit.CreateDate
    })
  }
}
handleUpdate=()=>{
  
  this.props.onHandleUpdate(this.state);
}
handleReset=()=>{
  let accountReset ={
    ID:this.state.ID,
Email:this.state.Email,
Username:this.state.Username ,
Fullname:this.state.Fullname,
Department:this.state.Department,
Position:this.state.Position,
CreateDate:this.state.CreateDate
  }
  this.props.onHandleReset(accountReset);
 
}
    render() {
        return (
            <>
             {/* Input form */}
<div className="row">
      
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="form">
          <h3>Quản lý nhân viên</h3>  
          <form method="POST" id="Main_form_ID">
          <div className="form-group">
              <label >ID: </label>
              <input type="number"  className="form-control"    name='ID' value={this.state.ID} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
              <label >Email: </label>
              <input type="email"  className="form-control"   name='Email' value={this.state.Email} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
              <label >Username: </label>
              <input type="text"  className="form-control"    name='Username' value={this.state.Username} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
              <label >Fullname: </label>
              <input type="text"  className="form-control"    name='Fullname' value={this.state.Fullname} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="sel1">Select a Department:</label>
            <select className="form-control" id="Department_ID" name="Department" value={this.state.Department} onChange={this.handleChange}>
              <option>--Select a Department--</option>
              <option>Accounting</option>
              <option>Business Development</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Research and Development</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sel1">Select a Position:</label>
            <select className="form-control" id="Position_ID" name="Position" value={this.state.Position} onChange={this.handleChange}>
              <option>--Select a Position--</option>
              <option>Developer</option>
              <option>Tester</option>
              <option>Scrum Master</option>
              <option>PM</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Cretate Date: </label>
            <input type="date"  className="form-control" id="CreateDate_ID" name="CreateDate" value={this.state.CreateDate} onChange={this.handleChange}></input>
          </div>


           <div className="form-group">
              <input type="button" className="btn btn-success" value="Create Account" onClick={this.handleCreateAccount}/>
              <input type="button" className="btn btn-success" value="Update" onClick={this.handleUpdate}/>
              <input type="button" className="btn btn-success" value="Reset" onClick={this.handleReset}/>
              
              
              
              <input type="button" className="btn btn-danger" value="Close" onClick={this.handleClose}/>
          </div>
      </form>
      </div>


      </div>
  
    </div>   
            </>
        );
    }
}

export default InputForm;