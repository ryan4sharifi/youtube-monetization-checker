from fastapi import FastAPI
from app.config import supabase
from app.routers.check import router as check_router
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(title="YouTube Monetization Checker API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # dev only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(check_router)


@app.get("/")
def root():
    return {"message": "API is running"}


@app.get("/test-db")
def test_db():
    response = supabase.table("channels").select("*").limit(1).execute()
    return {
        "success": True,
        "data": response.data
    }