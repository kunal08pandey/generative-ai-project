from fastapi import APIRouter
from pydantic import BaseModel
from src.rag.retriever import retrieve_context
from src.llm.ollama_client import OllamaClient

router = APIRouter()

class RagRequest(BaseModel):
    question: str
@router.post("/")
def rag(request: RagRequest):
    context = retrieve_context(request.question)
    llm = OllamaClient()
    prompt = f"Context:{context}\nQuestion: {request.question}"
    response = llm.generate(prompt)
    return {"response": response}    
