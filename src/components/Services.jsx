import { services } from "../data/data";
import Service from "./Service";
import Title from "./Title";

export default function Services() {
  return (
    <section className="section services" id="services">
      <Title txt1="our" txt2="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <Service key={service.id} {...service}/>
          );
        })}
      </div>
    </section>
  );
}
