import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/UI/InputError";
import InputLabel from "@/Components/UI/InputLabel";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import TextArea from "@/Components/UI/TextArea";
// import {
//     loadCaptchaEnginge,
//     LoadCanvasTemplate,
//     validateCaptcha,
// } from "react-simple-captcha";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
        address: "",
        // captcha: "",
    });

    useEffect(() => {
        // loadCaptchaEnginge(6);
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        // if (!validateCaptcha(data.captcha)==true) {
        //     alert('Captcha Does Not Match');
        //     return;
        // }

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Registrarse" />

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
                        onChange={(e) => setData("name", e.target.value)}
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
                        isFocused={true}
                        onChange={(e) => setData("lastname", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
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
                        isFocused={true}
                        onChange={(e) => setData("address", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Correo Electrónico" />

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
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
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

                {/* <div className="mt-4">
                    <InputLabel
                        htmlFor="captcha"
                        value="Ingrese el Captcha"
                    />

                    <TextInput
                        id="captcha"
                        type="text"
                        name="captcha"
                        value={data.captcha}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("captcha", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.captcha}
                        className="mt-2"
                    />
                    <LoadCanvasTemplate />
                </div> */}

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
        </GuestLayout>
    );
}
