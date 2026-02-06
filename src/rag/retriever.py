from .vector_store import search

def retrieve_context(question: str) -> str:
    results = search(question)
    return " ".join(results["documents"][0])