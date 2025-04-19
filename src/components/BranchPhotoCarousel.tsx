
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
    <Carousel className="w-full relative">
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
      <div className="block">
        <CarouselPrevious 
          variant="ghost" 
          className="text-panther-gold hover:text-panther-gold/80 hover:bg-black/50 absolute left-2 md:-left-12" 
          size="icon"
        />
        <CarouselNext 
          variant="ghost" 
          className="text-panther-gold hover:text-panther-gold/80 hover:bg-black/50 absolute right-2 md:-right-12" 
          size="icon"
        />
      </div>
    </Carousel>
  );
};

export default BranchPhotoCarousel;
