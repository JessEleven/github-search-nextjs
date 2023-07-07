

const AboutPage = () => {
  return (
    <div className="mt-8 p-5 rounded-lg bg-slate-500 bg-opacity-20 block">
      <h2 className="text-lg 2xl:text-[22px] font-semibold text-yellow-400">
        Acerca del sitio (*_*)
      </h2>
      <p className="text-sm 2xl:text-base text-justify mt-2 text-slate-300">
        Esta aplicación fue desarrollada en el Framework de {" "}  
        <a className="underline underline-offset-4 decoration-cyan-400 text-cyan-400 font-semibold"
          datatype="nextjs"
          rel="noopener"
          href="https://nextjs.org/"
          target="_blank">
          Next.js 13
        </a>
        {" "} usando el App Router y
        deplegada en el sitio de {" "}
        <a className="underline underline-offset-4 decoration-cyan-400 text-cyan-400 font-semibold"
          datatype="vercel"
          rel="noopener"
          href="https://vercel.com"
          target="_blank">
          Vercel
        </a>
      </p>
    </div>
  );
}

export default AboutPage