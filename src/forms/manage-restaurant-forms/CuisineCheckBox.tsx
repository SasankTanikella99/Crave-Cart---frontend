import { Checkbox } from "@/components/ui/checkbox";
import {
    FormControl,
    
    FormItem,
    FormLabel,

} from "@/components/ui/form"
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface CuisineCheckboxProps {
    cuisine: string;
    field: ControllerRenderProps<FieldValues, "cuisines">;
}
const CuisineCheckbox = ({ cuisine, field }: CuisineCheckboxProps) => {
    return (
        <FormItem className="relative">
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <FormControl>
                    <Checkbox
                        className="h-5 w-5 rounded border-2 border-gray-300 
                        data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500
                        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                        transition-all duration-200"
                        checked={field.value.includes(cuisine)}
                        onCheckedChange={(checked) => {
                            if (checked) {
                                field.onChange([...field.value, cuisine]);
                            } else {
                                field.onChange(
                                    field.value.filter((value: string) => value !== cuisine)
                                );
                            }
                        }}
                    />
                </FormControl>
                <FormLabel className="flex items-center gap-2 text-sm font-medium cursor-pointer select-none">
                    {field.value.includes(cuisine) && (
                        <span className="text-blue-500">•</span>
                    )}
                    {cuisine}
                </FormLabel>
            </div>
        </FormItem>
    );
};
export default CuisineCheckbox;