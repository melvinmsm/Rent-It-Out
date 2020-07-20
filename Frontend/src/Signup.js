import React from "react";
import "./App.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        Fname: "",
        Lname: "",
        Email: "",
        Password: "",
      },
      isSignedup: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    const user = this.state.user;

    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
    console.log(this.state.user);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const userDetails = this.state.user;

    console.log("userdetails", userDetails);
    axios.post("http://localhost:3001/traveller/signup", userDetails).then(
      (response) => {
        console.log(response.data.message);

        window.alert(response.data.message);
        this.setState({
          isSignedup: true,
        });
      },
      (error) => {
        window.alert("Please check again");
      },
    );
  };

  render() {
    let redirect = null;
    if (this.state.isSignedup) {
      redirect = <Redirect to="/home" />;
    }
    return (
      <div className="container">
        {redirect}
        <div className="signup-form">
          <div>
            <div>
              <div>
                <form name="form">
                  <div>
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="Fname"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="Lname"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="Password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group" id="LoginButtonDiv">
                    <button
                      onClick={this.handleSubmit}
                      className="btn btn-primary"
                      id="LoginButton"
                    >
                      Sign Me Up
                    </button>

                    <p id="smallLabel2">
                      We don't post anything without your permission. By
                      creating an account you are accepting our Terms and
                      Conditions and Privacy Policy.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
