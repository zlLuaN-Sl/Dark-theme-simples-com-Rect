import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const HeaderSection = () => {

    const themeCtx = useContext(ThemeContext);

    const handlToggle = () => {

        

    }


    return(
        <div className=''>
            <div className=" ">
                <h1 className="text-3xl mb-5">Título da página</h1>
                <p>Conteúdo da página</p>
                <button className="">Clique Aqui</button>
            </div>

            <div className="m-auto">
                <button onClick={handlToggle} className="cursor-pointer">Mudar Para Light</button>
            </div>
            
        </div>
    )
};