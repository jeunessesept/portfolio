import Link from "next/link";
import {SiLinkedin, SiGithub, SiGmail} from "react-icons/si"

const LinkButton = ({ url, children }) => {
  return (
    <Link
      href={url}
      className="w-20 p-5 mx-2 mt-4 relative flex h-full items-center justify-center rounded-full shadow duration-300 ease-in-out hover:scale-110 l bg-slate-600 hover:bg-slate-700"
    >
     {children}
    </Link>
  );
};

export default function ContactLink() {
  return (
    <div className="flex gap-4 py-2 justify-center ">
      <LinkButton url="https://www.linkedin.com/in/jiacinto-branducci/">
        <span className="text-slate-400"> <SiLinkedin /></span>
      </LinkButton>

      <LinkButton url="https://github.com/jeunessesept">
        <span className="text-slate-400"> <SiGithub /></span>
      </LinkButton>

      <LinkButton url="mailto:j.branducci.pro@gmail.com?subject=Contact portfolio">
        <span className="text-slate-400"> <SiGmail /> </span>
      </LinkButton>
    </div>
  );
}
