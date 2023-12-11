import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card } from "@/Components/UI/Card";
import SecondaryButton from "@/Components/UI/SecondaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NavLink from "@/Components/UI/NavLink";

export default function Index({ subjects }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Cursos
                </h2>
            }
        >
            <Head title="Cursos" />
            <div className="md:p-14">
                <div className="px-14 mb-3 grid justify-items-end ">
                    <div>
                    <NavLink
                        href={route('courses.create')}
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                            <SecondaryButton>
                                <FontAwesomeIcon icon={faPlus} />
                                &nbsp;Registrar Idioma
                            </SecondaryButton>
                        </NavLink>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-14">
                    {subjects.map((info) => (
                        <div className="row-span-1">
                            <Card
                                image={info.image}
                                title={info.name}
                                description={info.description}
                                tags={[
                                    `Cupos Disponibles: ${
                                        info.quota - info.registrations
                                    }`,
                                    `Estudiantes Inscritos: ${info.registrations}`,
                                ]}
                                button={{text: 'Ver'}}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
