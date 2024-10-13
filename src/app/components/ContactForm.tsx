import { ChangeEvent, useState } from "react";

interface ContactProps {
  abc?: string;
  onSuccess: () => void;
  onFailed: () => void;
}

const ContactForm: React.FC<ContactProps> = ({ onSuccess, onFailed }) => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    code: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChangeInput = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    key: string
  ) => {
    const value: string = event.target.value;

    setInputData((prevData) => {
      return { ...prevData, [key]: value };
    });

    handleChangeError(key, "");
  };

  const handleChangeError = (key: string, value: string) => {
    setError((prevData) => {
      return { ...prevData, [key]: value };
    });
  };

  const validate = () => {
    let noError = true;
    if (inputData.firstName === "") {
      handleChangeError("firstName", "Firstname cannot be empty");
      noError = false;
    }

    if (inputData.lastName === "") {
      handleChangeError("lastName", "Lastname cannot be empty");
      noError = false;
    }

    if (inputData.phone === "") {
      handleChangeError("phone", "phone cannot be empty");
      noError = false;
    }

    if (inputData.email === "") {
      handleChangeError("email", "Email cannot be empty");
      noError = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(inputData.email);
      if (!isValid) {
        handleChangeError("email", "Email should look like 'rahul@gmail.com'");
        noError = false;
      }
    }

    if (inputData.subject === "") {
      handleChangeError("subject", "Please select one of the subject");
      noError = false;
    }

    if (inputData.message === "") {
      handleChangeError(
        "message",
        "Tell us what are you looking for. Message cannot be empty"
      );
      noError = false;
    }

    return noError;
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!validate()) {
      return false;
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(inputData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(`${backendApi}/submit_form`, requestOptions)
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        }
        throw await response.json();
      })
      .then((result) => {
        console.log("Success:", result);
        onSuccess();
      })
      .catch(() => {
        onFailed();
      });
    // Your logic for handling the button click goes here
  };

  const backendApi = "http://localhost:5000";

  return (
    <div>
      <div>
        <div className="flex space-x-[0px] sm:space-x-4 mb-[32px] flex-col sm:flex-row">
          <div className="w-[100%] sm:w-1/2">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="email"
              className="p-2 mt-1 appearance-none bg-transparent focus:outline-none border-b border-[#8D8D8D] focus:border-[black] text-black"
              value={inputData.email}
              placeholder="eg. rahul@gmail.com"
              onChange={(event) => {
                handleChangeInput(event, "email");
              }}
            />
            <p className="text-[red]">{error.email}</p>
          </div>
          <div className="w-[100%] sm:w-1/2">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="p-2 mt-1 appearance-none bg-transparent focus:outline-none border-b border-[#8D8D8D] focus:border-[black] text-black"
              value={inputData.email}
              placeholder="eg. rahul@gmail.com"
              onChange={(event) => {
                handleChangeInput(event, "email");
              }}
            />
            <p className="text-[red]">{error.email}</p>
          </div>
          <div className="w-[100%] sm:w-1/2">
            <label className="block text-gray-700 font-semibold">Gender</label>
            <input
              type="email"
              className="p-2 mt-1 appearance-none bg-transparent focus:outline-none border-b border-[#8D8D8D] focus:border-[black] text-black"
              value={inputData.email}
              placeholder="eg. rahul@gmail.com"
              onChange={(event) => {
                handleChangeInput(event, "email");
              }}
            />
            <p className="text-[red]">{error.email}</p>
          </div>
          <div className="w-[100%] sm:w-1/2">
            <label className="block text-gray-700 font-semibold">Age</label>
            <input
              type="email"
              className="p-2 mt-1 appearance-none bg-transparent focus:outline-none border-b border-[#8D8D8D] focus:border-[black] text-black"
              value={inputData.email}
              placeholder="eg. rahul@gmail.com"
              onChange={(event) => {
                handleChangeInput(event, "email");
              }}
            />
            <p className="text-[red]">{error.email}</p>
          </div>
        </div>
      </div>
      <button onClick={handleClick}>Sumit</button>
    </div>
  );
};

export default ContactForm;
