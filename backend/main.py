from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random
from sqlalchemy import text
from database import engine

app = FastAPI(title="Smart City Traffic API")

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Smart City Traffic API Running"
    }


@app.get("/traffic")
def traffic():

    with engine.connect() as conn:

        result = conn.execute(text("""
            SELECT TOP 1 *
            FROM TrafficData
            ORDER BY id DESC
        """))

        row = result.fetchone()

        if row is None:
            return {
                "vehicles": 0,
                "signals": 0,
                "emergencyVehicles": 0,
                "aqi": 0,
                "density": 0,
                "risk": "LOW",
                "route": "None",
                "carbon": 0
            }

        return {
            "vehicles": row.vehicles,
            "signals": row.signals,
            "emergencyVehicles": row.emergencyVehicles,
            "aqi": row.aqi,

            # Simulated AI metrics
            "density": random.randint(40, 95),
            "risk": random.choice(["LOW", "MEDIUM", "HIGH"]),
            "route": random.choice([
                "Ring Road",
                "Highway",
                "Central Avenue",
                "Airport Road"
            ]),
            "carbon": random.randint(10, 30)
        }


@app.get("/signals")
def signals():
    colors = ["GREEN", "RED", "YELLOW"]

    return {
        "junctionA": random.choice(colors),
        "junctionB": random.choice(colors),
        "junctionC": random.choice(colors),
        "junctionD": random.choice(colors)
    }


@app.get("/prediction")
def prediction():
    return {
        "peak_time": "5:00 PM - 7:00 PM",
        "traffic_level": "Heavy",
        "recommended_route": "Outer Ring Road"
    }


@app.get("/weather")
def weather():
    return {
        "temperature": "35°C",
        "humidity": "62%",
        "wind": "12 km/h",
        "aqi": 74
    }


@app.get("/azure")
def azure():
    return {
        "iotHub": "Online",
        "eventHub": "Receiving",
        "functions": "Running",
        "sql": "Connected",
        "machineLearning": "Predicting"
    }
@app.post("/simulate")
def simulate():

    vehicles = random.randint(1800, 3500)
    signals = 24
    emergency = random.randint(1, 5)
    aqi = random.randint(45, 90)

    with engine.begin() as conn:

        conn.execute(
            text("""
                INSERT INTO TrafficData
                (vehicles, signals, emergencyVehicles, aqi)

                VALUES
                (:vehicles, :signals, :emergency, :aqi)
            """),
            {
                "vehicles": vehicles,
                "signals": signals,
                "emergency": emergency,
                "aqi": aqi,
            }
        )

        conn.commit()

    return {
        "message": "New traffic record inserted into Azure SQL",
        "vehicles": vehicles,
        "signals": signals,
        "emergencyVehicles": emergency,
        "aqi": aqi,
    }