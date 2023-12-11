import React from "react";

export default function SelectInput({ options, value, onChange, className }) {
    return (
        <select
            className={
                "mb-2 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500" +
                className
            }
            id="grid-state"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {options.map((v, k) => (
                <option key={k} value={v.id}>
                    {v.text}
                </option>
            ))}
        </select>
    );
}
