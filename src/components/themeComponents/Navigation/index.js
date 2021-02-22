import NavPixels from "./NavPixels";
import NavColors from "./NavColors";
import BackgroundImage from './BackgroundImage'
import GoBack from "../GoBack";

const Navigation = ({ handleClick }) => {
  return (
    <div>
      <GoBack handleClick={handleClick}>Go back</GoBack>
      <NavPixels obj={false} type={"fontSize"} />
      <NavColors
        obj={false}
        type={"backgroundColor"}
        toChange={"background"}
      />
      <BackgroundImage/>
      <NavColors
        obj={false}
        type={"fontColor"}
        toChange={"font"}
      />
      <hr />
      <span>NOTIFICATIONS</span>
      <NavPixels obj={"notification"} type={"notifFontSize"} />
      <NavColors
        obj={"notification"}
        type={"notifColor"}
        toChange={"font"}
      />
      <NavColors
        obj={"notification"}
        type={"notifBg"}
        toChange={"background"}
      />
      <hr />
      <span>DROPDOWNS</span>
      <NavPixels obj={"dropdown"} type={"ddFontSize"} />
      <NavColors
        obj={"dropdown"}
        type={"ddBg"}
        toChange={"background"}
      />
      <NavColors
        obj={"dropdown"}
        type={"ddSel"}
        toChange={"selected"}
      />
      <NavColors
        obj={"dropdown"}
        type={"ddColor"}
        toChange={"font"}
      />
      <NavColors
        obj={"dropdown"}
        type={"ddHover"}
        toChange={"hover"}
      />
    </div>
  );
};

export default Navigation;
