import { useState } from "react";

const steps = [
    {
        index: 1,
        title: "Step 1",
        content: "Content of Step 1",
    },
    {
        index: 2,
        title: "Step 2",
        content: "Content of Step 2",
    },
    {
        index: 3,
        title: "Step 3",
        content: "Content of Step 3",
    },
];
function App() {
    const [currentStep, setCurrentStep] = useState(1);
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-screen-sm bg-white rounded-md px-10 py-10 space-y-10">
                <div className="flex justify-between items-center rounded-t-md">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`${currentStep === index + 1 ? "bg-[#7950f2] text-white" : "bg-gray-200 text-gray-700"} font-medium flex items-center justify-center aspect-square w-10 text-center rounded-full transition-all duration-300`}
                        >
                            {step.index}
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-semibold mt-5">
                        {steps[currentStep - 1].title}: {steps[currentStep - 1].content}
                    </h1>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => {
                            setCurrentStep((prev) => (prev === 1 ? steps.length : prev - 1));
                        }}
                        className="px-5 py-2  bg-[#7950f2] text-white font-medium rounded-3xl text-sm active:translate-y-0.5 transition-all"
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setCurrentStep((prev) => (prev === steps.length ? 1 : prev + 1));
                        }}
                        className="px-5 py-2  bg-[#7950f2] text-white font-medium rounded-3xl text-sm active:translate-y-0.5 transition-all"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
