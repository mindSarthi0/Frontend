import { ChangeEvent, useState } from "react";

interface Answers {
  id: number;
  answer: string;
}

interface ContactProps {
  backendApi: string;
  onSuccess: () => void;
  onFailed: () => void;
  answers: Answers[];
}

const ContactForm: React.FC<ContactProps> = ({
  backendApi,
  answers,
  onSuccess,
  onFailed,
}) => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    code: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const handleChangeInput = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    key: string,
    parser?: (val: string | number) => string | number
  ) => {
    const value: string = event.target.value;

    setInputData((prevData) => {
      return {
        ...prevData,
        [key]: typeof parser === "undefined" ? value : parser(value),
      };
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
    if (inputData.name === "") {
      handleChangeError("firstName", "Firstname cannot be empty");
      noError = false;
    }

    if (inputData.email === "") {
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

    return noError;
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!validate()) {
      return false;
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const finalPayload = {
      ...inputData,
      answers: answers,
    };

    const raw = JSON.stringify(finalPayload);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(`${backendApi}/submit`, requestOptions)
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

  return (
    <div>
      <div>
        <div className="flex space-x-[0px] sm:space-y-4 mb-[32px] flex-col">
          <div className="w-[100%]">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              className="w-full p-2 mt-1 appearance-none bg-transparent focus:outline-none border-b border-[#8D8D8D] focus:border-[black] text-black"
              value={inputData.name}
              placeholder="eg. Rahul"
              onChange={(event) => {
                handleChangeInput(event, "name");
              }}
            />
            <p className="text-[red]">{error.name}</p>
          </div>
          <div className="w-[100%]">
            <label className="block text-gray-700 font-semibold">Age</label>
            <input
              type="number"
              className="w-full p-2 mt-1 appearance-none bg-transparent focus:outline-none border-b border-[#8D8D8D] focus:border-[black] text-black"
              value={inputData.age}
              placeholder="eg. Rahul"
              onChange={(event) => {
                handleChangeInput(event, "age", (val) => {
                  if (val === "") return "";
                  return parseInt(val as string) as number;
                });
              }}
            />
            <p className="text-[red]">{error.age}</p>
          </div>
          <div className="w-[100%]">
            <label className="block text-gray-700 font-semibold">Gender</label>
            <input
              type="text"
              className="w-full p-2 mt-1 appearance-none bg-transparent focus:outline-none border-b border-[#8D8D8D] focus:border-[black] text-black"
              value={inputData.gender}
              placeholder="eg. male/female/noidea"
              onChange={(event) => {
                handleChangeInput(event, "gender");
              }}
            />
            <p className="text-[red]">{error.gender}</p>
          </div>
          <div className="w-[100%]">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 appearance-none bg-transparent focus:outline-none border-b border-[#8D8D8D] focus:border-[black] text-black"
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
      <button
        onClick={handleClick}
        className="bg-blue-700 text-white p-2 rounded-[4px]"
      >
        Sumit
      </button>
    </div>
  );
};

export default ContactForm;
