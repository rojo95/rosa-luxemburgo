import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { CapitalizeText } from "@/functions/TextFormat";
import SelectInput from "@/Components/UI/SelectInput";
import LoadingPresentationCard from "@/Components/UI/LoadingPresentationCard";
import SecondaryButton from "@/Components/UI/SecondaryButton";

export default function Index({ schedules }) {
    const days = [
        { id: 1, text: "Lunes" },
        { id: 2, text: "Martes" },
        { id: 3, text: "Miércoles" },
        { id: 4, text: "Jueves" },
        { id: 5, text: "Viernes" },
    ];
    const [data, setData] = useState({
        horarios: null,
        selectedDay: 1,
        loading: true,
    });

    function orderHours(data) {
        return data.sort(function (a, b) {
            let timeA = parseInt(a.hour.split(":")[0]);

            let timeB = parseInt(b.hour.split(":")[0]);

            return timeA - timeB;
        });
    }

    function changeDay(id) {
        console.log(id);
        setData({ ...data, selectedDay: id });
    }

    useEffect(() => {
        setTimeout(() => {
            setData({
                ...data,
                horarios: orderHours(schedules),
                loading: false,
            });
        }, 1000);
    }, [data.selectedDay]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Horarios
                </h2>
            }
        >
            <Head title="Horarios" />
            <div className="p-14 sm:px-10">
                <div className="grid w-full justify-center items-center md:hidden grid-cols-1 gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <SelectInput
                                options={days}
                                value={data.selectedDay}
                                onChange={changeDay}
                            />
                        </div>
                        <div>
                            <SecondaryButton className="w-full items-center">
                                Inscribir Idioma
                            </SecondaryButton>
                        </div>
                    </div>
                    <div className="grid gap-2 ">
                        {data.loading ? (
                            <>
                                <LoadingPresentationCard />
                                <LoadingPresentationCard />
                                <LoadingPresentationCard />
                            </>
                        ) : (
                            data.horarios &&
                            data.horarios
                                .filter(
                                    (v) =>
                                        parseInt(v.day) ===
                                        parseInt(data.selectedDay)
                                )
                                .map((val, key) => (
                                    <div
                                        key={key}
                                        className="overflow-hidden relative max-w-sm mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-md flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5 w-full"
                                    >
                                        <img
                                            className="absolute -left-6 w-24 h-24 rounded-full shadow-lg"
                                            src={val.image}
                                        />
                                        <div className="flex flex-col py-5 pl-24">
                                            <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                                                {CapitalizeText(val.name)} Nivel{" "}
                                                {val.level}
                                            </strong>
                                            <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
                                                {val.hour} - {val.professor}
                                            </span>
                                        </div>
                                    </div>
                                ))
                        )}
                    </div>
                </div>
                <div className="hidden md:flex w-full justify-center items-center">
                    <div className="grid grid-cols-6 gap-1">
                        <div className="col-span-6 bg-gray-300">Horario</div>
                        <div className="bg-gray-300">Días</div>
                        <div className="bg-gray-300">Lunes</div>
                        <div className="bg-gray-300">Martes</div>
                        <div className="bg-gray-300">Miércoles</div>
                        <div className="bg-gray-300">Jueves</div>
                        <div className="bg-gray-300">Viernes</div>
                        <div className="row-span-6 bg-red-300">
                            .grid grid-cols-1 gap-1
                        </div>
                        <div className="bg-green-300">9</div>
                        <div className="bg-green-300">01</div>
                        <div className="bg-green-300">01</div>
                        <div className="bg-green-300">01</div>
                        <div className="bg-green-300">09</div>
                        <div className="bg-green-300">09</div>
                        <div className="bg-green-300">09</div>
                        <div className="bg-green-300">09</div>
                        <div className="bg-green-300">09</div>
                        <div className="bg-green-300">09</div>
                        <div className="bg-green-300">09</div>
                        <div className="bg-green-300">09</div>
                        <div className="bg-green-300">09</div>
                        <div className="bg-green-300">09</div>
                        <div className="bg-green-300">09</div>
                        <div className="bg-green-300">09</div>
                        <div className="bg-green-300">09</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
