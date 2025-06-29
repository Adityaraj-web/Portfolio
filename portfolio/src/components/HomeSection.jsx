import { ArrowDown } from "lucide-react"

export const HomeSection = () => {
    return ( <section 
    id="home" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Adityaraj </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Paul </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-4xl max-auto opacity-0 animate-fade-in-delay-4">
                    I'm a passionate full-stack developer, with a strong technological foundation and an ever curious mind.
                    I love creating smart, responsive solutions that bridge the gap between code and the physical world. 
                    As a bonus, I also enjoy working with sensors and embedded systems, with hands-on experience for the same.
                    Whether it’s crafting clean UIs or integrating real-time data from hardware, I thrive on turning ideas into impactful solutions.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h5 w-5 text-primary" />
        </div>
    </section>
    );
};