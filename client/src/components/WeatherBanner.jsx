import { useEffect, useState } from "react";

const WeatherBanner = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "b77aa6150eb920455430988f15e81981"; // Usa tu API key real
  const city = "Caracas,VE";
  const units = "metric";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}&lang=es`
        );
        const data = await res.json();
        if (res.ok && data.main && data.weather) {
          setWeather({
            temp: Math.round(data.main.temp),
            description: data.weather[0].description,
            icon: data.weather[0].icon,
          });
        } else {
          setWeather(null);
          console.error("Error al obtener el clima:", data.message);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error al obtener el clima:", err);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return null;
  if (!weather)
    return (
      <div className="bg-primary text-white text-sm md:text-base px-4 py-2 flex items-center justify-center gap-4">
        No se pudo obtener el clima.
      </div>
    );

  return (
    <div className="bg-primary text-white text-sm md:text-base px-4 py-2 flex items-center justify-center gap-4">
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="icono clima"
        className="w-10 h-10"
      />
      <span>
        Clima en Trujillo: {weather.temp}°C - {weather.description}
      </span>
    </div>
  );
};

export default WeatherBanner;
