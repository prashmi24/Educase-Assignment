import React from "react";
import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <div className="wrapper create-acc">
      <h1>
        Create your <br /> PopX account
      </h1>
      <form>
        <div class="forminput">
          <label for="input" class="text">
            Full Name<span className="req">*</span>
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            name="input"
            class="input"
          />
        </div>

        <div class="forminput">
          <label for="input" class="text">
            Phone number<span className="req">*</span>
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            name="input"
            class="input"
          />
        </div>
        <div class="forminput">
          <label for="input" class="text">
            Email address<span className="req">*</span>
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            name="input"
            class="input"
          />
        </div>
        <div class="forminput">
          <label for="input" class="text">
            Password<span className="req">*</span>
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            name="input"
            class="input"
          />
        </div>
        <div class="forminput">
          <label for="input" class="text">
            Company name<span className="req">*</span>
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            name="input"
            class="input"
          />
        </div>
        <div className="radio">
          <p>
            Are you an agency?<span className="req">*</span>
          </p>

          <input type="radio" name="radio" id="yes" />
          <label for="#yes" class="radio-btn">
            Yes
          </label>

          <input type="radio" name="radio" id="no" value="none" />
          <label for="#no" class="radio-btn">
            No
          </label>
        </div>
      </form>
      <div className="btn-4">
        <Link to="/settings">
          <button>Create Account</button>
        </Link>
      </div>
    </div>
  );
}

export default CreateAccount;
