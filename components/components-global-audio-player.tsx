"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

export function GlobalAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime)

    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play()
      setIsPlaying(true)
    } else {
      audioRef.current?.pause()
      setIsPlaying(false)
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0]
    setVolume(volumeValue)
    if (audioRef.current) {
      audioRef.current.volume = volumeValue
    }
  }

  const handleTimeChange = (newTime: number[]) => {
    const timeValue = newTime[0]
    setCurrentTime(timeValue)
    if (audioRef.current) {
      audioRef.current.currentTime = timeValue
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-2 sm:p-4">
      <audio ref={audioRef} src="/path-to-your-audio-file.mp3" />
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button size="icon" variant="ghost" className="hidden sm:flex w-12 h-12">
            <SkipBack className="h-6 w-6" />
          </Button>
          <Button size="icon" onClick={togglePlay} className="w-16 h-16">
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
          </Button>
          <Button size="icon" variant="ghost" className="hidden sm:flex w-12 h-12">
            <SkipForward className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex-1 w-full sm:w-auto flex items-center space-x-2">
          <span className="text-sm w-12 text-right">{formatTime(currentTime)}</span>
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={handleTimeChange}
            className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px]"
          />
          <span className="text-sm w-12">{formatTime(duration)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Volume2 className="h-6 w-6" />
          <Slider
            className="w-24"
            value={[volume]}
            max={1}
            step={0.01}
            onValueChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  )
}