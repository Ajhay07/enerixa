import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2 group py-1">
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight">
          <span
            className={`text-2xl sm:text-3xl font-black tracking-wider ${
              light ? "text-white" : "text-[#003B73]"
            }`}
          >
            ENERI
          </span>
          <span className="relative inline-flex items-center justify-center font-black text-2xl sm:text-3xl">
            <span className={light ? "text-white" : "text-[#003B73]"}>X</span>
            <span className="absolute -top-1.5 -right-1 text-sm text-[#5FAF35] font-extrabold select-none">
              ✦
            </span>
          </span>
          <span
            className={`text-2xl sm:text-3xl font-black tracking-wider ${
              light ? "text-white" : "text-[#003B73]"
            }`}
          >
            A
          </span>
        </div>
        <div className="flex items-center justify-between -mt-0.5 tracking-[0.3em] text-[10px] sm:text-[11px] font-bold text-[#5FAF35] uppercase">
          <span className="h-[1.5px] w-3 bg-[#5FAF35] inline-block"></span>
          <span>ENERGY SOLUTIONS</span>
          <span className="h-[1.5px] w-3 bg-[#5FAF35] inline-block"></span>
        </div>
      </div>
    </Link>
  );
}


