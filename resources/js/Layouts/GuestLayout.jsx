import ApplicationLogo from "@/Components/UI/ApplicationLogo";
import { Link } from "@inertiajs/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NavigationBar } from "@/Components/NavigationBar/Index";
import CustomFooter from '@/Components/CustomFooter';

export default function Guest({ auth, children }) {
    return (
        <>
            <NavigationBar />
            {/*<div className="bg-gray-300 p-5 w-full flex bg-opacity-40">
                 <div className="w-full">
                    <Link
                        href={route("inicio")}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                </div>
                <div className="w-full text-right">
                    {auth?.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Iniciar Sesión
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Registrarse
                            </Link>
                        </>
                    )}
                </div>
            </div>*/}
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
                {/* <div>
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                </div> */}

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
            <footer>
                <CustomFooter/>
            </footer>
        </>
    );
}
