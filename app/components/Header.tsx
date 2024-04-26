'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link";
import { usePathname } from "next/navigation"

export const Header = () => {
  const pathName = usePathname();

  return (
    <header>
      <Link href={'/'}>Home</Link>
      <Link href={'/first-page'}>First page</Link>
      <Link href={'/second-page'}>Second page</Link>

      <SignedOut>
        <SignInButton fallbackRedirectUrl={'/second-page'} /> {/* forceRedirectUrl={'/second-page'} is not working either */}
      </SignedOut>

      <SignedIn>
        <UserButton afterSignOutUrl={pathName}/>
      </SignedIn>
    </header>
  )
}