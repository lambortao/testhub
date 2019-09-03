import React, { Component, useState, useEffect } from 'react';

class Admin extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

function Example() {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    document.title = `这是第${count}次修改标题`
  })

  return (
    <div>
      <p>{ count }</p>
      <button onClick={ () => setCount(count + 1) }>加一</button>
    </div>
  )
}

export default Example;