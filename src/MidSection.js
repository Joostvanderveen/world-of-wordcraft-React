import Buttons from "./Buttons";
import InputField from "./InputField";
import WordField from "./WordField";

function MidSection() {
  return (
    <section>
      <div className="mid-wrapper component-border">
        <div className="mid-top-part component-border">
          <div className="info-block component-border">
            <h1>Informatie, puntentelling</h1>
            <h3>Level : 1</h3>
            <h3>Punten : 53</h3>
            <h3>Taal : Engels</h3>
            <h3>Fouten : 4</h3>
            <h3>Goed : 17</h3>
          </div>
          <div className="character-block component-border">
            <h1>Character</h1>
          </div>
        </div>

        <div className="mid-bottom-part component-border">
          <div className="show-word-block component-border">
            {/* <h1>Woord dat vertaald moet worden</h1> */}
            <WordField />
          </div>
          <div className="input-word-block component-border">
            {/* <h1>Input vertaling</h1> */}
            <InputField />
          </div>
          <div className="buttons-word-block component-border">
            {/* <h1>Submit, Next</h1> */}
            <Buttons />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MidSection;
