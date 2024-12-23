import { useState } from "react";
import Logo from "../../assets/logo.png";
import SignInButton from "../../shared/SignInButton";

const signInItemsSAAS = [
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 16 16" id="github">
      <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
    </svg>),
    text: "Sign in with GitHub"
  },
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="bitbucket">
      <path fill="#2680F8" d="M4.297 23h15.659a.776.776 0 0 0 .769-.657L23.99 1.916a.78.78 0 0 0-.635-.897 1.13 1.13 0 0 0-.134-.009L.779 1A.775.775 0 0 0 0 1.775c0 .044.005.093.009.137l3.265 20.196c.082.509.515.887 1.023.892zM15.736 8.391l-1.211 7.205h-5L8.173 8.391h7.563z"></path>
    </svg>),
    text: "Sign in with Bitbucket"
  },
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="azure-devops">
      <polygon fill="#0075D1" points="2.966 8.331 18.021 5.403 10.652 0 10.652 2.476 2.247 5.899 0 8.871 0 15.714 2.966 16.57 2.966 8.331"></polygon>
      <polygon fill="#0075D1" points="8.944 20.939 18.247 24 24 19.092 24 4.412 18.023 5.403 18.023 18.372 2.966 16.57 8.944 24 8.944 20.939"></polygon>
      <polygon fill="#0066B6" points="10.652 0 10.652 2.476 2.247 5.899 0 8.871 0 15.714 2.966 16.57 2.966 8.331 12 6.574 12 .988 10.652 0"></polygon>
      <polygon fill="#0066B6" points="2.966 16.57 8.944 24 8.944 20.939 12 21.944 12 17.651 2.966 16.57"></polygon>
    </svg>),
    text: "Sign in with Azure Devops"
  },
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="gitlab">
      <path fill="#FC6D26" d="M126.615 72.31l-7.034-21.647L105.64 7.76c-.716-2.206-3.84-2.206-4.556 0l-13.94 42.903H40.856L26.916 7.76c-.717-2.206-3.84-2.206-4.557 0L8.42 50.664 1.385 72.31a4.792 4.792 0 0 0 1.74 5.358L64 121.894l60.874-44.227a4.793 4.793 0 0 0 1.74-5.357"></path>
      <path fill="#E24329" d="M64 121.894l23.144-71.23H40.856L64 121.893z"></path>
      <path fill="#FC6D26" d="M64 121.894l-23.144-71.23H8.42L64 121.893z"></path>
      <path fill="#FCA326" d="M8.42 50.663L1.384 72.31a4.79 4.79 0 0 0 1.74 5.357L64 121.894 8.42 50.664z"></path>
      <path fill="#E24329" d="M8.42 50.663h32.436L26.916 7.76c-.717-2.206-3.84-2.206-4.557 0L8.42 50.664z"></path>
      <path fill="#FC6D26" d="M64 121.894l23.144-71.23h32.437L64 121.893z"></path>
      <path fill="#FCA326" d="M119.58 50.663l7.035 21.647a4.79 4.79 0 0 1-1.74 5.357L64 121.894l55.58-71.23z"></path>
      <path fill="#E24329" d="M119.58 50.663H87.145l13.94-42.902c.717-2.206 3.84-2.206 4.557 0l13.94 42.903z"></path>
    </svg>),
    text: "Sign in with GitLab"
  }
];

const signInItemsSH = [
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="gitlab">
      <path fill="#FC6D26" d="M126.615 72.31l-7.034-21.647L105.64 7.76c-.716-2.206-3.84-2.206-4.556 0l-13.94 42.903H40.856L26.916 7.76c-.717-2.206-3.84-2.206-4.557 0L8.42 50.664 1.385 72.31a4.792 4.792 0 0 0 1.74 5.358L64 121.894l60.874-44.227a4.793 4.793 0 0 0 1.74-5.357"></path>
      <path fill="#E24329" d="M64 121.894l23.144-71.23H40.856L64 121.893z"></path>
      <path fill="#FC6D26" d="M64 121.894l-23.144-71.23H8.42L64 121.893z"></path>
      <path fill="#FCA326" d="M8.42 50.663L1.384 72.31a4.79 4.79 0 0 0 1.74 5.357L64 121.894 8.42 50.664z"></path>
      <path fill="#E24329" d="M8.42 50.663h32.436L26.916 7.76c-.717-2.206-3.84-2.206-4.557 0L8.42 50.664z"></path>
      <path fill="#FC6D26" d="M64 121.894l23.144-71.23h32.437L64 121.893z"></path>
      <path fill="#FCA326" d="M119.58 50.663l7.035 21.647a4.79 4.79 0 0 1-1.74 5.357L64 121.894l55.58-71.23z"></path>
      <path fill="#E24329" d="M119.58 50.663H87.145l13.94-42.902c.717-2.206 3.84-2.206 4.557 0l13.94 42.903z"></path>
    </svg>),
    text: "Self Hosted GitLab"
  },
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="key">
      <path d="M43.61 4.39A15 15 0 0 0 19 20.49L1.46 38.12C-.38 40 0 41.53 0 47a1 1 0 0 0 1 1h7.5a2.5 2.5 0 0 0 2.5-2.5.5.5 0 0 1 .5-.5h1a2.5 2.5 0 0 0 2.5-2.5c0-2.56-.31-1.78 1.27-3.35.19-.2.19-.15 2.23-.15a2.5 2.5 0 0 0 2.5-2.5v-1.88c0-.29-.33.13 5.71-5.91.12-.13-.17-.13.82.25A14.88 14.88 0 0 0 33 30c13.43 0 20-16.26 10.61-25.61ZM19 36.5c0 .63-.55.5-2.38.5-1.24 0-1.76.72-2.89 1.85-1.52 1.52-.05 4.15-1.23 4.15h-1A2.5 2.5 0 0 0 9 45.5a.5.5 0 0 1-.5.5H2v-4.35c0-1.73-.36-.88 18-19.25a15.12 15.12 0 0 0 1.76 2.46L5.79 40.79a1 1 0 0 0 .71 1.71c.59 0-.69 1.11 16.64-16.22a14.65 14.65 0 0 0 1.8 1.36C18.31 34.28 19 32.83 19 36.5Zm23.19-12.31a13 13 0 1 1 0-18.38 13 13 0 0 1 0 18.38Z"></path>
      <path d="M38 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"></path>
    </svg>),
    text: "Sign in with SSO"
  },
]

const Right = () => {

  const [selfHosted, setSelfHosted] = useState(false);

  return (
    <div className="bg-[#FAFAFA] h-screen w-full flex flex-col items-center justify-center">

      <div className="md:w-[672px] rounded-lg border-[1px] bg-white mx-auto">
        <div className="p-6 border-b-[1px]">
          <div className="flex flex-col items-center justify-between gap-5 mb-6">
            <img src={Logo} alt="logo" width={200} />
            <h2 className="text-[#181D27] font-semibold text-3xl">Welcome to CodeAnt AI</h2>
          </div>
          <div className="bg-[#FAFAFA] text-[#414651] font-medium rounded-md flex border-[1px] ">
            <button className={`${selfHosted ? "" : "bg-[#1570EF] text-white"} rounded-md w-full p-4`} onClick={() => setSelfHosted(false)}>
              SAAS
            </button>
            <button className={`${selfHosted ? "bg-[#1570EF] text-white" : ""} rounded-md w-full p-4`} onClick={() => setSelfHosted(true)} >
              Self Hosted
            </button>
          </div>
        </div>

        <div className="h-[312px] flex flex-col items-center gap-4 p-4">

          {
            selfHosted ?

              (
                signInItemsSH.map((item, index) => (
                  <SignInButton key={index} icon={item.icon} text={item.text} />
                ))
              )
              :
              (
                signInItemsSAAS.map((item, index) => (
                  <SignInButton key={index} icon={item.icon} text={item.text} />
                ))
              )

          }

        </div>
      </div >

      <p className="text-center text-[#181D27] mt-6">By signing up you agree to the <span className="font-bold">Privacy Policy</span>.</p>

    </div >
  )
}

export default Right