"use client"

import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80" alt="Album cover" className="w-12 h-12 rounded-md" />
          <div>
            <h3 className="font-semibold">Neon Dreams</h3>
            <p className="text-sm text-muted-foreground">Aria Luna</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <SkipBack className="w-6 h-6 cursor-pointer" />
          {isPlaying ? (
            <Pause className="w-8 h-8 cursor-pointer" onClick={() => setIsPlaying(false)} />
          ) : (
            <Play className="w-8 h-8 cursor-pointer" onClick={() => setIsPlaying(true)} />
          )}
          <SkipForward className="w-6 h-6 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-2 w-1/4">
          <Volume2 className="w-5 h-5" />
          <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
        </div>
      </div>
    </div>
  );
}