import { CapitalizeText } from "@/functions/TextFormat";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "@/../css/Components/UI/Card/Card.css";
import PrimaryButton from "./PrimaryButton";

const HorizontalCard = ({
    className,
    data: { title, icon, description, fuente },
}) => (
    <div className={`max-w-sm w-full lg:max-w-full lg:flex ${className}`}>
        <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            title="Woman holding a mug"
        >
            <img
                src="https://v1.tailwindcss.com/img/card-left.jpg"
                alt={title}
            />
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
                {/* <p className="text-sm text-gray-600 flex items-center">
                                        <FontAwesomeIcon
                                            icon={
                                                data.icon || faStar
                                            }
                                        />
                                        &nbsp;Members only
                                    </p> */}
                <div className="text-gray-900 font-bold text-xl mb-2">
                    <FontAwesomeIcon icon={icon || faStar} />
                    &nbsp;
                    {title}
                </div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="flex items-center">
                {fuente && (
                    <>
                        <img
                            className="w-10 h-10 rounded-full mr-4"
                            src="https://v1.tailwindcss.com/img/jonathan.jpg"
                            alt="Avatar of Jonathan Reinink"
                        />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">
                                Jonathan Reinink
                            </p>
                            <p className="text-gray-600">Aug 18</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
);

const Card = ({ title = "Título", tags, description, image, button }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-500 dark:text-gray-100">
        {image && (
            <div className="w-full overflow-hidden language-card-image-container">
                <img
                    className="w-full language-card-image"
                    src={image}
                    alt={image}
                />
            </div>
        )}
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
                {CapitalizeText(title) || "Título"}
            </div>
            <p className="text-gray-700 dark:text-gray-100 text-base limit-text">
                {description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2 grid grid-cols-3 gap-4 flex items-end">
            <div className="col-span-2">
                {tags &&
                    tags.map((tag) => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {tag}
                        </span>
                    ))}
            </div>
            <div className="">
                {button && <PrimaryButton className="w-full justify-center items-center" onClick={button.funct}>{button.text}</PrimaryButton>}
            </div>
        </div>
    </div>
);

export default HorizontalCard;
export { HorizontalCard, Card };
