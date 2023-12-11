import React, { useState, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "@/../css/Pages/Subjects/CreateSubject.css";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SecondaryButton from "@/Components/UI/SecondaryButton";
import { Card } from "@/Components/UI/Card";

const defaultSrc =
    "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

export default function CreateSubject() {
    const [image, setImage] = useState(null);
    const [cropData, setCropData] = useState("#");
    const cropperRef = createRef();
    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        if (typeof cropperRef.current?.cropper !== "undefined") {
            setCropData(
                cropperRef.current?.cropper.getCroppedCanvas().toDataURL()
            );
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Registrar Idioma
                </h2>
            }
        >
            <Head title="Registrar Idioma" />
            <div className="p-14">
                <div>
                    <div style={{ width: "100%" }}>
                        <input type="file" onChange={onChange} />
                        <button>Use default img</button>
                        <br />
                        <br />
                        <Cropper
                            ref={cropperRef}
                            style={{ height: 400, width: "100%" }}
                            zoomTo={0.5}
                            initialAspectRatio={1}
                            preview=".img-preview"
                            src={image}
                            viewMode={1}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            responsive={true}
                            autoCropArea={1}
                            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                            guides={true}
                        />
                    </div>
                    <div>
                        <Card image={cropData}></Card>
                        <div
                            className="box"
                            style={{ width: "50%", float: "right" }}
                        >
                            <h1>Preview</h1>
                            <div
                                className="img-preview"
                                style={{
                                    width: "100%",
                                    float: "left",
                                    height: "300px",
                                }}
                            />
                        </div>
                        <div
                            className="box"
                            style={{
                                width: "50%",
                                float: "right",
                                height: "300px",
                            }}
                        >
                            <h1>
                                <SecondaryButton onClick={getCropData}>
                                    Crop Image
                                </SecondaryButton>
                            </h1>
                            <img
                                style={{ width: "100%" }}
                                src={cropData}
                                alt="cropped"
                            />
                        </div>
                    </div>
                    <br style={{ clear: "both" }} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
