import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "/image1.jpg";
import image2 from "/image2.webp";
import image3 from "/image3.webp";

// const images = [image1, image2, image3];

const Service = () => {
  return (
    <div className="flex justify-center items-center mt-[-46px] ml-0.5 mr-0.5 py-14 bg-blue-900 px-4 sm:px-0">
      <Carousel className="w-full sm:w-[800px] max-w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              className="overflow-hidden flex flex-col sm:flex-row justify-center gap-8"
              key={index}
            >
              <div className="w-full  mt-4 sm:w-1/2">
                <Card className="h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="relative w-full h-full m-5 bg-white shadow-lg">
                      <div className="flex items-center w-full h-20 bg-blue-900">
                        <img
                          className="fas fa-bezier-curve pb-5 fa-3x mx-auto text-white"
                          src={image1}
                          alt=""
                        />
                      </div>
                      <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
                        UI Design
                      </p>
                      <p className="p-2 text-sm text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
                        <i className="fas fa-chevron-right mt-2 text-orange-500"></i>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="w-full mt-4 sm:w-1/2">
                <Card className="h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="relative w-full h-full m-5 bg-white shadow-lg">
                      <div className="flex items-center w-full h-20 bg-blue-900">
                        <img
                          className="fas fa-bezier-curve pb-5 fa-3x mx-auto text-white"
                          src={image3}
                        />
                      </div>
                      <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
                        UI Design
                      </p>
                      <p className="p-2 text-sm text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
                        <i className="fas fa-chevron-right mt-2 text-orange-500"></i>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="w-full mt-4 sm:w-1/2">
                <Card className="h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-6 hover:bg-slate-400">
                    <div className="relative w-full h-full m-5 bg-white shadow-lg">
                      <div className="flex items-center w-full h-20 bg-blue-900">
                        <img
                          className="fas fa-bezier-curve pb-5 fa-3x mx-auto text-white"
                          src={image2}
                        />
                      </div>
                      <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
                        UI Design
                      </p>

                      <p className="p-2 pb-5 text-sm text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Service;
