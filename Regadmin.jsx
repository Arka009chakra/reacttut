import React, { useState } from 'react';
import { useNavigate } from 'react-router';
function Regadmin() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [psw, setPsw] = useState("");

    function test(e) {
        e.preventDefault();
        fetch('http://localhost:5485/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                psw: psw
            })
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            alert(data.message);
            navigate('/signin')
        })
        .catch(function() {
            alert("Check Your Credentials!!");
        });
    }

    return (
        <div className="container-fluid">
            <div className="text-center">
                <h1>
                    Grow Your Skill With<br />
                    <strong className="brand-name">ArkaTechnical</strong>
                </h1>
            </div>
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={test}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPsw(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Regadmin;
