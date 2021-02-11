import NavPixels from './inputComponents/NavPixels'
import NavColors from './inputComponents/NavColors'

const Navigation = ({ name, handleClick }) => {

  return (
    <div>
      <button onClick={() => handleClick(name)}>Go back</button>
      <NavPixels obj={false} type={'fontSize'}/>
      <NavColors obj={false} type={'bg'} toChange={'background'} whichColor={'backgroundColor'} />
      <NavColors obj={false} type={'font'} toChange={'font'} whichColor={'fontColor'} />  
      <hr/>
      <span>NOTIFICATIONS</span>
      <NavPixels obj={'notification'} type={'notifFontSize'}/>
      <NavColors obj={'notification'} type={'notifColor'} toChange={'font'} whichColor={'fontColor'} />  
      <NavColors obj={'notification'} type={'notifBg'} toChange={'background'} whichColor={'backgroundColor'} />  
      <hr/>
      <span>DROPDOWNS</span>
      <NavPixels obj={'dropdown'} type={'ddFontSize'}/>
      <NavColors obj={'dropdown'} type={'ddBg'}  toChange={'background'} whichColor={'backgroundColor'}/>
      <NavColors obj={'dropdown'} type={'ddSel'} toChange={'selected'} whichColor={'selectedBackground'}/>
      <NavColors obj={'dropdown'} type={'ddColor'} toChange={'font'} whichColor={'fontColor'}/>
      <NavColors obj={'dropdown'} type={'ddHover'}  toChange={'hover'} whichColor={'hoverBackground'}/>
    </div>
  );
};

export default Navigation;
