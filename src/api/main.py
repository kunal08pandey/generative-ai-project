from src.api.routes import health, chat, rag
from fastapi import FastAPI

app = FastAPI(title="Generative AI API")

app.include_router(health.router)
app.include_router(chat.router, prefix="/chat")
app.include_router(rag.router, prefix="/rag")

