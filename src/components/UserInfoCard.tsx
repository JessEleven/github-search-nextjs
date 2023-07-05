import { SvgFollowers, SvgFollowings, SvgGitHub, SvgRepository, SvgUserImg } from "@/components/assets/SvgMain";
import { SvgBuilding, SvgLink, SvgPinAlt, SvgTwitter } from "@/components/assets/SvgSocialMedia";
import { UserInterface } from "@/interface/user";
import Image from "next/image";

interface Props {
  user: UserInterface;
}

function valideURL(url: string) {
  // Verificar si la URL comienza con "http://" o "https://"
  if (!/^https?:\/\//i.test(url)) {
    // Agregar "https://" al principio de la URL
    url = "https://" + url;
  }
  return url;
}

export const UserInfoCard = ({ user }: Props) => {
  return (
    <section className="mt-4 mb-8 rounded-lg bg-slate-500">
      <div className="container px-2 md:px-3 mx-auto flex flex-col">
        <div className="flex flex-col sm:flex-row mt-4 mb-4  ">
          <div className="sm:w-1/3 text-center mb-4 md:mb-0 rounded-lg">
            <div className="w-24 h-24 mt-0 overflow-hidden object-contain rounded-full inline-flex items-center justify-center bg-slate-300 text-gray-600">
              <Image
                src={user.avatar_url}
                width={98}
                height={98}
                alt={`username ${user.login}`}/>
            </div>
            
            <div className="flex flex-col items-center text-center justify-center">
              <p className="text-sm md:text-base font-semibold mt-2">
                  <span>@</span>{user.login}
              </p>
              <div className="w-32 h-1 bg-indigo-800 rounded mt-2 mb-2"></div>
                <p className="text-sm mx-3 2xl::text-base">
                  {new Date(user.created_at || "").toLocaleDateString("es", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <a datatype="github"
                  className="flex items-center mt-2 rounded-lg px-5 py-1.5 bg-opacity-10 hover:bg-opacity-20 transition-colors duration-300 bg-white md:text-base"
                  href={user.html_url}
                  rel="noreferrer"
                  target="_blank">
                  <SvgGitHub className="fill-slate-300 flex items-center" />
                  <span className="ml-2 text-sm font-semibold">GitHub</span>
                </a>
              </div>
           </div>

          <div className="sm:w-2/3 h-full">
            <p className="text-center md:text-left text-base md:text-lg font-semibold mb-2">
              {user.name}
            </p>

            { user.bio && 
              <p className="h-full md:min-h-[96px] text-base text-justify">
                {user.bio}
              </p>
            }

            <div className="w-full bg-opacity-10 bg-white rounded-lg">
              <div className="grid grid-cols-3 py-4">
                <article className="text-center space-y-1">
                  <div className="flex items-center justify-center">
                    <SvgRepository className="text-yellow-400" />
                  </div>
                  <p className="text-sm mx-3 2xl:text-base font-semibold">
                    Repos
                  </p>
                  <p className="text-base font-semibold text-yellow-400">
                    {user.public_repos}
                  </p>
                </article>

                <article className="text-center space-y-1">
                  <div className="flex items-center justify-center">
                    <SvgFollowers className="text-yellow-400" />
                  </div>
                  <p className="text-sm mx-3 2xl:text-base font-semibold">
                    Followers
                  </p>
                  <p className="text-base font-semibold text-yellow-400">
                    {user.followers}
                  </p>
                </article>

                <article className="text-center space-y-1">
                  <div className="flex items-center justify-center">
                    <SvgFollowings className="text-yellow-400" />
                  </div>
                  <p className="text-sm mx-3 2xl:text-base font-semibold">
                    Following
                  </p>
                  <p className="text-base font-semibold text-yellow-400">
                    {user.following}
                  </p>
                </article>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-2">
                
                { user.location &&
                  <article className="flex items-center bg-opacity-10 bg-white rounded-lg px-3 py-2">
                    <SvgPinAlt className="w-[20px] h-[20px] md:min-w-[20px] md:min-h-[20px] text-yellow-400 lg:min-w-[20px] lg:min-h-[20px]" />
                    <p className="ml-1.5 text-sm 2xl:text-base truncate">
                      {user.location}
                    </p>
                  </article>
                }

                { user.blog && 
                  <article className="flex items-center bg-opacity-10 bg-white hover:bg-opacity-20 transition-colors duration-300 rounded-lg px-3 py-2">
                    <SvgLink className="w-[20px] h-[20px] md:min-w-[20px] md:min-h-[20px] text-yellow-400 lg:min-w-[20px] lg:min-h-[20px]" />
                    <a className="ml-1.5 text-sm 2xl:text-base truncate"
                      href={valideURL(user?.blog)}
                      rel="noreferrer"
                      target="_blank">
                      {user?.blog}
                    </a>
                  </article>
                }

                { user.twitter_username && 
                  <article className="flex items-center bg-opacity-10 bg-white hover:bg-opacity-20 transition-colors duration-300 rounded-lg px-3 py-2">
                    <SvgTwitter className="w-[20px] h-[20px] md:min-w-[20px] md:min-h-[20px] text-yellow-400 lg:min-w-[20px] lg:min-h-[20px]" />
                    <a datatype="twitter"
                      className="ml-1.5 text-sm 2xl:text-base"
                      href={`https://www.twitter.com/${user.twitter_username}`}
                      rel="noreferrer"
                      target="_blank">
                      <span>@</span>{user.twitter_username}
                    </a>
                  </article>
                }

                { user.company && 
                  <article className="flex items-center bg-opacity-10 bg-white rounded-lg px-3 py-2">
                    <SvgBuilding className="w-[20px] h-[20px] md:min-w-[20px] md:min-h-[20px] text-yellow-400 lg:min-w-[20px] lg:min-h-[20px]" />
                    <p className="ml-1.5 text-sm 2xl:text-base truncate">
                      {user.company}
                    </p>
                 </article>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UserInfoCard