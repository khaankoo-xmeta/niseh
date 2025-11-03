import Image from "next/image";

export const TouchIn = () => {
  return (
    <div className="flex flex-row justify-between container py-10 items-start px-5 max-md:flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1>Нисэх карго-Ereenees Mgl Cargo</h1>
        <p className="max-w-72">
          Манай хаяг: Буянтухаа спорт цогцолборын автобусны буудалын ард AERO
          TOWN хотхон 304-р байр 2 тоот
        </p>
      </div>
      <div className="flex flex-row w-full max-w-[400px] justify-between gap-10 max-sm:flex-col items-start">
        <div className="flex flex-col gap-2">
          <p>Холбогдох утас:</p>
          <p>☎️ 9969-4954</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <a
            href="https://www.facebook.com/p/%D0%9D%D0%B8%D1%81%D1%8D%D1%85-%D0%9A%D0%B0%D1%80%D0%B3%D0%BE-Ereenees-Mgl-CARGO-61575151237293/"
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/images/facebook.png"}
              alt="niseh cargo facebook"
              width={25}
              height={24}
            />
            <span className="text-sm">Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};
