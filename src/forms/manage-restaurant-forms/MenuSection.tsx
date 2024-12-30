import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuInputItem from "./MenuInputItem";


const MenuSection = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
      control,
      name: "menuItems",
  });

  return (
      <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <div>
                  <h2 className="text-2xl font-bold text-gray-800">Menu Items</h2>
                  <FormDescription className="text-sm text-gray-600">
                      Build your menu by adding items with their prices
                  </FormDescription>
              </div>
          </div>

          <FormField
              control={control}
              name="menuItems"
              render={() => (
                  <FormItem className="flex flex-col gap-4">
                      {fields.map((_, index) => (
                          <MenuInputItem
                              key={index}
                              index={index}
                              removeMenuItem={() => remove(index)}
                          />
                      ))}
                  </FormItem>
              )}
          />

          <Button 
              type="button" 
              onClick={() => append({ name: "", price: "" })}
              className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 flex items-center gap-2"
          >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Menu Item
          </Button>
      </div>
  );
};

export default MenuSection