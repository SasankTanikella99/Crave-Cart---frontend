import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

interface ImageFormData {
    imageUrl: string;
    imageFile: File | null;
}

const ImageSection = () => {
    const { control, watch } = useFormContext<ImageFormData>();
    const existingImageUrl = watch("imageUrl");

    return (
        <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
                <svg 
                    className="w-6 h-6 text-purple-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800">Restaurant Image</h2>
            </div>

            <div className="flex flex-col gap-6 md:w-[50%]">
                {existingImageUrl && (
                    <div className="group relative overflow-hidden rounded-lg">
                        <AspectRatio ratio={16 / 9}>
                            <img
                                src={existingImageUrl}
                                className="rounded-lg object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                                alt="Restaurant preview"
                            />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </div>
                )}
                
                <FormField
                    control={control}
                    name="imageFile"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div>
                                    <label 
                                        htmlFor="imageFileInput" 
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Upload New Image
                                    </label>
                                    <div className="relative flex items-center">
                                        <Input
                                            id="imageFileInput"
                                            className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-md shadow-sm cursor-pointer focus:outline-none hover:border-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                                            type="file"
                                            accept=".jpg, .jpeg, .png"
                                            onChange={(event) =>
                                                field.onChange(
                                                    event.target.files ? event.target.files[0] : null
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    );
};

export default ImageSection;
