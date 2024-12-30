import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

interface RestaurantFormData {
    restaurantName: string;
    city: string;
    country: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
}

const DetailsSection = () => {
    const { control } = useFormContext<RestaurantFormData>();

    return (
        <div className="space-y-8 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Section Header */}
            <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                    <svg 
                        className="w-6 h-6 text-blue-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h2 className="text-2xl font-bold text-gray-800">Restaurant Details</h2>
                </div>
                <FormDescription className="text-sm text-gray-600">
                    Provide accurate information to help customers find your restaurant.
                </FormDescription>
            </div>

            {/* Restaurant Name */}
            <FormField
                control={control}
                name="restaurantName"
                render={({ field }) => (
                    <FormItem className="w-full transform transition-all duration-300 hover:scale-[1.01]">
                        <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                            <span className="text-blue-600">★</span> Restaurant Name
                        </FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder="E.g., Ocean Breeze"
                                className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Grid Layout */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* City */}
                <FormField
                    control={control}
                    name="city"
                    render={({ field }) => (
                        <FormItem className="w-full flex-1 group">
                            <FormLabel className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                                City
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="E.g., San Francisco"
                                    className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Country */}
                <FormField
                    control={control}
                    name="country"
                    render={({ field }) => (
                        <FormItem className="w-full flex-1 group">
                            <FormLabel className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                                Country
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="E.g., USA"
                                    className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Delivery Price */}
                <FormField
                    control={control}
                    name="deliveryPrice"
                    render={({ field }) => (
                        <FormItem className="w-full group">
                            <FormLabel className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                                Delivery Price ($)
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="number"
                                    placeholder="E.g., 5.00"
                                    className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Estimated Delivery Time */}
                <FormField
                    control={control}
                    name="estimatedDeliveryTime"
                    render={({ field }) => (
                        <FormItem className="w-full group">
                            <FormLabel className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                                Estimated Delivery Time (min)
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="number"
                                    placeholder="E.g., 30"
                                    className="bg-white border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    );
};

export default DetailsSection;
