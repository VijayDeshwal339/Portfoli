"use client";

import { Education } from "@/types/profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { format, parse } from "date-fns";
import { Badge } from "./ui/badge";

interface EducationSectionProps {
  educations: Education[];
}

export default function EducationSection({ educations }: EducationSectionProps) {
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
        <CardTitle className="text-2xl">Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {educations.map((education, index) => (
          <motion.div 
            key={education.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-6 border-l-2 border-primary/30"
          >
            <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary"></div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-xl font-semibold">
                  {education.degree} in {education.field}
                </h3>
                {education.gpa && (
                  <Badge variant="outline" className="w-fit">
                    GPA: {education.gpa}
                  </Badge>
                )}
              </div>
              
              <div className="flex flex-wrap gap-y-1 gap-x-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <GraduationCap className="h-4 w-4" />
                  <span>{education.institution}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(education.startDate)} - {formatDate(education.endDate)}</span>
                </div>
              </div>
              
              {education.description && (
                <div className="flex items-start gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4 mt-1 flex-shrink-0" />
                  <p>{education.description}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}