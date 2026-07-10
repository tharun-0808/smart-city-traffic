import os
from urllib.parse import quote_plus
from dotenv import load_dotenv
from sqlalchemy import create_engine

load_dotenv()

server = os.getenv("DB_SERVER")
database = os.getenv("DB_NAME")
username = quote_plus(os.getenv("DB_USERNAME"))
password = quote_plus(os.getenv("DB_PASSWORD"))

connection_string = (
    f"mssql+pyodbc://{username}:{password}@{server}:1433/{database}"
    "?driver=ODBC+Driver+18+for+SQL+Server"
    "&Encrypt=yes"
    "&TrustServerCertificate=no"
)

engine = create_engine(connection_string)