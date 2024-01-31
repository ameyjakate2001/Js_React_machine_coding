import React, { useState, useRef, useEffect } from "react";

interface OtpLoginProps {
  length: number;
  onOtpSubmit: (otp: string) => void;
}

const OtpLogin = ({ length = 4, onOtpSubmit }: OtpLoginProps) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const onOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;
    if (isNaN(parseInt(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const onKeyDownChange = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && index > 0) {
      console.log("hi");

      // Handle backspace to go to the previous input field and clear its value
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleClick = (index: number) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  return (
    <form className="otp-form">
      {otp.map((value: string, index: number) => (
        <input
          key={index}
          type="text"
          ref={(input) => {
            console.log(input);
            return (inputRefs.current[index] = input!);
          }}
          value={value}
          onChange={(e) => onOtpChange(e, index)}
          onKeyDown={(e) => onKeyDownChange(e, index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </form>
  );
};

export default OtpLogin;
