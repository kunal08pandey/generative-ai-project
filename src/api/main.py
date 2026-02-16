from src.api.routes import health, chat, rag, models
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="Generative AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",
                   "http://myapp.local:5173",
                   "http://192.168.1.9:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(chat.router, prefix="/chat")
app.include_router(rag.router, prefix="/rag")
app.include_router(models.router)

