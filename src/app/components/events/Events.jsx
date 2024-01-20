import EventBox from "./EventBox";
import SectionHeader from "./SectionHeader";

import data from "../data/data"; 

// const getEvents = async () => {
//     const res  = await fetch('http://localhost:4000/events');
//     return res.json();
// }


// const Events = async () => {
//     const events = await getEvents();
//     return <section className="section" id="tours">
//         <div className="container mx-auto">
//         <SectionHeader pretitle='World Tour' title='Upcoming Events'/>
//         {/* Event box */}
//         <EventBox events={events} />
//         </div>
//     </section>;
// }

const Events = () => {
    const events = data.events;

    return (
        <section className="section" id="tours">
            <div className="container mx-auto">
                <SectionHeader pretitle='World Tour' title='Upcoming Events'/>
                {/* Event box */}
                <EventBox events={events} />
            </div>
        </section>
    );
};


export default Events;