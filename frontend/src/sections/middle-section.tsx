import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export const MiddleSection = () => {
  return (
    <div className="container py-20 px-5">
      <h1 className="text-2xl font-normal text-center text-gray-600">
        Захиалсан бараагаа хүлээн авах хамгийн зөв сонголт
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
          <Card className="bg-white p-7 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-row justify-start items-center gap-5">
              <AlertTriangle width={60} height={60} enableBackground="yellow" />
              <h2 className="text-xl font-semibold mb-3">Мэдээлэл</h2>
            </div>
            <p className="text-gray-500 mt-1">
              Нисэх, яармагтаа 50’000төг түүнээс дээш хүргэлт үнэгүй, 50’000
              төгрөгнөөс дооших үнийн дүнд хүргэлтийн тариф нэмэгдэнэ.
              👍Хүргэлтээр авах бол төлбөрөө шилжүүлж баталгаажуулаарай. Нисэх
              Карго - Ereenees Mgl CARGO Нисэх Карго - Ereenees Mgl CARGO Үнийн
              хувьд: жижиг бараа 1000төгрөгнөөс эхлэнэ. 1 кг ачаа 3000 төг,
              жижиг бараа өмд, цамц, хувцас 3000-8000 төг, хайрцагтай ачаа
              гутал, пүүз гэх мэт 5000 төгрөгнөөс эхлэнэ. 1м³ 450.000. Их
              хэмжээний бараа ..г.м үнэ тохиролцоно.
            </p>
          </Card>
          <Card className="bg-white p-7 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-row justify-start items-center gap-5">
              <AlertTriangle width={60} height={60} enableBackground="yellow" />
              <h2 className="text-xl font-semibold mb-3">Мэдээлэл</h2>
            </div>
            <p className="text-gray-500 mt-1">
              Нисэх Карго - Ereenees Mgl CARGO Нисэх Карго - Ereenees Mgl CARGO
              Link захиалга хийхдээ сонгосон барааны линк мөн скрийн шотоор хамт
              явуулна. Манайхаас сонгосон барааны линкээр орж төлбөр хэд болохыг
              хэлнэ. Таны сонгосон барааны үнэ яг төлбөр төлөхөд Хятад дотрох
              ачаа, хүргэлт нэмэгдэж өөрчлөгдөх явдал байдаг тул ахин шалгаарай.
              Ингээд тухайн өдрийн Алифэй ханшаар тооцож төлбөрөө шилжүүлсэний
              дараа таны захиалга хийгдэнэ.
            </p>
          </Card>
          <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-row justify-start items-center gap-5">
              <AlertTriangle width={60} height={60} enableBackground="yellow" />
              <h2 className="text-xl font-semibold mb-3">Анхааруулга</h2>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray-500 mt-1">
                🚛 Тээвэрлэлтийн явцад амархан гэмтэх, хэврэг, эвдрэлд өртөх
                өндөр эрсдэлтэй бараа, бүтээгдэхүүнийг бат бөх, найдвартай сав
                баглаа боодолгүйгээр захиалахгүй байхыг зөвлөж байна.
              </p>
              <p className="text-gray-500 mt-1">
                🚛 Иймд тээвэрлэлтийн явцад гэмтэл, эвдрэл гарсан тохиолдолд
                карго компани хариуцлага хүлээхгүй болохыг анхаарна уу.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
