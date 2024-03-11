import Image from "next/image"
import MenuItem from "../menu/MenuItem"
import SectionHeaders from "./SectionHeaders"
export default function HomeMenu() {
    return (
        <>
            <section className="">
                <div className='absolute  left-0 right-0 '>
                    <div className="absolute left-0 -top-36 -z-10">
                        <Image src={'/sallad1.png'} width={109} height={189} alt='sallad1' />
                    </div>

                    <div className="absolute -top-36  right-0 -z-10">
                        <Image src={'/sallad2.png'} width={107} height={195} alt='sallad2' />
                    </div>
                </div>

                <div className="text-center my-4">
                    <SectionHeaders subHeader={'Check out'} mainHeader={'Menu'} />
                </div >

                <div className="grid grid-cols-3 gap-4">
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </div>
            </section>

            <section className="text-center my-16">
                <SectionHeaders
                    subHeader={'Our story'}
                    mainHeader={'About us'}
                />

                <div className="text-gray-400 max-w-md mx-auto flex flex-col gap-4">
                    <p>
                        Pizza is a dish of Italian origin. It is made of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomatoes or tomato sauce, olives, mozzarella or other cheese, and many other ingredients.
                    </p>
                    <p>
                        Modern pizza evolved from similar flatbread dishes in Naples, Italy, in the 18th or early 19th century.[31] Before that time, flatbread was often topped with ingredients such as garlic, salt, lard, and cheese. It is uncertain when tomatoes were first added and there are many conflicting claims,[31] though it certainly could not have been before the 16th century and the Columbian Exchange. Pizza was sold from open-air stands and out of pizza bakeries until about 1830, when pizzerias in Naples started to have stanze with tables where clients could sit and eat their pizzas on the spot.[32]
                    </p>

                    <p>
                        In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is. Before use, a peel is typically sprinkled with cornmeal to allow the pizza to easily slide on and off it.[43] When made at home, a pizza can be baked on a pizza stone in a regular oven to reproduce some of the heating effect of a brick oven. Cooking directly on a metal surface results in too rapid heat transfer to the crust, burning it.[44] Some home chefs use a wood-fired pizza oven, usually installed outdoors. As in restaurants, these are often dome-shaped, as pizza ovens have been for centuries,[45] in order to achieve even heat distribution. Another variation is grilled pizza, in which the pizza is baked directly on a barbecue grill. Greek pizza, like deep dish Chicago and Sicilian style pizza, is baked in a pan rather than directly on the bricks of the pizza oven.
                    </p>
                </div>
            </section>

            <section className="text-center my-8">
                <SectionHeaders
                    subHeader={'Don\'t hesitate'}
                    mainHeader={'Contact us'}
                />

                <div className="mt-8">
                    <a href="tel:+46738123123" className="text-4xl underline text-gray-500">
                        +46 738 123 123
                    </a>
                </div>
            </section>

        </>
    )
}