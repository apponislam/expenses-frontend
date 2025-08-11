// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function FileUpload() {
//     const [isDragging, setIsDragging] = useState(false);
//     const [selectedFile, setSelectedFile] = useState<File | null>(null);

//     const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setIsDragging(true);
//     };

//     const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setIsDragging(false);
//     };

//     const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         e.stopPropagation();
//     };

//     const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//         e.preventDefault();
//         e.stopPropagation();
//         setIsDragging(false);

//         if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//             setSelectedFile(e.dataTransfer.files[0]);
//         }
//     };

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files.length > 0) {
//             setSelectedFile(e.target.files[0]);
//         }
//     };

//     return (
//         <div className={`relative ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}`} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}>
//             <div className="flex items-center justify-center mb-3 md:mb-6 flex-col">
//                 <Image src="/changephotoimg.svg" alt="change photo" height={54} width={54} className="mb-3" />
//                 <p className="text-center inter-regular text-[20px] text-[#535353] mb-3 md:mb-5">{selectedFile ? selectedFile.name : "Drag & drop files here"}</p>
//                 <p className="text-center inter-regular text-[20px] text-[#535353]">Or</p>
//             </div>

//             <div>
//                 <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} accept="image/*" />
//                 <label htmlFor="file-upload">
//                     <Button className="w-full p-[10px] h-auto text-center inter-regular text-[20px] flex gap-6 bg-[#4A90E2] hover:bg-[#4A90E2] cursor-pointer" asChild>
//                         <div>
//                             <Image src="/uploadphotobtn.svg" alt="Upload Photo Button" width={24} height={24} />
//                             Upload Photo
//                         </div>
//                     </Button>
//                 </label>
//             </div>

//             {/* File preview (optional) */}
//             {selectedFile && (
//                 <div className="mt-4">
//                     <p className="text-sm text-gray-500">Selected file: {selectedFile.name}</p>
//                     {/* You can add image preview here if needed */}
//                 </div>
//             )}
//         </div>
//     );
// }

"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FileUpload() {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileSelection(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFileSelection(e.target.files[0]);
        }
    };

    const handleFileSelection = (file: File) => {
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleSavePhoto = () => {
        // Implement your save photo logic here
        console.log("Saving photo:", selectedFile);
        // Add your API call or file processing logic
    };

    return (
        <div className={`relative ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}`} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}>
            {previewUrl ? (
                <div className="flex flex-col items-center justify-center">
                    {/* <div className="relative w-full mb-4 rounded-full flex items-center justify-center">
                        <Image src={previewUrl} alt="Preview" height={250} width={250} className="object-cover rounded-full" />
                    </div> */}
                    <div className="relative h-[250px] w-[250px] mb-4 rounded-full overflow-hidden flex items-center justify-center">
                        <Image src={previewUrl} alt="Preview" height={250} width={250} className="h-full w-full object-cover rounded-full" />
                    </div>

                    <div className="flex gap-4 w-full">
                        <div className="flex-1">
                            <input type="file" id="change-photo" className="hidden" onChange={handleFileChange} accept="image/*" ref={fileInputRef} />
                            <label htmlFor="change-photo" className="block">
                                <Button className="w-full h-auto text-center inter-regular flex bg-[#4A90E2] hover:bg-[#4A90E2] cursor-pointer" asChild>
                                    <div>Change Photo</div>
                                </Button>
                            </label>
                        </div>
                        <Button className="flex-1 bg-green-500 hover:bg-green-600 inter-regular" onClick={handleSavePhoto}>
                            Save Photo
                        </Button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex items-center justify-center mb-3 md:mb-6 flex-col">
                        <Image src="/changephotoimg.svg" alt="change photo" height={54} width={54} className="mb-3" />
                        <p className="text-center inter-regular text-[20px] text-[#535353] mb-3 md:mb-5">Drag & drop files here</p>
                        <p className="text-center inter-regular text-[20px] text-[#535353]">Or</p>
                    </div>

                    <div>
                        <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} accept="image/*" ref={fileInputRef} />
                        <label htmlFor="file-upload">
                            <Button className="w-full p-[10px] h-auto text-center inter-regular text-[20px] flex gap-6 bg-[#4A90E2] hover:bg-[#4A90E2] cursor-pointer" asChild>
                                <div>
                                    <Image src="/uploadphotobtn.svg" alt="Upload Photo Button" width={24} height={24} />
                                    Upload Photo
                                </div>
                            </Button>
                        </label>
                    </div>
                </>
            )}
        </div>
    );
}
