'use client';
import { useClerk } from "@clerk/nextjs";
import { useAuthContext } from "../providers/AuthProvider";
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();
  const router = useRouter();

  const { isSignedIn, user } = useAuthContext();

  const { openSignIn, openSignUp, signOut, user: userClerk } = useClerk();

  const handleSignUpClick = () => {
    openSignUp({
      redirectUrl: pathName,
    });
  };

  const handleSignInClick = () => {
    openSignIn({
      redirectUrl: pathName,
    });
  };

  const handleSignOutClick = () => {
    signOut(() => {
      router.refresh();
    })
  }

  const deleteUser = async () => {
    await userClerk?.delete();
    router.push('/');
  }

  return (
    <header>
      {isSignedIn ? (
          <>
            <img src={user?.avatarUrl} width={64} height={64} alt="User Avatar" />
            <button onClick={handleSignOutClick}>Sign Out</button>
            <button onClick={deleteUser}>Delete Account</button>
          </>
        ) : (
          <>
            <button onClick={handleSignUpClick}>Sign Up</button>{' '}
            <button onClick={handleSignInClick}>Sign In</button>
          </>
        )}
    </header>
  );
}