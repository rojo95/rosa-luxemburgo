import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card } from "@/Components/UI/Card";

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
            <div className="p-14">
                <div class="grid grid-cols-3 gap-4 px-14">
                    {subjects.map((info) => (
                        <div class="row-span-1">
                            <Card
                                image={info.image}
                                title={info.name}
                                description={info.description}
                                tags={[
                                    `Cupos Disponibles: ${
                                        info.quota - info.registrations
                                    }`,
                                    `Estudiantes Inscritos: ${
                                        info.registrations
                                    }`,
                                ]}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
