import os
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

ENVIRONMENT = os.getenv("ENVIRONMENT", os.getenv("APP_ENV", "development")).lower()
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")

if not SUPABASE_URL:
    raise ValueError("Missing SUPABASE_URL in environment variables.")

if not SUPABASE_SERVICE_ROLE_KEY:
    raise ValueError("Missing SUPABASE_SERVICE_ROLE_KEY in environment variables.")

if not YOUTUBE_API_KEY:
    raise ValueError("Missing YOUTUBE_API_KEY in environment variables.")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)


def get_allowed_origins() -> list[str]:
    configured_origins = [
        origin.strip()
        for origin in os.getenv("CORS_ALLOWED_ORIGINS", "").split(",")
        if origin.strip()
    ]

    production_origins = [
        "https://ismonetized.com",
        "https://www.ismonetized.com",
    ]

    if ENVIRONMENT == "production":
        return configured_origins or production_origins

    development_origins = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:3021",
        "http://127.0.0.1:3021",
        *production_origins,
    ]

    return list(dict.fromkeys([*development_origins, *configured_origins]))
