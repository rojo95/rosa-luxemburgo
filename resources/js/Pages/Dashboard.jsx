import HorizontalCard from "@/Components/UI/HorizontalCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
    faLanguage,
    faBriefcase,
    faUsers,
    faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard({ auth }) {
    const [data, setData] = useState({
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

    console.log(data);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Inicio" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 text-center">
                            <h3>
                                ¡Bienvenido al Centro de Idiomas Rosa
                                Luxemburgo!
                            </h3>
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
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
                            {data.reasons.map((data, i) => (
                                <div className="my-3 mx-5" key={i}>
                                    <HorizontalCard
                                        data={data}
                                    ></HorizontalCard>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
