import { useState, useRef, useEffect } from "react";
import "./styles.css";

const DIGIT_SIZE = 5;
export default function App() {
  const [otpArr, setOtpArr] = useState<Array<String>>(
    new Array(DIGIT_SIZE).fill("")
  );
  const refArr = useRef(new Array(DIGIT_SIZE));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newArr = [...otpArr];
    console.log(typeof e.target.value);
    if (isNaN(e.target.value)) return;

    newArr[id] = e.target.value.slice(-1);

    setOtpArr(newArr);
    if (newArr[id] != "") {
      refArr.current[id + 1]?.focus();
    }
  };

  const handleKeyUp = (e, id) => {
    console.log(e.key);
    if (e.key == "Backspace") {
      refArr.current[id - 1]?.focus();
    }
  };

  useEffect(() => {
    // refArr.current[0]?.focus();
  }, []);
  return (
    <div className="App">
      <h1>Enter your OTP</h1>
      {otpArr.map((val, id) => {
        return (
          <input
            type="text"
            onChange={(e) => handleChange(e, id)}
            className={otpArr[id] != "" ? "otp-input grey" : "otp-input"}
            ref={(input) => (refArr.current[id] = input)}
            key={id}
            value={otpArr[id]}
            onKeyUp={(e) => handleKeyUp(e, id)}
          />
        );
      })}
    </div>
  );
}

