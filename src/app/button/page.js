import React from "react";
import Button from "@/components/button";
import DeleteIcon from "@/public/icons/delete.svg";
import PlusIcon from "@/public/icons/plus.svg";
import FacebookIcon from "@/public/icons/facebook.svg";
import CloseIcon from "@/public/icons/close.svg";
import DuplicateIcon from "@/public/icons/duplicate.svg"
import Card from "@/components/Card/card";
import phoneIcon from "@/public/icons/phone.svg"
import AppleIcon from "@/public/icons/apple.svg"
import GmailIcon from "@/public/icons/Gmaillogo.svg"
import OutlookIcon from "@/public/icons/outlooklogo.svg"
import Applewhite from "@/public/icons/applewhite.svg"


export default function hello() {
  return (
    <div>
      <Card callbtn={<Button title="btn with header with close" color="text1" />} name="verify email" varient="closebtn" header="header" >
			{/* <input type="text" placeholder="hello" />
			<Button title="abc" color="text1" /> */}
		</Card>
    <Card callbtn={<Button title="btn without close" color="text1" />} name="verify email" varient="closebtn--no" header="header" >
			<input type="text" placeholder="hello" />
			<Button title="abc" color="text1" />
		</Card>
    <Card callbtn={<Button title="btn with header with close" color="text1" />} name="abcdfghj" varient="closebtn" header="header--left" >
			<input type="text" placeholder="hello" />
			<Button title="abc" color="text1" />
		</Card>
    <Card callbtn={<Button title="leftHeader" color="text1" />} name="abcdfghj" varient="closebtn--no" header="header--onlyleft" >
			<input type="text" placeholder="hello" />
			<Button title="abc" color="text1" />
		</Card>
      <Button title="Delete Contact" color="error" startIcon={DeleteIcon} size="small"/>
      <Button title="Register Now"/>
      <Button title="login" color="outlined"/>
      <Button title="Download app" color="text"/>
      <Button title="Download app" color="text1"/>
      <Button title="Download app" color="text2"/>
      <Button title="Apple mail imac" startIcon={AppleIcon} color="text4"/>
      <Button title="EmailWeb" startIcon={GmailIcon} color="text4"/>
      <Button title="Outlook Web" startIcon={OutlookIcon} color="text4"/>
      <Button title="Try on Web" color="contained"/>
      <Button title="Cancel" color="withdraw"/>
      <Button title="Change" color="outlined2"/>
      <Button title="Add card" startIcon={PlusIcon} size="small"/>
      <Button title="" startIcon={FacebookIcon} color="icon" size="large"/>
      <Button title="Facebook" startIcon={FacebookIcon} color="icon2" size="small"/>
      <Button title="Subscribe now" color="subscribe"/>
      <Button title="Currently using" color="using"/>
      <Button startIcon={PlusIcon} color="icon" size="large"/>
      <Button title="Mobile Number" startIcon={phoneIcon} color="text3" size="large"/>
      <Button startIcon={CloseIcon} color="close" size="small"/> 
      <Button endIcon={DuplicateIcon}  title="Duplicate Item"color="text5"/>
      <Button endIcon={DeleteIcon}  title="Delete Card"color="deleteCard"/> 
      <Button title="EmailWeb" startIcon={Applewhite} color="blackbutton"/>
      <Button title="Currently using" color="blacktextbutton"/>
      
    </div>
  );
}
