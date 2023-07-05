"use client";

import UserInfoCard from "@/components/UserInfoCard";
import UserSearchForm from "@/components/UserSearchForm";
import { SvgLogo } from "@/components/assets/SvgHeader";
import { UserInterface } from "@/interface/user";
import { useState } from "react";


const Home = () => {

  const [user, setUser] = useState<UserInterface | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUser = async(username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    console.log(res)

    if (!res.ok) {
      setUser(null)
      setError("No encontrado")
      return;
    }
    setUser(await res.json())
    setError(null)
}
  return (
    <>
      <UserSearchForm getUser={getUser}/>

      {!user && !error && (
        <div className="flex justify-center mt-8">
          <div className="flex items-center justify-center animate-pulse rounded-lg bg-opacity-10 bg-white h-40 w-40">
           <SvgLogo className="w-24 opacity-50"/>
          </div>
        </div>
        )
      }

      { error && (
           <div className="flex justify-center mt-8">
            <div className="flex flex-col items-center justify-center animate-pulse rounded-lg bg-opacity-10 bg-white h-40 w-40">
              <p className="text-base text-center font-semibold text-white">{error}</p>
              <SvgLogo className="w-20 opacity-50 mt-1"/>
            </div>
          </div>
        )
      }
       
      {user && <UserInfoCard user={user}/>}
    </>
  )
}
export default Home