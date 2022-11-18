import MenuSideBar from "Components/SideBar/MenuSideBar";
import SideBar from "Components/SideBar/SideBar";
import React, { useState } from "react";

const LayoutForm = ({ children }) => {
	const [open, setOpen] = useState(true);

	return (
		<div className="bg-slate-300 w-full h-screen mx-auto flex-col justify-center items-center ">
			<MenuSideBar setOpen={setOpen} open={open} />
			<div className="flex">
				<SideBar open={open} />
				{children}
			</div>
		</div>
	);
};

export default LayoutForm;
