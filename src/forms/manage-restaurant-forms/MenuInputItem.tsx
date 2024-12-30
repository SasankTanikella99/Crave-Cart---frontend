import { Button } from "@/components/ui/button";
import { FormControl,  FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

interface MenuItemInputProps {
    index: number;
    removeMenuItem: () => void;
}

const MenuItemInput = ({ index, removeMenuItem }: MenuItemInputProps) => {
    const { control } = useFormContext();

    return (
        <div className="flex flex-row items-end gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
            <FormField
                control={control}
                name={`menuItems.${index}.name`}
                render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormLabel className="flex items-center gap-2 text-gray-700">
                            <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Name <FormMessage />
                        </FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder="Cheese Pizza"
                                className="bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name={`menuItems.${index}.price`}
                render={({ field }) => (
                    <FormItem className="w-[150px]">
                        <FormLabel className="flex items-center gap-2 text-gray-700">
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Price ($) <FormMessage />
                        </FormLabel>
                        <FormControl>
                            <Input 
                                {...field} 
                                placeholder="8.00" 
                                className="bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
            <Button
                type="button"
                onClick={removeMenuItem}
                variant="destructive"
                className="bg-red-500 hover:bg-red-600 transition-colors duration-300 flex items-center gap-2"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove
            </Button>
        </div>
    );
};

export default MenuItemInput