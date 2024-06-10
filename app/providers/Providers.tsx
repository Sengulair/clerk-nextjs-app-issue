import { auth, currentUser } from '@clerk/nextjs/server';

import { AuthProvider } from './AuthProvider';
import { ClerkProvider } from '@clerk/nextjs';

export default async function Providers({
  children,
}: { children: React.ReactNode }) {
  let authData;
  let userData;

  try {
    authData = await auth();
  } catch (error) {
    console.error('Error fetching auth data', error);
  }
  try {
    userData = await currentUser();
  } catch (error) {
    console.error('Error fetching user data', error);
  }

  console.log(authData, authData?.userId);
  const isSignedIn = !!authData?.userId;

  return (
    <ClerkProvider>
      <AuthProvider
        auth={{
          isSignedIn,
          user: { avatarUrl: userData?.imageUrl },
        }}
      >
        {children}
      </AuthProvider>
    </ClerkProvider>
  );
}
