import React from 'react';

export default function Choice(props) {
  function renderComponent(choice) {
    const Component = choice; //paper, rock, scissors
    return <Component />;
  }

  return (
    <button
      className={props.choice.name}
      onClick={() => props.handleFunction(props.choice.id)}
    >
      {renderComponent(props.choice.component)}
    </button>
  );
}
