import React from 'react';

const Tabs = props => {
  const { tabs, setTabs } = props;

  const changeTab = (e, i) => {
    const [...curTabs] = tabs;

    for( let tab of curTabs){
      tab.selected = false;
    }

    curTabs[i].selected = true;
    setTabs(curTabs);
  }

  return (
    <div>
      <div>
        {
          tabs.map((tab, i) =>
            <button key={i} onClick={ e => changeTab(e, i)} className={ tab.selected ? "blue" : "grey "}  >{tab.title}</button>
          )
        }
      </div>
      <div>
          {
            tabs.map((tab, i) =>{
              if(tab.selected){
                return <p key={i}>{tab.content}</p>
              }
            }
            )
          }
      </div>
    </div>
  )
}

export default Tabs;