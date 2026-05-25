import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

export default function ScrollTopButton() {

  const [show,setShow] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 300){
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
  },[]);

  const goTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };

  if(!show) return null;

  return (
    <Fab
      onClick={goTop}
      sx={{
        position:"fixed",
        bottom:30,
        right:30,
        bgcolor:"#ffc107",
        color:"#fff",
        zIndex:9999,
        boxShadow:"0 8px 20px rgba(52,152,219,0.4)",
        "&:hover":{
          bgcolor:"#ffc107"
        }
      }}
    > 
      <KeyboardArrowUpIcon/>
    </Fab>
  );
}