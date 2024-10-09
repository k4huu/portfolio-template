import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import config from "../../config.json";

export function AccordionDemo() {
    const { faq } = config;

    return (
        <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <h1 className="relative z-20 text-4xl font-bold text-white mb-8">
                FAQ
            </h1>

            <div className="relative z-20 w-full max-w-2xl mx-auto my-8 text-white px-4 p-6">
                <Accordion type="single" collapsible className="w-full">
                    {faq.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-2xl py-4 border-b border-gray-600">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-lg p-4">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
