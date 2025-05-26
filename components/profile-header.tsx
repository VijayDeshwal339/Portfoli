"use client";

import { Profile } from "@/types/profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  FileText,
  Download
} from "lucide-react";
import { motion } from "framer-motion";

interface ProfileHeaderProps {
  profile: Profile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <Card className="border-none shadow-md overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5"></div>
      <CardContent className="p-6 pt-0 -mt-16">
        <div className="flex flex-col md:flex-row gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Avatar className="h-32 w-32 border-4 border-background shadow-md">
              <AvatarImage src={profile.avatarUrl} alt={profile.name} />
              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 flex-1"
          >
            <div>
              <h1 className="text-3xl font-bold">{profile.name}</h1>
              <p className="text-xl text-muted-foreground">{profile.title}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <a href={`tel:${profile.phone}`} className="hover:text-primary transition-colors">
                  {profile.phone}
                </a>
              </div>
            </div>
            
            <p className="text-muted-foreground">{profile.bio}</p>
            
            <div className="flex flex-wrap gap-2">
              {profile.socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" variant="outline" className="gap-2">
                    {getSocialIcon(link.icon)}
                    {link.name}
                  </Button>
                </a>
              ))}
              
              <a 
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto"
              >
                <Button className="gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Resume</span>
                  <Download className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}