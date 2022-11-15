import React, { useState } from 'react'

function HookCounter() {
    const [state, setState] = useState(0);

    const onClickHandler = () => {
        setState(state + 1);
    }
  return (
    <div>
      <button onClick={onClickHandler}>count {state}</button>
    </div>
  )
}

export default HookCounter;
