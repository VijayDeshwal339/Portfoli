"use client";

import { Interest } from "@/types/profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Gamepad, Trophy, Plane, Music } from "lucide-react";

interface InterestsSectionProps {
  interests: Interest[];
}

export default function InterestsSection({ interests }: InterestsSectionProps) {
  const getInterestIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'gamepad':
        return <Gamepad className="h-6 w-6" />;
      case 'trophy':
        return <Trophy className="h-6 w-6" />;
      case 'plane':
        return <Plane className="h-6 w-6" />;
      case 'music':
        return <Music className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl">Interests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-lg p-4 border border-border flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                {getInterestIcon(interest.icon)}
              </div>
              <h3 className="font-medium text-lg">{interest.name}</h3>
              <p className="text-muted-foreground text-sm">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}