from fastapi import APIRouter
from pydantic import BaseModel
from src.llm.gpt_client import GPTClient

router = APIRouter()

class ChatRequest(BaseModel):
    prompt: str

@router.post("/")
def chat(request: ChatRequest):
    llm = GPTClient(api_key="dummy-key")
    response = client.generate(request.prompt)
    return {"response": response}

