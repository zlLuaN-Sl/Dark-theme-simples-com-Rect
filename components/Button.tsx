import { useTheme } from "@/contexts/ThemeContext";

type Props = {
    label: string;
    click: () => void;
}


export const Button = ({label, click}: Props) => {
    const themeCtx = useTheme();
    return (
        <button 
        className={`border px-4 py-3 rounded-md 
            ${themeCtx?.theme === 'dark' ? 
                'bg-white text-black' : 
                'bg-black text-white'
            }
            `}
        onClick={click}>
            {label}
        </button>
    )
}