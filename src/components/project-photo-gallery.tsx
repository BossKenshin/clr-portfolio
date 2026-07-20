import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import type { PortfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import chatappContactList from '@/assets/chatapp-sc/chatapp-contact-list.png';
import chatappConvoList from '@/assets/chatapp-sc/chatapp-convo-list.png';
import chatappConvo from '@/assets/chatapp-sc/chatapp-convo.png';
import chatappGroup from '@/assets/chatapp-sc/chatapp-group.png';
import chatappLogin from '@/assets/chatapp-sc/chatapp-login.png';
import motocareExpensesSummary from '@/assets/motocare-sc/motocare-expenses-summary.png';
import motocareScheduleForm from '@/assets/motocare-sc/motocare-schedule-form.png';
import motocareServiceLogs from '@/assets/motocare-sc/motocare-service-logs.png';
import motocareSettings from '@/assets/motocare-sc/motocare-settings.png';
import motocareVehicleInformation from '@/assets/motocare-sc/motocare-vehicle-information.png';
import motorcareDashboard from '@/assets/motocare-sc/motorcare-dashboard.png';
import motorcareMotorList from '@/assets/motocare-sc/motorcare-motor-list.png';
import motorcareScheduleList from '@/assets/motocare-sc/motorcare-schedule-list.png';
import motorcareServiceLogForm from '@/assets/motocare-sc/motorcare-service-log-form.png';

type ProjectPhotoGalleryProps = {
  project: PortfolioData['projects'][number];
};

const projectPhotoMap: Record<string, StaticImageData[]> = {
  'chatapp-sc': [chatappContactList, chatappConvoList, chatappConvo, chatappGroup, chatappLogin],
  'chatappp-sc': [chatappContactList, chatappConvoList, chatappConvo, chatappGroup, chatappLogin],
  'motocare-sc': [
    motocareExpensesSummary,
    motocareScheduleForm,
    motocareServiceLogs,
    motocareSettings,
    motocareVehicleInformation,
    motorcareDashboard,
    motorcareMotorList,
    motorcareScheduleList,
    motorcareServiceLogForm,
  ],
  'moto-care-app': [
    motocareExpensesSummary,
    motocareScheduleForm,
    motocareServiceLogs,
    motocareSettings,
    motocareVehicleInformation,
    motorcareDashboard,
    motorcareMotorList,
    motorcareScheduleList,
    motorcareServiceLogForm,
  ],
};

export function ProjectPhotoGallery({ project }: ProjectPhotoGalleryProps) {
  const folderName = project.photoFolder?.trim();
  const photos = folderName ? projectPhotoMap[folderName] ?? [] : [];

  if (!project.hasphotos || !folderName || photos.length === 0) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Camera className="mr-2 h-4 w-4" />
          View Photos
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle>{project.name} Photos</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Carousel className="mx-auto w-full max-w-3xl">
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={`${project.name}-${index}`}>
                  <div className="group relative overflow-hidden rounded-lg border border-border/70 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <Image
                      src={photo}
                      alt={`${project.name} screenshot ${index + 1}`}
                      className="h-[60vh] w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
