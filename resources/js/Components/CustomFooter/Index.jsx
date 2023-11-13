import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
    const hoy = new Date();
    return (
        <div className=" mt-5 py-10 bg-gray-200">
            <div className="grid grid-cols-3 grid-flow-col gap-4">
                <div className="bg-red-300">hola</div>
                <div className="bg-red-300">hola2</div>
                <div className="bg-red-300">hola3</div>
            </div>
            <div className="grid grid-cols-1 grid-flow-col gap-4 p-3 flex">
                <div className="flex">
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
