import { tours } from "../data/data";
import Title from "./Title";
import Tour from "./Tour";

export default function Tours() {
  return (
    <section className="section" id="tours">
      <Title txt1={"featured"} txt2={"tours"} />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour}/>
          );
        })}
      </div>
      <div className="tour-btn">
        <a href="#" className="btn">all tours</a>
      </div>
    </section>
  );
}
