'use client';

import { useClerk, useUser } from "@clerk/nextjs";
import { EmailAddressResource } from '@clerk/types';
import { useState } from "react";

export const Settings = () =>  {
  const { user } = useClerk();
  // const { user } = useUser();

  const [state, setState] = useState(0);

  const addEmailAddress = async (emailAddress: string) => {
    await user?.createEmailAddress({
      email: emailAddress,
    });
    // setState((prev) => prev + 1); // added to force a re-render
  };

  const removeEmailAddress = async (emailAddress: EmailAddressResource) => {
    await emailAddress.destroy();
    // setState((prev) => prev + 1); // added to force a re-render
  };

  return <>
    <ul>
      {user?.emailAddresses.map((emailAddress) => (
        <li key={emailAddress.id}>
          {emailAddress.emailAddress}
  
          <button onClick={() => removeEmailAddress(emailAddress)}>Remove</button>
        </li>
      ))}
    </ul>
    <button onClick={() => addEmailAddress('test@example.com')}>Add Email Address</button>
  </>;
}