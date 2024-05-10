
import React, { useState } from 'react';

export default function ConditionalR() {
  const [loggedIn, setLoggedIn] = useState(2);

  return (
    <div>
      {loggedIn === 1 ? <h1>Welcome User1</h1> : loggedIn === 2 ? <h1>Welcome User2</h1> : <h1>Welcome User3</h1>}
    </div>
  );
}
