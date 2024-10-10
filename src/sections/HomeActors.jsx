import { Element } from "react-scroll";
import { actors } from "../constants";

const ActorsHome = () => {
  return (
    <section className="my-4">
      <Element name="actors">
        <div className="container">
          <div className="relative flex flex-col gap-10 font-rajdhani">
            {actors.map((actor) => (
              <div key={actor.id}>
                <h1 className="uppercase font-bold text-4xl">{actor.title}</h1>
                {actor.text.map((text, index) => (
                  <p
                    key={`text-${actor.id}-${index}`}
                    className="py-2 text-justify font-rajdhani text-xl"
                  >
                    {text}
                  </p>
                ))}
                <div className="flex flex-col lg:flex-row gap-4 drop-shadow-custom">
                  {actor.images.map((image, index) => (
                    <div key={`image-${actor.id}-${index}`} className="flex-1">
                      <img
                        src={image}
                        alt="actor image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default ActorsHome;
