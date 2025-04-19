
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface BranchPhoto {
  title: string;
  url: string;
}

interface BranchPhotoCarouselProps {
  photos: BranchPhoto[];
}

const BranchPhotoCarousel = ({ photos }: BranchPhotoCarouselProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
            <Card className="border-none">
              <CardContent className="p-0">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious variant="ghost" className="text-panther-gold hover:text-panther-gold/80 hover:bg-black/50" />
        <CarouselNext variant="ghost" className="text-panther-gold hover:text-panther-gold/80 hover:bg-black/50" />
      </div>
    </Carousel>
  );
};

export default BranchPhotoCarousel;
