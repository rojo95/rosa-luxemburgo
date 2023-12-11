import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePage } from "@inertiajs/react";
import React from "react";
import NavLink from "../UI/NavLink";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    const {
        laravelVersion,
        phpVersion,
        auth: { user },
    } = usePage().props;
    const hoy = new Date();
    return (
        <div className="pt-2 lg:pt-10 p-10 dark:bg-gray-500 bg-gray-200 lg:px-5 dark:text-white text-gray-900">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="p-6 text-center center-items">
                    <div className="flex justify-center items-center">
                        <img
                            src="http://www.ubv.edu.ve/src/img/iconospfg/iconos_idiomas/Rosa_luxemburgo.png"
                            alt="logo"
                            width={"100px"}
                        />
                    </div>
                    <h3 className="font-bold text-l">
                        Centro de Idiomas Rosa Luxemburgo
                    </h3>
                </div>
                <div>
                    <h3 className="font-bold text-l">Contacto</h3>
                    <br />
                    <p>
                        <FontAwesomeIcon icon={faMap}></FontAwesomeIcon>&nbsp;
                        Av. Leonardo da Vinci. Los Chaguaramos. Caracas -
                        Venezuela
                        <br />
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>&nbsp;
                        Teléf:
                    </p>
                    <ul className="list-disc list-inside pl-3">
                        <li>(0212) 606.32.34</li>
                        <li>(0212) 606.35.74</li>
                        <li>(0212) 606.36.32</li>
                        <li>(0212) 606.36.66</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-l">Menu</h3>
                    <br />
                    <ul>
                        <li>
                            <NavLink
                                href={route(!user ? "inicio" : "dashboard")}
                                active={route().current(
                                    !user ? "inicio" : "dashboard"
                                )}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
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
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        <FontAwesomeIcon icon={faDoorOpen} />
                                        &nbsp;Iniciar Sesión
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        active={route().current("register")}
                                        href={route("register")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
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
                                        className="active:text-white font-semibold text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
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
                                        active={route().current(
                                            "schedules.index"
                                        )}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        <FontAwesomeIcon icon={faTable} />
                                        &nbsp;Horarios
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href={route("dashboard")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        <FontAwesomeIcon icon={faNoteSticky} />
                                        &nbsp;Notas
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href={route("dashboard")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        <FontAwesomeIcon icon={faChartBar} />
                                        &nbsp;Estadísticas
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div className="">
                    © {hoy.getFullYear()}. Todos los Derechos Reservados.
                    Diseñado y desarrollado con&nbsp;
                    <FontAwesomeIcon icon={faHeart} />
                    &nbsp;por&nbsp;
                    <a
                        href="https://rojo95.github.io/ovnisolutions-web"
                        target="_blank"
                    >
                        OVNISOLUTIONS
                    </a>
                </div>
                <div className="ms-4 sm:text-center text-sm text-gray-500 dark:text-gray-300 md:text-end sm:ms-0">
                    Laravel v{laravelVersion} (PHP v{phpVersion})
                </div>
            </div>
        </div>
    );
}
