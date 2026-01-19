import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="justify-center flex items-center py-8 px-4">
      <p className="text-center text-foreground/75">
        Made with <Heart className="text-red-500 fill-red-400 size-4 inline" />{" "}
        by{" "}
        <Link href={"https://linkedin.com/in/ishanjarwal"}>Ishan Jarwal</Link>
      </p>
    </footer>
  );
};

export default Footer;
