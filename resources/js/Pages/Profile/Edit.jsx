import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import SecondaryButton from "@/Components/UI/SecondaryButton";

export default function Edit({ auth, mustVerifyEmail, status }) {
    const [data, setData] = useState(true);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Perfil de Usuario
                </h2>
            }
        >
            <Head title="Perfil de Usuario" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className={"flex " +(data ? 'justify-start items-start': 'justify-end items-end')}>
                        <SecondaryButton onClick={() => setData(!data)}>
                            {data
                                ? "Cambiar a los datos del usuario"
                                : "Cambiar a los datos personales"}
                        </SecondaryButton>
                    </div>
                    {data ? (
                        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>
                    ) : (
                        <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>
                    )}

                    {/* <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
