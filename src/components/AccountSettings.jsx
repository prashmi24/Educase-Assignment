import React from "react";

class AccountSettings extends React.Component {
  state = {
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    profilePicture: "/src/assets/Ellipse 114.png",
  };

  render() {
    return (
      <div className="wrapper acc-settings">
        <div className="acc-heading">
          <h1>Account Settings</h1>
        </div>
        <div className="profile-section">
          <div className="section-1">
            <img
              src={this.state.profilePicture}
              alt="Profile"
              className="profile-picture"
            />
            <span>
              {" "}
              <img
                src="/src/assets/Group 1585.svg"
                alt="camera"
                className="camera"
              />
            </span>

            <div className="name-email">
              <h2>{this.state.name}</h2>
              <p>{this.state.email}</p>
            </div>
          </div>
          <div>
            <p className="info">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountSettings;
