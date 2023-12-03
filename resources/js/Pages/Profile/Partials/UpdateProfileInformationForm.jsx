import InputError from "@/Components/UI/InputError";
import InputLabel from "@/Components/UI/InputLabel";
import PrimaryButton from "@/Components/UI/PrimaryButton";
import TextInput from "@/Components/UI/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import TextArea from "@/Components/UI/TextArea";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const { user } = usePage().props.auth;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.userInfo?.name,
            lastname: user.userInfo?.lastname,
            address: user.userInfo?.address,
            birthdate: new Date(user.userInfo.birthdate)
                .toISOString()
                .split("T")[0],
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Datos Personales
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Actualiza tu información de perfil.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Nombre Completo" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="lastname" value="Apellido Completo" />

                    <TextInput
                        id="lastname"
                        className="mt-1 block w-full"
                        value={data.lastname}
                        onChange={(e) => setData("lastname", e.target.value)}
                        required
                        isFocused
                        autoComplete="lastname"
                    />

                    <InputError className="mt-2" message={errors.lastname} />
                </div>

                <div>
                    <InputLabel htmlFor="lastname" value="Dirección" />

                    <TextArea
                        id="address"
                        className="mt-1 block w-full"
                        value={data.address}
                        onChange={(e) => setData("address", e.target.value)}
                        required
                        isFocused
                        autoComplete="address"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel
                        htmlFor="birthdate"
                        value="Correo Electrónico"
                    />

                    <TextInput
                        id="birthdate"
                        className="mt-1 block w-full"
                        value={data.birthdate}
                        onChange={(e) => setData("birthdate", e.target.value)}
                        required
                        type="date"
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                            Tu correo electrónico no ha sido verificado.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Clic aquí para reenviar la verificación de
                                correo electrónico.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>
                        Actualizar
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
