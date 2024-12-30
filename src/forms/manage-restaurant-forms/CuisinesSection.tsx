import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useFormContext } from "react-hook-form";
import CuisineCheckbox from "./CuisineCheckBox";
import { cuisineList } from "@/config/restaurant_options_config";
const CuisinesSection = () => {
    const { control } = useFormContext();

    return (
        <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Cuisines</h2>
                    <FormDescription className="text-sm text-gray-600">
                        Select all cuisines that match your restaurant's offerings
                    </FormDescription>
                </div>
            </div>

            <FormField
                control={control}
                name="cuisines"
                render={({ field }) => (
                    <FormItem>
                        <div className="grid md:grid-cols-5 gap-3">
                            {cuisineList.map((cuisineItem) => (
                                <div key={cuisineItem} className="transform transition-all duration-300 hover:scale-105">
                                    <CuisineCheckbox cuisine={cuisineItem} field={field} />
                                </div>
                            ))}
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default CuisinesSection;
