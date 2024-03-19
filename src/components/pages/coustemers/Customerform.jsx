import React, { useEffect, useState } from 'react';
import { Input, customerbyId, updatePassword,Deleteuser } from '../../index';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

export default function Customerform() {
  const navigate = useNavigate()
  const { userid } = useParams();
  const initialPasswordState = {
    password: '',
    confirmPassword: '',
    userId: userid
  };
  
  const [password, setPassword] = useState(initialPasswordState);
  const [customeredit, setCustomeredit] = useState({});

  useEffect(() => {
    customerbyId({ userid }).then((res) => {
      setCustomeredit(res[0]);
    });
  }, [userid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  const validatePassword = (password) => {
    // Define the regular expression pattern for password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    
    // Test if the password matches the pattern
    return passwordRegex.test(password);
  };

  const updateClick = () => {
    // setPassword((prev) => ({ ...prev, userId: userid }));
    console.log(password);
    if (password.password !== password.confirmPassword) {
      console.error('Passwords do not match');
          toast.error('Password does not meet requirements')
    } else if (!validatePassword(password.password)) {
      console.error('Password does not meet requirements');
    } else {
      updatePassword(password)
        .then(() => {
          console.log('Password updated successfully');
          toast.success('Password updated successfully')
          // Reset password fields or perform any other necessary actions
          setPassword(initialPasswordState);
        })
        .catch((error) => {
          console.error('Error updating password:', error);
        });
    }
  };

  const userDelete=(userId)=>{
    Deleteuser({userId}).then((res)=>{
      toast.success("Delete Success")
      navigate("/customers")
    })
  }
  return (
    <div className="w-[90%]">
      <div className="w-full flex flex-col gap-4">
        <div className="w-[59%] border rounded-md flex flex-row gap-4 p-4">
          <div className="w-full flex flex-col gap-2">
            <h2>
              <strong>Identity</strong>
            </h2>
            <div className="w-full flex flex-row justify-between">
              <div>
                <Input
                  label="Enter first Name*"
                  placeholder="Enter Your name"
                  type="text"
                  value={customeredit.f_name}
                />
              </div>
              <div>
                <Input
                  label="Enter last Name*"
                  placeholder="Enter Your name"
                  type="text"
                  value={customeredit.l_name}
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="w-full flex flex-col gap-4">
                <Input
                  label="Enter Email*"
                  placeholder="Enter Email"
                  type="email"
                  value={decodeURIComponent(customeredit.email_address)}
                />
                <div className="">
                  <label className="form-control w-full ">
                    <div className="label">
                      <h2>
                        <strong>type</strong>
                      </h2>
                    </div>
                    <Input
                  label="Enter user type*"
                  placeholder="Enter type"
                  type="email"
                  value={customeredit.type}
                />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2>
                <strong>Change password</strong>
              </h2>
              <div className="w-full flex flex-row justify-between">
                <div className="">
                  <Input
                    label="password*"
                    placeholder="Enter Your password"
                    type="password"
                    name="password"
                    value={password.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <Input
                    label="Confirm password*"
                    placeholder="Enter confirm password"
                    type="password"
                    name="confirmPassword"
                    value={password.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-active btn-ghost" onClick={updateClick}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[59%] border flex flex-row justify-between p-4">
          <button className="btn btn-error text-white font-semibold rounded-full shadow-md" onClick={()=>userDelete(customeredit.userId)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
