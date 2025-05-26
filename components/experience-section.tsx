"use client";

import { Experience } from "@/types/profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";
import { format, parse } from "date-fns";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Present";
    try {
      const date = parse(dateStr, "yyyy-MM", new Date());
      return format(date, "MMM yyyy");
    } catch (error) {
      return dateStr;
    }
  };

  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl">Work Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div 
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-6 border-l-2 border-primary/30"
          >
            <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              
              <div className="flex flex-wrap gap-y-1 gap-x-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  <span>{experience.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground">{experience.description}</p>
              
              <ul className="space-y-2 mt-4">
                {experience.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}