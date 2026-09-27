import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2 group py-0.5">
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight">
          <span
            className={`text-xl sm:text-2xl font-black tracking-wider ${
              light ? "text-white" : "text-[#003B73]"
            }`}
          >
            ENERI
          </span>
          <span className="relative inline-flex items-center justify-center font-black text-xl sm:text-2xl">
            <span className={light ? "text-white" : "text-[#003B73]"}>X</span>
            <span className="absolute -top-1.5 -right-1 text-xs text-[#5FAF35] font-extrabold select-none">
              ✦
            </span>
          </span>
          <span
            className={`text-xl sm:text-2xl font-black tracking-wider ${
              light ? "text-white" : "text-[#003B73]"
            }`}
          >
            A
          </span>
        </div>
        <div className="flex items-center justify-between -mt-0.5 tracking-[0.28em] text-[9px] sm:text-[10px] font-bold text-[#5FAF35] uppercase">
          <span className="h-[1px] w-2.5 bg-[#5FAF35] inline-block"></span>
          <span>ENERGY SOLUTIONS</span>
          <span className="h-[1px] w-2.5 bg-[#5FAF35] inline-block"></span>
        </div>
      </div>
    </Link>
  );
}



