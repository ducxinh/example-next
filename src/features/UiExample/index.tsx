import { Accordion } from "@/components/ui-example/accordion";
import { Card } from "@/components/ui-example/card";
import { Form } from "@/components/ui-example/form";
import { Table } from "@/components/ui-example/table";
import { Tabs } from "@/components/ui-example/tabs";

export function UiExample() {
  const components = [
    { name: 'Table', Component: Table },
    { name: 'Tabs', Component: Tabs },
    { name: 'Accordion', Component: Accordion },
    { name: 'Card', Component: Card },
    { name: 'Form', Component: Form },
  ]

  return (
    <div className="">
      <div className="mb-5">
        {components.map((component, index) => (
          <div key={index} className="mb-5">
            <h2 className="text-2xl font-bold mb-2">{component.name}</h2>
            <component.Component />
          </div>
        ))}
      </div>
    </div>
  );
}