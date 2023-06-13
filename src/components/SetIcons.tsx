import {cloneElement} from "react";
import { DiReact, DiJavascript1, DiGit } from "react-icons/di";
import { FaPhp, FaUbuntu, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMysql, SiCsharp, SiDart, SiFlutter } from "react-icons/si";
// import { IconContext } from "react-icons/lib";

interface IconsFactoryProps {
    name: string;
    icon: JSX.Element;
}
function IconsFactory(props: IconsFactoryProps) {
    const icon = cloneElement(props.icon, {
        className: "w-10 h-10"
    });
    return(
        <div className="flex flex-col justify-center items-center bg-green-500 w-[5rem] h-[5rem] rounded-lg">
            {icon}
            <p className="text-md font-bold text-black">{props.name}</p>
        </div>
    ); 
}

export default function SetIcons(){
    return (
        <div className="grid grid-flow-row grid-cols-4 gap-6 ">
            {/* <IconContext.Provider value={{color: "yellow"}}> </IconContext.Provider> */}
                <IconsFactory name="Javascript" icon={<DiJavascript1/>}/>
                <IconsFactory name="HTML" icon={<FaHtml5/>}/>
                <IconsFactory name="CSS" icon={<FaCss3Alt/>}/>
                <IconsFactory name="C#" icon={<SiCsharp/>}/>
                <IconsFactory name="Dart" icon={<SiDart/>}/>
                <IconsFactory name="PHP" icon={<FaPhp/>}/>
                <IconsFactory name="Git" icon={<DiGit/>}/>
                <IconsFactory name="Linux" icon={<FaUbuntu/>}/>
                <IconsFactory name="MySQL" icon={<SiMysql/>}/>
                <IconsFactory name="React JS" icon={<DiReact/>}/>
                <IconsFactory name="Flutter" icon={<SiFlutter/>}/>
        </div>
    )
}