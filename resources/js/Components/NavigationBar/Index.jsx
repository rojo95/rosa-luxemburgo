import { Link, usePage } from "@inertiajs/react";
import React from "react";
import NavLink from "@/Components/UI/NavLink";
import ApplicationLogo from "@/Components/UI/ApplicationLogo";
import Dropdown from "@/Components/UI/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faDoorOpen,
    faUserPlus,
    faGraduationCap,
    faTable,
    faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
    faNoteSticky,
    faChartBar,
    faUser,
} from "@fortawesome/free-regular-svg-icons";

export const NavigationBar = () => {
    const { user } = usePage().props.auth;
    const appName = import.meta.env.VITE_APP_NAME || "Laravel";
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                        {/* <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8"
                            alt="Flowbite Logo"
                        /> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            {appName}
                        </span>
                    </Link>
                </div>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                href={route(!user ? "inicio" : "dashboard")}
                                active={route().current(
                                    !user ? "inicio" : "dashboard"
                                )}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                <FontAwesomeIcon icon={faHome} />
                                &nbsp;Inicio
                            </NavLink>
                        </li>
                        {!user ? (
                            <>
                                <li>
                                    <NavLink
                                        active={route().current("login")}
                                        href={route("login")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        <FontAwesomeIcon icon={faDoorOpen} />
                                        &nbsp;Iniciar Sesión
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        active={route().current("register")}
                                        href={route("register")}
                                        className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        <FontAwesomeIcon icon={faUserPlus} />
                                        &nbsp;Registrarse
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink
                                        href={route("courses.index")}
                                        active={route().current(
                                            "courses.index"
                                        )}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGraduationCap}
                                        />
                                        &nbsp;Cursos
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href={route("schedules.index")}
                                        active={route().current("schedules.index")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        <FontAwesomeIcon icon={faTable} />
                                        &nbsp;Horarios
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href={route("dashboard")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        <FontAwesomeIcon icon={faNoteSticky} />
                                        &nbsp;Notas
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href={route("dashboard")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        <FontAwesomeIcon icon={faChartBar} />
                                        &nbsp;Estadísticas
                                    </NavLink>
                                </li>
                                <li>
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faUserAlt}
                                                    />
                                                    &nbsp;
                                                    {`${
                                                        user.userInfo?.name.split(
                                                            " "
                                                        )[0]
                                                    } ${
                                                        user.userInfo?.lastname.split(
                                                            " "
                                                        )[0]
                                                    }`}
                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faUser}
                                                />
                                                &nbsp;Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faDoorOpen}
                                                />
                                                &nbsp;Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
