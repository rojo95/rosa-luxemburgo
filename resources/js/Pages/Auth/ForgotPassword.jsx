import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/UI/InputError";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";
import { Head, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/UI/InputLabel";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <Head title="Contraseña Olvidada" />

                <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    ¿Olvidaste tu Contraseña?
                    <br />
                    No hay problema. Sólo dejanos saber tu dirección de correo
                    electrónico y enviaremos un email con un link para reiniciar
                    la contraseña que te permitirá elegir una nueva.
                </div>

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <InputLabel htmlFor="email" value="Correo Electrónico" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Email Password Reset Link
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
