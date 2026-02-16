from fastapi import APIRouter
from pydantic import BaseModel
from src.llm.ollama_client import OllamaClient

router = APIRouter()

class ChatRequest(BaseModel):
    prompt: str

@router.post("/")
def chat(request: ChatRequest):
    client = OllamaClient()
    response = client.generate(request.prompt)
    return {
        "role": "assistant",
        "content": response  # raw markdown text
    }

