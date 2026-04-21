from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import supabase
from app.routers.check import router as check_router
from app.routers.feedback import router as feedback_router
from app.routers.saved import router as saved_router
app = FastAPI(title="YouTube Monetization Checker API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # dev only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(check_router)
app.include_router(feedback_router)
app.include_router(saved_router)


@app.get("/")
def root():
    return {"message": "API is running"}


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/test-db")
def test_db():
    response = supabase.table("channels").select("*").limit(1).execute()
    return {
        "success": True,
        "data": response.data,
    }