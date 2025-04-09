import * as React from 'react'
import { useState, useEffect } from "react"
import { Cloud, CloudRain, Sun, CloudSun, Snowflake, Zap, Droplets, MapPin, Loader2 } from "lucide-react"

interface WeatherData {
  temp: number
  condition: string
  location: string
  icon?: string
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const API_KEY = '54dce6a84582f2e4c86034f26c246d42'
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)

        if (!response.ok) throw new Error('Weather data unavailable')

        const data = await response.json()
        setWeather({
          temp: Math.round(data.main.temp),
          condition: data.weather[0].main.toLowerCase(),
          location: data.name,
          icon: data.weather[0].icon
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err))
        setWeather({
          temp: 28,
          condition: "sunny",
          location: "Kathmandu"
        })
      } finally {
        setLoading(false)
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude)
        },
        () => {
          fetchWeather(27.7172, 85.3240)
        }
      )
    } else {
      fetchWeather(27.7172, 85.3240)
    }
  }, [])

  const getWeatherIcon = () => {
    if (!weather?.icon) return <Sun className="h-4 w-4" />

    const iconMap: Record<string, React.ReactNode> = {
      '01d': <Sun className="h-4 w-4 text-yellow-400" />,
      '01n': <Sun className="h-4 w-4 text-yellow-200" />,
      '02d': <CloudSun className="h-4 w-4 text-yellow-300" />,
      '02n': <CloudSun className="h-4 w-4 text-gray-300" />,
      '03d': <Cloud className="h-4 w-4 text-gray-400" />,
      '03n': <Cloud className="h-4 w-4 text-gray-400" />,
      '04d': <Cloud className="h-4 w-4 text-gray-500" />,
      '04n': <Cloud className="h-4 w-4 text-gray-500" />,
      '09d': <CloudRain className="h-4 w-4 text-blue-400" />,
      '09n': <CloudRain className="h-4 w-4 text-blue-400" />,
      '10d': <Droplets className="h-4 w-4 text-blue-500" />,
      '10n': <Droplets className="h-4 w-4 text-blue-500" />,
      '11d': <Zap className="h-4 w-4 text-yellow-500" />,
      '11n': <Zap className="h-4 w-4 text-yellow-500" />,
      '13d': <Snowflake className="h-4 w-4 text-blue-200" />,
      '13n': <Snowflake className="h-4 w-4 text-blue-200" />,
      '50d': <Cloud className="h-4 w-4 text-gray-300" />,
      '50n': <Cloud className="h-4 w-4 text-gray-300" />
    }

    return iconMap[weather.icon] || <Sun className="h-4 w-4" />
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center px-3 py-2 bg-white/10 rounded-lg min-w-[180px] max-w-[220px]">
        <Loader2 className="h-4 w-4 animate-spin" />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm min-w-[180px] max-w-[220px]">
      {weather ? (
        <>
          <div className="flex items-center space-x-2">
            {getWeatherIcon()}
            <span className="font-medium">{weather.temp}°C</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3 opacity-70" />
            <span className="text-sm truncate max-w-[100px]">{weather.location}</span>
          </div>
        </>
      ) : (
        <span className="text-sm">Weather unavailable</span>
      )}
    </div>
  )
}