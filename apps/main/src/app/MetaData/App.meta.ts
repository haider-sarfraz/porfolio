interface AppRoutesInterface {
    [key: string]: string
};

interface AppMeta {
    title: string
    styles: {
        appWrapper: string
        navWrapper: string
        userName: string
        navItem: string
        navItems: string
        menuHamBurger: string
        activeNavItem: string
    }
    routes: AppRoutesInterface,
    background: {
        wrapperCss: string
        src: string
        css: string
    }
};

export const AppMeta:AppMeta = {
    title: "@haider-sarfraz",
    styles: {
        appWrapper: "px-4 md:px-8 max-h-full overflow-y-auto z-[20] bg-gray-100 dark:bg-zinc-800",
        navWrapper: "h-[var(--navHeight)] flex justify-between items-center",
        userName: "max-w-[20rem] min-w-[8rem] py-[4px] md:px-4 flex items-center justify-center font-[cursive] text-zinc-900 dark:text-gray-100 text-2xl md:text-xl lg:text-2xl",
        navItem: "min-w-[8rem] py-[4px] flex items-center justify-center rounded-nav-item bg-gray-500 dark:bg-gray-200 text-white dark:text-zinc-900 hover:bg-gray-900 dark:hover:bg-white dark:hover:text-zinc-800",
        navItems: "hidden md:flex md:gap-[2rem] lg:gap-[5rem] font-[cursive] md:text-md lg:text-xl text-semi-bold",
        menuHamBurger: "block w-4 h-4 md:hidden w-8 dark:text-white",
        activeNavItem: "w-[8rem] flex items-center justify-center bg-gray-700 dark:bg-zinc-600 text-white dark:text-white rounded-nav-item cursor-not-allowed",
    },
    routes: {
        "Home": "/",
        "About": "/about",
        "Projects": "/projects",
    },
    background: {
        wrapperCss: "flex justify-end items-center absolute max-w-[10rem] max-h-[10rem] md:max-w-none md:max-h-none md:w-full md:h-ful z-10",
        src: "assets/personal-pic.jpeg",
        css: "absolute right-0 w-inherit h-inherit rounded-full lg:rounded-br-none lg:rounded-bl-[15rem] lg:rounded-tr-[12rem] lg:rounded-tl-none lg:rounded-bl-[18rem] lg:rounded-tr-[15rem] lg:rounded-tl-none"
    }
}