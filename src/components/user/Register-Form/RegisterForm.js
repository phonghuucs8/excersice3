import React, { Fragment, useState } from'react';
const RegisterForm = ()=>{ 
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        
    })

    const onChangeName = e => {

        data.name = e.target.value

        setData(s => ({
            ...s, 
            name: data.name
        }))
      
    }
    const onChangeEmail = e =>{
        data.email = e.target.value
        
        setData(s =>({
            ...s,
            email: data.email,
        }))
    }
    const onChangePhone = e => {
        data.phone = e.target.value
    
        setData(s => ({
            ...s,
            phone: data.phone
        }))
    }

    const onChangePassword = e =>{
        data.password = e.target.value

        setData(s => ({
            ...s,
            password: data.password
        }))
    }

    const onChangeCfrpassword = e =>{
        data.cfrpassword = e.target.value

        setData(s => ({
            ...s,
            cfrpassword: data.cfrpassword
        }))
    }
    // document.write(data.name)
    return (

    <Fragment>
        <h1> REGISTER FORM </h1>
        <div className='Form-Reg'>
            <div className='container'>
                <div className='row'>
                <form className="form-horizontal" id="contact-form">
                    <div className="control-group">
                    <label className="control-label" htmlFor="name">Full Name</label>
                    <div className="controls">
                        <input type="text" name="name" placeholder="Your name" onChange={e => onChangeName(e)}/>
                        {data.name.length === 0 ? <span> Please enter your name</span> : data.name}
                    </div>
                    </div>
                    <div className="control-group">
                    <label className="control-label" htmlFor="email">Email Address</label>
                    <div className="controls">
                        <input type="text" name="email" id="email" placeholder="Your email address"  onChange={e => onChangeEmail(e)} />
                        {data.email.length > 2 && data.email.includes('@') && data.email.includes('.') && (data.email.indexOf('.') > data.email.indexOf('@') + 1)  ? <span>{data.email}</span> : <span> Email Invalid</span> }                      
                    </div>
                    </div>
                    
                    <div className="control-group">
                    <label className="control-label" htmlFor="numberphone">Number Phone</label>
                    <div className="controls">
                        <input type='text' id='phone' pattern='/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm' name='phone' onChange={e => onChangePhone(e)}></input>
                        {/^\d{10}$/.test(data.phone)  ? <span>{data.phone}</span> : <span> Phone Invalid </span> } 
                    </div>
                    </div>
                    <div className="control-group">
                    <label className="control-label" htmlFor="password">PassWord</label>
                    <div className="controls">
                        <input type='password' id='password' name='password' onChange={e => onChangePassword(e)}></input>
                        {data.password.length > 6  && data.password.match(/[A-Z]/g)  && data.password.match(/[a-z]/g) && data.password.match(/[0-9]/g) ? <span>{data.password}</span> : <span> Password Invalid</span>}
                    </div>
                    
                    </div>
                    <div className="control-group">
                    <label className="control-label" htmlFor="Re-password">Repeat PassWord</label>
                    <div className="controls">
                        <input type='password' id='cfrpassword' name='cfrpassword' onChange = {e => onChangeCfrpassword(e)}></input>
                        {data.cfrpassword !== data.password ? <span> Password do not match</span> : <span>{data.cfrpassword}</span>}
                    </div>
                    </div>
                    <div className = 'sum-control-group'>
                        <div className="control-group control-group1">
                        <label className="control-label" htmlFor="Gender">Gender</label>
                        <div className="controls">
                            <select id="Gender" name="Gender">
                            <option value="male" select ='selected'>Male</option>
                            <option value="female">Female</option>
                            <option value="female">Other</option>
                            </select>
                        </div>
                        </div>
                        <div className="control-group control-group2">
                        <label className="control-Bday" htmlFor="Bday">Birth Day</label>
                        <div className="controls">
                            <input type='date' id='date' name='date'></input>
                        </div>
                        </div>
                    </div>
                    <div className="form-actions">
               
                    <button type="submit" className="btn btn-success">Register</button>
                    <button type="reset" className="btn">Cancel</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </Fragment>
    )
}


export default RegisterForm