import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
    const hoy = new Date();
    return (
        <div className="pt-2 lg:pt-10 p-10 bg-gray-200 lg:px-5">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="p-6 text-gray-900 dark:text-gray-100 text-center center-items">
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
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                        <li>Menu 4</li>
                        <li>Menu 5</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 grid-flow-col gap-4 mt-5">
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
            </div>
        </div>
    );
}
