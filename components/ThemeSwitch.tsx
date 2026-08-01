import { useTheme } from "@/contexts/ThemeContext"

export const ThemeSitch = () => {

    const themeCtx = useTheme()

    const handlBtn = () => {
        if(themeCtx) {
            themeCtx.setTheme(themeCtx?.theme === 'dark' ? 'light' : 'dark');
        }
    }

    return (
        <div
        className="fixed top 0 left-0 right-0 p-3 text-center cursor-pointer"
        onClick={handlBtn}
        >
            {themeCtx?.theme === 'dark' && 'Mudar para Light'}
            {themeCtx?.theme === 'light' && 'Mudar para Dark'}
        </div>
    )
}