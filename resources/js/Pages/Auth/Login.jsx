import { useEffect } from "react";
import Checkbox from "@/Components/UI/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/UI/InputError";
import InputLabel from "@/Components/UI/InputLabel";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Components/UI/ApplicationLogo";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <Head title="Inicio de Sesión" />

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}
                <div className="flex justify-center items-center">
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                </div>

                <form onSubmit={submit}>
                    <div>
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
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
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
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                                Recuérdame
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        )}

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Iniciar Sesión
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
