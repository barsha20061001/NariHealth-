import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import hotspots from "../data/india_health_hotspots";

function getColor(risk) {
  if (risk >= 75) return "#ef4444";
  if (risk >= 60) return "#f59e0b";
  return "#22c55e";
}

export default function HotspotMap() {
  const sorted = [...hotspots].sort(
    (a, b) => b.risk - a.risk
  );

  return (
    <div className="min-h-screen bg-[#fff7fb] p-8">

      <h1 className="text-5xl font-black mb-3">
        National Health Hotspots
      </h1>

      <p className="text-slate-600 mb-8">
        GeoAI powered identification of women's
        health risk clusters across India.
      </p>

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-xl">

          <MapContainer
            center={[22.5937, 78.9629]}
            zoom={5}
            style={{
              height: "700px",
              width: "100%"
            }}
          >
            <TileLayer
              attribution="OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {hotspots.map((spot) => (
              <CircleMarker
                key={spot.state}
                center={[spot.lat, spot.lng]}
                radius={spot.risk / 4}
                pathOptions={{
                  color: getColor(spot.risk),
                  fillColor: getColor(spot.risk),
                  fillOpacity: 0.7
                }}
              >
                <Popup>
                  <div>
                    <h3 className="font-bold">
                      {spot.state}
                    </h3>

                    <p>
                      Risk Score: {spot.risk}
                    </p>

                    <p>
                      Anemia: {spot.anemia}%
                    </p>

                    <p>
                      {spot.recommendation}
                    </p>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>

        </div>

        <div className="space-y-6">

          <div className="bg-white p-6 rounded-3xl shadow-xl">

            <h2 className="text-2xl font-bold mb-4">
              Top Risk States
            </h2>

            {sorted.map((state) => (
              <div
                key={state.state}
                className="flex justify-between py-3 border-b"
              >
                <span>{state.state}</span>

                <span
                  className="font-bold"
                >
                  {state.risk}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-xl">

            <h2 className="text-2xl font-bold mb-4">
              AI Recommendations
            </h2>

            <ul className="space-y-3 text-slate-700">
              <li>
                Deploy camps in Bihar
              </li>

              <li>
                Increase ASHA allocation in
                Jharkhand
              </li>

              <li>
                Prioritize cervical screening
                in UP
              </li>

              <li>
                Expand rural outreach in Odisha
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}