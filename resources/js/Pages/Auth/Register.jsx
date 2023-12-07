import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/UI/InputError";
import InputLabel from "@/Components/UI/InputLabel";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import TextArea from "@/Components/UI/TextArea";
import { CapitalizeText } from "@/functions/TextFormat";
import ApplicationLogo from "@/Components/UI/ApplicationLogo";

export default function Register() {
    const birthdateBase = new Date();
    birthdateBase.setFullYear(birthdateBase.getFullYear() - 18);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
        address: "",
        birthdate: birthdateBase.toISOString().split("T")[0],
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <Head title="Registrarse" />
                <div className="flex justify-center items-center">
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                </div>

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Nombre" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full capitalize"
                            autoComplete="off"
                            isFocused={true}
                            onChange={(e) =>
                                setData("name", CapitalizeText(e.target.value))
                            }
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="lastname" value="Apellido" />

                        <TextInput
                            id="lastname"
                            name="lastname"
                            value={data.lastname}
                            className="mt-1 block w-full capitalize"
                            autoComplete="off"
                            onChange={(e) =>
                                setData(
                                    "lastname",
                                    CapitalizeText(e.target.value)
                                )
                            }
                            required
                        />

                        <InputError
                            message={errors.lastname}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="address" value="Direccion" />

                        <TextArea
                            id="address"
                            name="address"
                            value={data.address}
                            className="mt-1 block w-full"
                            autoComplete="off"
                            rows="3"
                            onChange={(e) => setData("address", e.target.value)}
                            required
                        />

                        <InputError message={errors.address} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="birthdate"
                            value="Fecha de Nacimiento"
                        />

                        <TextInput
                            id="birthdate"
                            name="birthdate"
                            value={data.birthdate}
                            className="mt-1 block w-full"
                            autoComplete="off"
                            rows="3"
                            onChange={(e) =>
                                setData("birthdate", e.target.value)
                            }
                            required
                            type="date"
                        />

                        <InputError
                            message={errors.birthdate}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="email"
                            value="Correo Electrónico"
                        />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="off"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Contraseña" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirme su Contraseña"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route("login")}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            ¿Ya te registraste?
                        </Link>

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Registrarse
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
