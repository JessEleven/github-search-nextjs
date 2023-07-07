import { SvgSearch } from "@/components/assets/SvgHeader";

interface Props {
  getUser: (username: string) => Promise<void>;
}

const UserSearchForm = ({ getUser }: Props) => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = e.currentTarget.username.value
    if (!username) return
    await getUser(username)

    console.log(username)
  }

  return (
    <form onSubmit={handleSubmit}
          className="mt-8">
      <div className="flex items-center">
        <div className="relative w-full">
          <div className="flex py-2.5 absolute pl-4">
            <SvgSearch className="text-indigo-800"/>
          </div>
          <input
              className="bg-slate-300 flex items-center text-sm w-full pr-4 pl-12 py-2.5 out-input rounded-tl-lg rounded-bl-lg"
              name="username"
              type="search"
              placeholder="Enter username GitHub"
              autoFocus/>
        </div>

        <button 
          className="py-2.5 px-5 text-sm transition-colors duration-300 hover:bg-indigo-900 bg-indigo-800 font-medium rounded-tr-lg rounded-br-lg">
            Buscar
        </button>
      </div>
    </form>
  )
}

export default UserSearchForm