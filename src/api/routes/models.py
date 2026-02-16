from fastapi import APIRouter
from src.llm.registry import ModelRegistry

router  = APIRouter(prefix="/models")

@router.get("/")
def get_models():
    """
    Returns list of available LLM models
    """

    return ModelRegistry.get_all_models()