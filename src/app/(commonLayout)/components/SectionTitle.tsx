import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

type SectionProps = {
  subtitle: string;
  title: string;
};

const SectionTitle = ({ subtitle, title }: SectionProps) => {
  return (
    <div className="flex justify-between mt-20 border-b max-w-[1201px m-auto] mx-5 lg:mx-0 m-auto">
      <h1 className="font-semibold border-b-2 border-[#008ECC] md:text-[24px] leading-7">
        {subtitle} <span className="text-[#008ECC]">{title}</span>
      </h1>
      <Link
        href={"/products"}
        className="flex justify-center items-center gap-1 font-medium md:text-[16px] leading-4 mb-1 hover:text-[#008ECC]"
      >
        <span>View All</span>
        <MdArrowForwardIos className="text-[#008ECC] mb-0.5" />
      </Link>
    </div>
  );
};

export default SectionTitle;
