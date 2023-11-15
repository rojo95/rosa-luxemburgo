import HorizontalCard from "@/Components/UI/HorizontalCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    faLanguage,
    faBriefcase,
    faUsers,
    faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

import "@/../css/Pages/Dashboard.css";

export default function Dashboard({ auth }) {
    const [data, setData] = useState({
        classCard: "in",
        count: 0,
        reasons: [
            {
                title: "Conocer gente nueva",
                description:
                    "Aprender un nuevo idioma te permitirá interactuar con personas de diferentes culturas y países. Esto te dará la oportunidad de conocer nuevas personas, ampliar tu red de contactos y tener experiencias interesantes.",
                icon: faUsers,
            },
            {
                title: "Comprender mejor tu propio idioma",
                description:
                    "Al aprender un nuevo idioma, a menudo puedes obtener una mejor comprensión de tu propio idioma. Esto se debe a que al estudiar las reglas de una lengua extranjera, las de tu propia lengua pueden comenzar a tener más sentido.",
                icon: faLanguage,
            },
            {
                title: "Oportunidades de carrera",
                description:
                    "Muchas empresas valoran a los candidatos que son multilingües. Aprender un nuevo idioma puede abrirte nuevas oportunidades de empleo y permitirte acceder a roles que normalmente estarían cerrados para ti.",
                icon: faBriefcase,
            },
            {
                title: "Desarrollo personal",
                description:
                    "Aprender un nuevo idioma puede ayudarte a desarrollar habilidades de pensamiento crítico, resolución de problemas y creatividad. También puede ayudarte a ser más adaptable y a tener una mayor apertura al mundo.",
                icon: faChartLine,
            },
        ],
    });

    function getRandomInt(min, max, current) {
        let num;
        do {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (num === current);
        return num;
    }

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function ChangeReason(ms) {
        const interval = setInterval(async () => {
            await setData((prevData) => ({
                ...prevData,
                classCard: " ",
            }));
            await delay(100);
            await setData((prevData) => ({
                ...prevData,
                classCard: "left",
            }));
            await delay(250);
            await setData((prevData) => ({
                ...prevData,
                count: getRandomInt(
                    0,
                    prevData.reasons.length - 1,
                    prevData.count
                ),
            }));
        }, ms); // 10000 milliseconds = 10 seconds
        // Limpia el intervalo cuando el componente se desmonta
        return () => {
            clearInterval(interval);
        };
    }

    useEffect(() => {
        ChangeReason(15000);
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Inicio
                </h2>
            }
        >
            <Head title="Inicio" />

            <div>
                <div className="w-full slider overflow-hidden flex justify-center items-center">
                    <img
                        src="https://img.freepik.com/foto-gratis/amigos-tiro-medio-charlando_23-2149009249.jpg?w=996&t=st=1700025105~exp=1700025705~hmac=5316eb99457ab57718379917e7df330f91796bbba979638e7a40158f02724b94"
                        alt="header"
                        width={"100%"}
                    />
                </div>
                <div className="">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 text-center">
                            <h3 className="font-bold text-xl">
                                ¡Bienvenido al Centro de Idiomas Rosa
                                Luxemburgo!
                            </h3>
                        </div>
                        <div className="pt-0 p-6 text-gray-900 dark:text-gray-100 mx-10">
                            Bienvenido al Centro de Idiomas Rosa Luxemburgo,
                            donde podrás aprender diferentes idiomas y expandir
                            tus horizontes. Aquí te esperamos para que disfrutes
                            de un viaje de aprendizaje lleno de nuevas
                            oportunidades y experiencias.
                            <br />
                            Aprender un nuevo idioma puede traer una serie de
                            beneficios que te ayudarán a crecer tanto personal
                            como profesionalmente.
                            <br />
                            <br />
                            <div className="my-3 mx-5 flex justify-center items-center">
                                <HorizontalCard
                                    className={data.classCard}
                                    data={data.reasons[data.count]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100 text-center">
                        <h3 className="font-bold text-xl">
                            Acerca del Centro de Idiomas Rosa Luxemburgo
                        </h3>
                    </div>
                    <div className="pt-0 p-6 text-gray-900 dark:text-gray-100 text-justify mx-10">
                        El Centro de Idiomas de la Universidad Bolivariana de
                        Venezuela fue creado en octubre de 2005, adscrito al
                        Vicerrectorado, en el marco del nuevo mapa estratégico
                        de la nación con la finalidad de seguir impulsando el
                        nuevo sistema multipolar internacional y de avanzar en
                        la conformación de la nueva estructura social. Se basa
                        también en el capítulo VIII de nuestro Documento Rector,
                        en su Política II, donde se establece la formación
                        bilingüe como parte de nuestro sistema de educación
                        Bolivariano.
                        <br />
                        <br />
                        El Centro de Idiomas cuenta, en la actualidad, con cinco
                        sedes en el interior del país; Zulia, Falcón, Monagas y
                        Bolívar. Además de estar presentes en las aldeas
                        universitarias de la Misión Sucre - UBV
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
