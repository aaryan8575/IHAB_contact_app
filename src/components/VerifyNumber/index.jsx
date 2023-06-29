"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import Typography from "../Typography";

const VarifyNumber = () => {
	const [otp, setOtp] = useState(new Array(4).fill(""));
	return (
		<div
			className={`z-50 absolute top-0 left-0 w-screen min-h-screen ${style.bgBlur} flex justify-center items-center`}
		>
			<div className="bg-white p-10 rounded-2xl flex flex-col gap-10">
				<div className="text-primary flex flex-col gap-2">
					<Typography variant="h5">Verify number</Typography>
					<Typography className="opacity-70" variant="body3">
						<span>Enter code received to number ending with</span>
						<span>0025</span>
					</Typography>
				</div>
				<div className="flex flex-col items-center gap-4 w-full text-primary">
					<div>
						<form
							className={`${style.inputContainer} otpContainer`}
						>
							{otp?.map((item, index) => {
								return (
									<React.Fragment key={index}>
										<input
											className={`${style.otp} ${style.digitInput}`}
											key={index}
											id={`otp${index}`}
											name={`otp${index}`}
											type="number"
											maxLength={1}
											step={1}
										/>
										<label
											className="hidden"
											htmlFor={`otp${index}`}
										>
											{`otp digit ${index + 1}`}
										</label>
									</React.Fragment>
								);
							})}
						</form>
					</div>
					<span>
						<button>Send OTP Again</button>
					</span>
				</div>
				<div className="flex justify-center items-center pt-10">
					<button className="bg-primary rounded-xl p-4 px-6 w-[70%] text-white">
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default VarifyNumber;
