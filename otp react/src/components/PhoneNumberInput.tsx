import { useState } from "react";
import OtpLogin from "./OtpLogin";
const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }
    setShowOtp(true);
  };
  return (
    <div>
      {!showOtp ? (
        <form onSubmit={(event) => onSubmit(event)}>
          <input
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            placeholder="Enter your phone number"
          />
          <button>Submit</button>
        </form>
      ) : (
        <OtpLogin length={5} onOtpSubmit={(otp) => console.log(otp)} />
      )}
    </div>
  );
};
export default PhoneNumberInput;
