
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface TestimonialVideo {
  id: string;
  title: string;
  embedUrl: string;
}

const testimonialVideos: TestimonialVideo[] = [
  {
    id: "video1",
    title: "Client Success Story - Weight Loss Journey",
    embedUrl: "https://www.instagram.com/reel/CtqbtTwNBPG/embed"
  },
  {
    id: "video2",
    title: "Transformation at Panther Fitness",
    embedUrl: "https://www.instagram.com/reel/DGQiENkzgyQ/embed"
  }
];

const TestimonialVideos = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="section-padding bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success <span className="text-panther-gold">Stories</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how our members have transformed their lives at Panther Fitness.
          </p>
        </div>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonialVideos.map((video) => (
              <CarouselItem key={video.id} className="md:basis-1/1 lg:basis-1/1">
                <Card className="bg-black/80 border-panther-gold/30 hover:border-panther-gold transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center space-y-4">
                      <h3 className="text-xl font-bold text-white">{video.title}</h3>
                      <div className="relative w-full aspect-video">
                        <iframe 
                          src={video.embedUrl} 
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full rounded-md"
                          style={{ maxHeight: isMobile ? "300px" : "450px" }}
                        ></iframe>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious variant="ghost" className="text-panther-gold hover:text-panther-gold/80 hover:bg-black/50 -left-16" />
            <CarouselNext variant="ghost" className="text-panther-gold hover:text-panther-gold/80 hover:bg-black/50 -right-16" />
          </div>
        </Carousel>
        
        <div className="flex justify-center items-center mt-6 md:hidden">
          <p className="text-gray-400 text-sm">Swipe to see more stories</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideos;
