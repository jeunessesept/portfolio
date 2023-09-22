import Link from "next/link";
import {SiLinkedin, SiGithub, SiGmail} from "react-icons/si"

import { LinkButton } from "./ContactlinkButton";

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
